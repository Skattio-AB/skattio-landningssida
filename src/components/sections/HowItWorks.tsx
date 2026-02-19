"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ClipboardList, ScanSearch, Download } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Svara på frågor",
    description:
      "Vår guidade wizard tar dig steg för steg genom alla uppgifter som behövs. Inget krångel, bara enkla frågor.",
  },
  {
    icon: ScanSearch,
    title: "Granska med AI-stöd",
    description:
      "Vårt AI-stöd hjälper dig att dubbelkolla allt. Ställ frågor direkt i wizarden om du undrar något.",
  },
  {
    icon: Download,
    title: "Ladda ner & skicka in",
    description:
      "Ladda ner färdig blankett som PDF eller SRU-fil och importera direkt i Skatteverkets e-tjänst.",
  },
];

export function HowItWorks() {
  return (
    <section id="hur-det-fungerar" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Så funkar det
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Tre enkla steg från start till färdig deklaration.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-8 sm:grid-cols-3"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <step.icon className="h-6 w-6" />
              </div>

              {/* Connector line (between steps, desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute top-7 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-border sm:block" />
              )}

              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
