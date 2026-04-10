const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Free Pipeline Audit", href: "#contact", highlight: true },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 w-full border-t border-neutral-800/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 max-w-7xl mx-auto gap-4">
        <p className="font-label text-xs uppercase tracking-[0.05rem] text-neutral-500">
          © 2026 AutoLead. All rights reserved.
        </p>

        <div className="flex space-x-10">
          {footerLinks.map(({ label, href, highlight }) => (
            <a
              key={label}
              href={href}
              className={
                highlight
                  ? "font-label text-xs uppercase tracking-[0.05rem] text-primary hover:text-primary/70 transition-colors"
                  : "font-label text-xs uppercase tracking-[0.05rem] text-neutral-500 hover:text-white transition-colors"
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
