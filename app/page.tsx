import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Ventures } from "@/components/sections/Ventures";
import { Method } from "@/components/sections/Method";
import { Consultancy } from "@/components/sections/Consultancy";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Ventures />
        <Method />
        <Consultancy />
      </main>
      <Footer />
    </>
  );
}
