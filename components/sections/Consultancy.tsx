"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Full Pipeline Audit",
    body: "We dissect your current outbound, find where revenue is leaking, and map the fastest path to consistent booked calls.",
  },
  {
    icon: Sparkles,
    title: "Done-For-You Automation",
    body: "We build, launch, and manage your entire AI-powered outbound system — you just show up to the meetings.",
  },
];

export function Consultancy() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      brief: (form.elements.namedItem("brief") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Submission failed.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-32 px-12 bg-neutral-950 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        {/* Left — copy */}
        <div>
          <h2 className="font-headline text-5xl md:text-7xl font-bold mb-8 leading-none">
            Activate Your <br />
            <span className="text-primary italic">Pipeline</span>.
          </h2>
          <p className="font-body text-xl text-on-surface-variant mb-12 leading-relaxed">
            We onboard a limited number of clients each quarter to guarantee
            elite execution. If you&rsquo;re serious about scaling revenue on
            autopilot, apply now.
          </p>

          <div className="space-y-8">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-6">
                <span className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <h5 className="font-bold text-lg mb-1">{title}</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-surface-container-high p-12 rounded-xl shadow-2xl border border-primary/10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-6">
              <span className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </span>
              <h3 className="font-headline text-3xl">Application Received.</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">
                Our team will review your brief and reach out within 48
                hours to discuss your pipeline strategy.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Julian Vane" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Input id="role" placeholder="Founder / CEO" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@yourcompany.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brief">Tell Us About Your Business</Label>
                <Textarea
                  id="brief"
                  placeholder="What do you sell, who do you sell to, and what's your current outbound situation?"
                  rows={4}
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-400 text-center">{error}</p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full text-base"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Apply for AutoLead"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
