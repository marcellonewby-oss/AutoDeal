const steps = [
  {
    n: "01",
    title: "Targeting",
    body: "We map your ideal buyer profile with surgical precision — industry, intent signals, company size, and pain points.",
  },
  {
    n: "02",
    title: "Automation",
    body: "Custom AI sequences are built to engage your prospects at scale — personalised, timely, and impossible to ignore.",
  },
  {
    n: "03",
    title: "Qualification",
    body: "Our systems filter noise from signal, surfacing only the leads with real intent so your team closes, not chases.",
  },
  {
    n: "04",
    title: "Dominance",
    body: "A fully autonomous pipeline that compounds over time — feeding revenue into your business while you sleep.",
  },
];

export function Method() {
  return (
    <section
      id="insights"
      className="py-32 px-12 bg-surface-container-low border-y border-primary/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="font-label text-primary text-xs uppercase tracking-[0.4em] mb-4 block">
            The Methodology
          </span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold">
            The AutoLead <span className="italic">Method</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map(({ n, title, body }, i) => (
            <div
              key={n}
              className="relative p-8 border-l border-primary/20 group hover:bg-surface-container-high transition-colors duration-300 cursor-default"
            >
              {/* Connecting line at top on large screens */}
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-14 right-0 w-px h-8 bg-primary/10" />
              )}

              <span className="font-serif text-5xl font-light text-primary/25 group-hover:text-primary/60 transition-colors duration-300 block mb-6 select-none">
                {n}
              </span>
              <h3 className="font-serif text-2xl font-bold mb-4">{title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                {body}
              </p>

              {/* Hover accent line */}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
