"use client";

import { motion } from "framer-motion";
import { scaleUp, slideUp, staggerContainer } from "@/lib/animations";
import { Sparkles, Shield, Banknote, Zap } from "lucide-react";

const usps = [
  {
    icon: Sparkles,
    title: "AI-stöd som guidar dig",
    description:
      "Osäker på en fråga? Vårt AI-stöd förklarar och hjälper dig direkt i steget du arbetar med.",
  },
  {
    icon: Shield,
    title: "Säker datahantering",
    description:
      "Din data lagras krypterat och delas aldrig med tredje part. Servrar i Sverige.",
  },
  {
    icon: Banknote,
    title: "En bråkdel av priset",
    description:
      "Enklare än en skatteexpert — till en bråkdel av kostnaden. Betala först när du är klar.",
  },
  {
    icon: Zap,
    title: "Snabb och smidig",
    description:
      "Fyll i din deklaration på minuter istället för timmar. Allt är guidad steg för steg.",
  },
];

export function WhySkattio() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-[980px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          className="text-center"
        >
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent-500">
            Varför Skattio
          </span>
          <h2 className="mt-3 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-neutral-950">
            Byggt för att förenkla
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[17px] leading-[1.7] text-neutral-600">
            Vi gör deklarationen enklare, snabbare och tryggare &mdash; för
            alla.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2"
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.title}
              variants={scaleUp}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-7 shadow-[0_1px_2px_rgba(10,15,30,0.04)] transition-all duration-200 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(10,15,30,0.08)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-50">
                <usp.icon className="h-[18px] w-[18px] text-accent-500" />
              </div>
              <h3 className="font-heading text-base font-bold text-neutral-950">
                {usp.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
