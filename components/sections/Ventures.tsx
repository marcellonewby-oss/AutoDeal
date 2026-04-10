import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ventures = {
  featured: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYR3klVz69eovoK8sjg_tRJfBKNjnkaeJWa73AjPoPFr1xQQXhiqnu_ZsoCF2G7TzUehKfKh9KtfXhFIqYCFV3UZxEBJ6FrcqAElMSfH0T0gO2usa07qM11p6veW4LTpR9ShLRzXSug-b15BEtCmP4iz12v_eAWydMti80OpMnIOR4tiZmhJYvkD2PPedn2SWJ5JcgMljiO8Cjc8TwEPW1bOYx2YFH6PK64Ux5tSeFo-8z1pmTkoVCTcO2XH5ZIB7LDAvtTBAMx84",
    alt: "SaaS Pipeline Automation",
    tag: "SaaS / Outbound Automation",
    title: "Pipeline OS",
    body: "Full-stack outbound system deployed for a B2B SaaS client — 340% increase in qualified demos booked within 60 days.",
  },
  secondary: [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmG_O1VF7LDaPRIYr5SwQh_jtU2ORBoqOEHpr-5h5qXuUiy1J5vedrL4QNXdWhN0ccNzMwe3qKw8n4cIJe1qSH-tKaL-EPJqerBsYiQs8UtaXnaaO3ext-6VLtelwfxtceKi0ZL3tGM79MKoP29QTnN3upbVkmKBqZ1Xh3F0zQFXEI_ON4Ega1NmExVxhphbX0NxUENxtF-xHTO8SD3adGvHfAgTGHoKozWomyGBW85H8yRPdDw6FxFLQKTpHJLCzsUdbZwypz83I",
      alt: "Cold Email Engine",
      title: "Cold Email Engine",
      tag: "Email / AI Personalisation",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtSHPO2YtIb5Ne7x8niYcW_Amqw6kc9beChDAK-0N7uAT1W_9MkyKx9OPrd0Tw1kORaOgYY0wZJuwCIuUG9ZYuu6O-QYoe2VkIGYb-pgz7Tb8GvlI3Pt0Y4WHyWfZ8Y4gUytoIvPyX7MypzTUl2jJzwXnWkmPYnk2AmGJO-pRO6Bo9iEapHgfxj9HQnorVd9R_CaFhfiyZbnRDATN1rQPDVqIik2kN2Do7MT1nhyHZ2AiIKMhwAggi7XJvPPQUZyhPE66IKnpx27E",
      alt: "LinkedIn Growth System",
      title: "LinkedIn Growth System",
      tag: "Social / Lead Gen",
    },
  ],
};

export function Ventures() {
  return (
    <section id="ventures" className="py-32 bg-surface-container-low px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-headline text-5xl md:text-6xl font-bold">
              Selected Results.
            </h2>
            <p className="font-label text-neutral-500 mt-4 tracking-widest uppercase text-xs">
              A curated portfolio of client wins
            </p>
          </div>
          <div className="h-px bg-neutral-800 flex-grow mx-12 hidden md:block" />
          <button className="text-primary font-bold hover:translate-x-1.5 transition-transform flex items-center gap-2 text-sm shrink-0">
            Explore All Results
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[880px]">
          {/* Featured — tall left card */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-xl bg-surface-container-highest border border-primary/5">
            <Image
              src={ventures.featured.src}
              alt={ventures.featured.alt}
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-12">
              <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">
                {ventures.featured.tag}
              </span>
              <h4 className="font-headline text-4xl mb-4">
                {ventures.featured.title}
              </h4>
              <p className="max-w-md font-body text-on-surface-variant text-base">
                {ventures.featured.body}
              </p>
            </div>
          </div>

          {/* Right column — two stacked cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {ventures.secondary.map(({ src, alt, title, tag }) => (
              <div
                key={title}
                className="flex-1 relative group overflow-hidden rounded-xl bg-surface-container-high border border-primary/5"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover opacity-55 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="font-headline text-2xl mb-2">{title}</h4>
                  <p className="text-xs font-label text-primary uppercase tracking-widest">
                    {tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
