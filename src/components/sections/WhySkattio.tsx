"use client";

import { motion } from "framer-motion";
import { scaleUp, fadeUp, staggerContainer } from "@/lib/animations";
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
    title: "Snabb och smidig process",
    description:
      "Fyll i din deklaration på minuter istället för timmar. Allt är guidad steg för steg.",
  },
];

export function WhySkattio() {
  return (
    <section className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Varför Skattio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600 leading-relaxed">
            Vi gör deklarationen enklare, snabbare och tryggare — för alla.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.title}
              variants={scaleUp}
              className="rounded-xl border border-neutral-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(10,15,30,0.04),0_1px_2px_rgba(10,15,30,0.02)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <usp.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-neutral-950">
                {usp.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
