"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  slideFromLeft,
  staggerContainer,
} from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vad är Skattio?",
    answer:
      "Skattio är en digital tjänst som hjälper dig deklarera enklare. Vi guidar dig steg för steg med en wizard och AI-stöd, och genererar färdiga blanketter (K5/K6) som du kan skicka in till Skatteverket.",
  },
  {
    question: "Vilka deklarationer stödjer ni?",
    answer:
      "Just nu stödjer vi bostadsförsäljning — både villa/fastighet (K5) och bostadsrätt (K6), inklusive uppskov. Vi bygger stöd för fler avdrag och deklarationstjänster.",
  },
  {
    question: "Hur fungerar AI-stödet?",
    answer:
      "Vårt AI-stöd finns tillgängligt direkt i wizarden. Du kan ställa frågor om just det steg du arbetar med, och få förklaringar anpassade efter din situation. AI:t har kunskap om svenska skatteregler.",
  },
  {
    question: "Är min data säker?",
    answer:
      "Ja. All data lagras krypterat hos vår databasvärd med servrar i EU/Sverige. Vi delar aldrig dina uppgifter med tredje part. Du kan när som helst radera ditt konto och all tillhörande data.",
  },
  {
    question: "Kan jag lita på beräkningarna?",
    answer:
      "Våra beräkningar följer Skatteverkets regler och genererar blanketter i rätt format (PDF och SRU). Vi rekommenderar alltid att du granskar blanketten innan du skickar in den.",
  },
  {
    question: "Vad är en SRU-fil?",
    answer:
      "En SRU-fil är Skatteverkets standardformat för digital inlämning. Du kan importera filen direkt i Skatteverkets e-tjänst, så slipper du fylla i allt manuellt.",
  },
  {
    question: "Hur lång tid tar det?",
    answer:
      "De flesta är klara inom 15–30 minuter. Har du uppgifterna till hands (köpe- och försäljningspris, mäklararvode etc.) går det ännu snabbare.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-neutral-50 py-24 sm:py-28">
      <div className="mx-auto max-w-[980px] px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.5fr] lg:gap-16">
          {/* Left: heading (sticky on desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromLeft}
          >
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent-500">
              FAQ
            </span>
            <h2 className="mt-3 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-neutral-950">
              Vanliga frågor
            </h2>
            <p className="mt-3 text-[17px] leading-[1.7] text-neutral-600">
              Hittar du inte svaret du söker? Kontakta oss så hjälper vi dig.
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <AccordionItem
                    value={`faq-${i}`}
                    className={`border-b border-neutral-200 px-0 ${i === 0 ? "border-t" : ""}`}
                  >
                    <AccordionTrigger className="text-left font-heading text-[15px] font-semibold text-neutral-950 hover:no-underline py-5 hover:text-accent-500 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-neutral-600 leading-[1.7] pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
