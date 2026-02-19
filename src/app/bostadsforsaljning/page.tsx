import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bostadsförsäljning",
  description:
    "Deklarera bostadsförsäljning enkelt med Skattio. Fyll i K5 eller K6 steg för steg med AI-stöd — villa, bostadsrätt eller fritidshus.",
};

export default function Bostadsforsal() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
