"use client";

import { motion } from "framer-motion";
import { scaleUp, slideUp, staggerContainer } from "@/lib/animations";
import { Sparkles, Shield, Banknote, Zap } from "lucide-react";

const usps = [
  {
    icon: Sparkles,
    title: "AI-stöd som guidar dig",
    description:
      "Vår smarta assistent ställer rätt frågor och säkerställer att du inte missar några viktiga detaljer.",
  },
  {
    icon: Shield,
    title: "Säker datahantering",
    description:
      "Banknivå på säkerheten. All data krypteras och lagras på säkra servrar inom Sverige.",
  },
  {
    icon: Banknote,
    title: "En bråkdel av priset",
    description:
      "Spara tusenlappar jämfört med att anlita en traditionell skattejurist eller redovisningskonsult.",
  },
  {
    icon: Zap,
    title: "Snabb och smidig process",
    description:
      "Från start till färdig blankett på under 15 minuter. Exportera direkt till Skatteverket.",
  },
];

export function WhySkattio() {
  return (
    <section className="bg-neutral-100 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
        >
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent-500">
            Varför Skattio
          </span>
          <h2 className="mt-3 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-neutral-950">
            Varför välja Skattio?
          </h2>
          <p className="mt-3 max-w-[520px] text-[17px] leading-[1.7] text-neutral-600">
            Vi kombinerar avancerad teknik med skatteexpertis för att ge dig den
            smidigaste upplevelsen.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.title}
              variants={scaleUp}
              className="rounded-xl border border-neutral-200/60 bg-white p-7 shadow-[0_1px_2px_rgba(10,15,30,0.04)] transition-all duration-200 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(10,15,30,0.08)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50">
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
