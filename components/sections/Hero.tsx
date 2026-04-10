import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.10)_0%,rgba(19,19,19,1)_70%)]" />

      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-35">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Abstract cosmic nebulae"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <span className="inline-block font-label text-xs uppercase tracking-[0.3em] text-primary mb-8 animate-fade-in">
          Engineered for Dominance
        </span>

        <h1 className="font-headline text-6xl md:text-8xl font-bold leading-none tracking-tighter text-on-surface mb-10 animate-fade-up">
          The Sovereign <br />
          <span className="italic text-primary">Engine</span> of Leads.
        </h1>

        <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards]">
          AutoLead fuses precision AI automation with ruthless sales strategy.
          We don&rsquo;t just generate leads; we build pipelines that print
          revenue on autopilot.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]">
          <Button size="lg">Start Automating</Button>
          <Button size="lg" variant="outline">
            View Philosophy
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-12 z-10">
        <div className="flex items-center space-x-4 opacity-40">
          <span className="w-12 h-px bg-primary" />
          <span className="font-label text-[10px] uppercase tracking-widest">
            Scroll to Descend
          </span>
        </div>
      </div>
    </section>
  );
}
