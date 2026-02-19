"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
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
    question: "Vad kostar det?",
    answer:
      "Att starta och fylla i wizarden är gratis. Du betalar 1 499 kr (lanseringspris) först när du laddar ner den färdiga blanketten. Jämfört med 5 000–15 000 kr hos en skatteexpert.",
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
    <section id="faq" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-[1fr,1.5fr] lg:gap-20"
        >
          {/* Left: heading (sticky on desktop) */}
          <motion.div variants={fadeUp} className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Vanliga frågor
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Hittar du inte svaret du söker? Kontakta oss så hjälper vi dig.
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div variants={fadeUp}>
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className={`border-b border-neutral-200 px-0 ${i === 0 ? "border-t" : ""}`}
                >
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-neutral-950 hover:no-underline py-5 hover:text-neutral-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-neutral-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
