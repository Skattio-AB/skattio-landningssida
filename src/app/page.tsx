import { Header } from "@/components/Header";
import { HeroHome } from "@/components/sections/HeroHome";
import { PartnerBanner } from "@/components/sections/PartnerBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { WhySkattio } from "@/components/sections/WhySkattio";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <PartnerBanner />
        <HowItWorks />
        <Services />
        <WhySkattio />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
