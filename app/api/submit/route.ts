import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const NOTION_DATABASE_ID = "a474d25457ef4878af8457201aa2ce0c";

export async function POST(req: NextRequest) {
  const { name, role, email, brief } = await req.json();

  if (!name || !email || !brief) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const results: { notion?: string; sheets?: string } = {};
  const errors: { notion?: string; sheets?: string } = {};

  // ── Notion ──────────────────────────────────────────────────────────────────
  try {
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        Role: {
          rich_text: [{ text: { content: role || "" } }],
        },
        Email: {
          email: email,
        },
        Brief: {
          rich_text: [{ text: { content: brief } }],
        },
        "Submitted At": {
          date: { start: new Date().toISOString() },
        },
        Status: {
          select: { name: "New Lead" },
        },
      },
    });
    results.notion = "ok";
  } catch (err: unknown) {
    console.error("Notion error:", err);
    errors.notion = err instanceof Error ? err.message : "Unknown error";
  }

  // ── Google Sheets (via Apps Script webhook) ──────────────────────────────────
  try {
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) throw new Error("GOOGLE_SHEETS_WEBHOOK_URL not set.");

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: new Date().toLocaleString("en-GB", { timeZone: "Europe/Madrid" }),
        name,
        role: role || "",
        email,
        brief,
        status: "New Lead",
      }),
    });

    if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    results.sheets = "ok";
  } catch (err: unknown) {
    console.error("Sheets error:", err);
    errors.sheets = err instanceof Error ? err.message : "Unknown error";
  }

  // If both failed, return 500
  if (errors.notion && errors.sheets) {
    return NextResponse.json(
      { error: "Both integrations failed.", details: errors },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, results, errors });
}
