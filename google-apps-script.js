// ─────────────────────────────────────────────────────────────────────────────
// AutoDeal — Google Sheets Webhook
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO DEPLOY:
//   1. Open your Google Sheet
//   2. Extensions → Apps Script
//   3. Delete any existing code, paste this entire file
//   4. Click "Deploy" → "New deployment"
//   5. Type: Web app
//   6. Execute as: Me
//   7. Who has access: Anyone
//   8. Click Deploy → copy the Web App URL
//   9. Add that URL as GOOGLE_SHEETS_WEBHOOK_URL in Vercel env vars
// ─────────────────────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted At", "Name", "Role", "Email", "Brief", "Status"]);
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
    }

    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.submittedAt,
      data.name,
      data.role,
      data.email,
      data.brief,
      data.status,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
