"use client";

import { motion } from "framer-motion";
import { fadeUp, slideUp, staggerContainerSlow } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Svara på frågor",
    description:
      "Vår guidade wizard tar dig steg för steg genom alla uppgifter som behövs. Inget krångel, bara enkla frågor.",
  },
  {
    number: "02",
    title: "Granska med AI-stöd",
    description:
      "Vårt AI-stöd hjälper dig dubbelkolla allt. Ställ frågor direkt i wizarden om du undrar något.",
  },
  {
    number: "03",
    title: "Ladda ner & skicka in",
    description:
      "Ladda ner färdig blankett som PDF eller SRU-fil och importera direkt i Skatteverkets e-tjänst.",
  },
];

export function HowItWorks() {
  return (
    <section id="hur-det-fungerar" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-[980px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          className="text-center"
        >
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent-500">
            Hur det fungerar
          </span>
          <h2 className="mt-3 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-neutral-950">
            Tre steg till färdig deklaration
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[17px] leading-[1.7] text-neutral-600">
            Från start till färdig blankett &mdash; snabbt, enkelt och med stöd
            hela vägen.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerSlow}
          className="mt-14 grid gap-8 sm:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeUp}>
              <div className="font-heading text-5xl font-extrabold leading-none tracking-[-0.04em] text-neutral-300">
                {step.number}
              </div>
              <h3 className="mt-4 font-heading text-[17px] font-bold text-neutral-950">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
