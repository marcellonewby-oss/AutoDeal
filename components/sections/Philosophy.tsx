import Image from "next/image";

const beliefs = [
  {
    index: "01",
    label: "The Core Belief",
    body: "Most businesses bleed revenue from cold outreach that never converts. AutoLead ends that. Every touchpoint is engineered to close — not just contact.",
  },
  {
    index: "02",
    label: "Automated Precision",
    body: "Attention is scarce; timing is everything. We deploy AI that identifies, qualifies, and engages your ideal buyers before your competitors even know they exist.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          {/* Left column */}
          <div className="md:col-span-7">
            <h2 className="font-headline text-5xl md:text-7xl font-bold mb-16 leading-none tracking-tight">
              Revenue is the <br />
              New <span className="italic">Leverage</span>.
            </h2>

            <div className="space-y-14">
              {beliefs.map(({ index, label, body }) => (
                <div key={index} className="group">
                  <span className="font-label text-primary text-sm mb-3 block">
                    {index} / {label}
                  </span>
                  <p className="font-body text-2xl text-on-surface leading-snug">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image card */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden shadow-2xl border border-primary/10 relative group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUkEvI9eG2HesWP3Ak5n6kE_szSeuCeRoXKuyEaxOMMWrFPIrENTvxLBbmXJkPRgJVt5mtp9kr03ENeSOkJCRn7eaN1j7ML5Cfclvn5DHFHev2rXB7puakJAuYX_4NIXbRzO0NPSgCdtO_NWdrrcERvhpO9z4alden4xA_dqDm4kdz8y4Gut0eBjVb7Skv11egTSoDwj4E8MCKbX1BTRVMkjivMhX5V4QOkfiaj8_dk-G9ZQDaXThEnV8B8hDbrsUq70qu8PU90Xo"
                alt="The Sculptor's Precision"
                fill
                className="object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-neutral-950/80 to-transparent w-full">
                <h3 className="font-headline text-2xl">
                  The Closer&rsquo;s Edge
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
