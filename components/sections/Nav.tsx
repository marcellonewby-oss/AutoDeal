"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "How It Works", href: "#insights", active: true },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Results", href: "#ventures" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 flex justify-between items-center px-12 py-6 transition-all duration-500",
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl shadow-[0_0_60px_rgba(212,175,55,0.06)] py-4"
          : "bg-neutral-950/60 backdrop-blur-xl"
      )}
    >
      <div className="font-headline text-2xl font-bold tracking-tighter text-primary uppercase select-none">
        AutoLead
      </div>

      <div className="hidden md:flex items-center space-x-12">
        {links.map(({ label, href, active }) => (
          <a
            key={label}
            href={href}
            className={cn(
              "font-label text-xs uppercase tracking-[0.05rem] transition-colors",
              active
                ? "text-primary border-b border-primary pb-0.5"
                : "text-neutral-400 hover:text-neutral-100"
            )}
          >
            {label}
          </a>
        ))}
      </div>

      <Button size="sm" className="text-sm px-6 py-2">
        Get Started
      </Button>
    </nav>
  );
}
