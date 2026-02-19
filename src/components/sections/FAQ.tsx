"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
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
    <section id="faq" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Vanliga frågor
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-white px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-secondary leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
