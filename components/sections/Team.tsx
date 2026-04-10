import Image from "next/image";

const members = [
  {
    role: "Founder & CEO",
    name: "Marcello Newby",
    title: "Chief Growth Architect",
    bio: "IE University BBA student and serial entrepreneur. Built MPR Kickoff from zero, now engineering AutoLead to dominate the AI-powered sales automation space.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhP6aMIQUFGBhNEEEHZ3gdWkg1__7upNQn5Ma8ovJnXWxD1t3VV1cuYNhBwj2bhGsTFq6oAbVm462kxnAt37_z6C_YPFoG3dMNqDeY2IOdGapTXG8GV6t3s_i5I6-lH-ObtWV_ssOL6j2nFmnSbF92IFVVWvdwrSXL62WiS0A2go-79tWFsr3C__F_rYWvXfnISV9ikkl1y4Q-azwP1Ue6MHc8nrKhpfDDBrEGVoVF18FuMissSHzryXoEKv8RuKdxF0KYVQd7bQY",
  },
  {
    role: "Head of Automation",
    name: "Systems Division",
    title: "Director of Pipeline Engineering",
    bio: "The technical core behind AutoLead's AI sequences — building outbound infrastructure that operates with zero manual input and maximum conversion precision.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCboW7DsHMoIdoArd2mmXvxwoDkQuHT63cq28WZ85t7Je1XnIyTUv8fVrDuo0yoCUXFokN-s7T82SBRFMUzJwyPSeFh4nzJyQArXHC-6YVAl42rkxQdt2_k9gK96HK42xbBXY8MBzFToFtN6DLiLtM9Mhw9-jwdr1-clt5Ji3WbvZmLMEZtCzx4IjEli8vYf-QoBZbDnOSEQW63-xEWtHOHoS9DmqvLBpaCCi9gp5Jp8iUQ6YdxpRDEOjTMMPWojSkbcoA2n-TwO2w",
  },
  {
    role: "Strategy Lead",
    name: "Growth Division",
    title: "Principal Revenue Strategist",
    bio: "Turning cold audiences into hot pipelines. Our strategy team studies buyer psychology and market data to craft sequences that feel personal and convert at scale.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVwV6RYGJ6v4Q841BRPM6LAuk1bMpuCMf3eW93Y3Z9rUvg5eDBcSaEiemlaoM2L0sPRbZeBTvlD-ama-BthpPReGbNro9FDke1KG5BA66YJ5bTfzatHreAlamsD3_R6a2G5CHvyL4hu4y_fpY93Z7nRA-nONbb_SbuTnT3za2GX-jHL42OGRq1mjAqgNc2qsgfiwSfYZFs4peRw-MhcY42jqFvsmF5q5Bd_qaVlc_OF8zgXer0s5bdJY829oQ9pFIdUqHiJTet8us",
  },
];

export function Team() {
  return (
    <section className="py-32 px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-primary text-xs uppercase tracking-[0.4em] mb-4 block">
              The Team
            </span>
            <h2 className="font-headline text-5xl md:text-6xl font-bold leading-none">
              The People Behind{" "}
              <span className="italic text-primary">AutoLead</span>.
            </h2>
          </div>
          <p className="font-body text-on-surface-variant md:w-1/3 italic text-base leading-relaxed">
            A lean, obsessed team built to turn your outbound into an
            unstoppable revenue machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map(({ role, name, title, bio, src }) => (
            <div key={name} className="group cursor-default">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-8 bg-neutral-900 border border-primary/10 relative">
                <Image
                  src={src}
                  alt={`Portrait of ${name}`}
                  fill
                  className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-700"
                />
                {/* Subtle gold overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-700" />
              </div>

              <span className="font-label text-primary text-[10px] uppercase tracking-widest mb-2 block">
                {role}
              </span>
              <h4 className="font-serif text-2xl font-bold mb-1">{name}</h4>
              <p className="text-primary italic font-serif text-sm mb-4">
                {title}
              </p>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                {bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
