"use client";

import { motion } from "framer-motion";
import { scaleUp, slideUp, staggerContainer } from "@/lib/animations";
import { Home, KeyRound, Receipt } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Bostadsförsäljning (K5/K6)",
    description:
      "Deklarera vinst eller förlust vid försäljning av villa, bostadsrätt eller fritidshus. Steg-för-steg med AI-stöd.",
  },
  {
    icon: KeyRound,
    title: "Uthyrning",
    description:
      "Deklarera inkomst från uthyrning av bostad enkelt och korrekt. Vi guidar dig genom reglerna.",
  },
  {
    icon: Receipt,
    title: "Fler avdrag",
    description:
      "ROT, RUT, ränteavdrag och mer. Vi bygger stöd för fler avdrag och deklarationshjälp.",
  },
];

export function Services() {
  return (
    <section id="tjanster" className="bg-neutral-50 py-24 sm:py-28">
      <div className="mx-auto max-w-[980px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          className="text-center"
        >
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent-500">
            Tjänster
          </span>
          <h2 className="mt-3 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-neutral-950">
            Deklarationshjälp för alla
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[17px] leading-[1.7] text-neutral-600">
            Skattio hjälper dig med bostadsförsäljning &mdash; och fler
            deklarationstjänster är på väg.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={scaleUp}
              className="rounded-xl border border-neutral-200/60 bg-white p-7 shadow-[0_1px_2px_rgba(10,15,30,0.04)] transition-[box-shadow,border-color] duration-200 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(10,15,30,0.08)]"
            >
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-accent-50 px-2.5 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-accent-500">
                Kommer snart
              </span>

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600">
                <service.icon className="h-5 w-5" />
              </div>

              <h3 className="font-heading text-[17px] font-bold text-neutral-950">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
