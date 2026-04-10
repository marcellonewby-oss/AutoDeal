"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

        {/* Right — GHL form embed */}
        <div className="bg-surface-container-high rounded-xl shadow-2xl border border-primary/10 overflow-hidden">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/twk03hHUFWan05RiIUEy"
            style={{ width: "100%", height: "884px", border: "none" }}
            id="inline-twk03hHUFWan05RiIUEy"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-id="twk03hHUFWan05RiIUEy"
            title="Apply for AutoLead"
          />
        </div>
      </div>
    </section>
  );
}
