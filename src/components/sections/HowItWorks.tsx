"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ClipboardList, ScanSearch, Download } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Svara på frågor",
    description:
      "Vår guidade wizard tar dig steg för steg genom alla uppgifter som behövs. Inget krångel, bara enkla frågor.",
  },
  {
    icon: ScanSearch,
    number: "02",
    title: "Granska med AI-stöd",
    description:
      "Vårt AI-stöd hjälper dig att dubbelkolla allt. Ställ frågor direkt i wizarden om du undrar något.",
  },
  {
    icon: Download,
    number: "03",
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Så funkar det
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600 leading-relaxed">
            Tre enkla steg från start till färdig deklaration.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number + icon */}
              <div className="relative mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-700">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-[10px] font-bold text-white font-heading">
                  {step.number}
                </span>
              </div>

              {/* Connector line (between steps, desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute top-7 left-[calc(50%+44px)] hidden h-px w-[calc(100%-88px)] sm:block">
                  <div className="h-full w-full border-t border-dashed border-neutral-300" />
                </div>
              )}

              <h3 className="font-heading text-lg font-semibold text-neutral-950">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
