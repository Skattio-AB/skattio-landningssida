import { Header } from "@/components/Header";
import { HeroHome } from "@/components/sections/HeroHome";
import { Services } from "@/components/sections/Services";
import { WhySkattio } from "@/components/sections/WhySkattio";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <Services />
        <WhySkattio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
