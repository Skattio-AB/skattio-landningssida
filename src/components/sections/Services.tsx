"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { scaleUp, fadeUp, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { Home, KeyRound, Receipt, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Bostadsförsäljning (K5/K6)",
    description:
      "Deklarera vinst eller förlust vid försäljning av villa, bostadsrätt eller fritidshus. Steg-för-steg med AI-stöd.",
    status: "available" as const,
    href: "/bostadsforsaljning",
  },
  {
    icon: KeyRound,
    title: "Uthyrning",
    description:
      "Deklarera inkomst från uthyrning av bostad enkelt och korrekt. Vi guidar dig genom reglerna.",
    status: "coming" as const,
    href: null,
  },
  {
    icon: Receipt,
    title: "Fler avdrag",
    description:
      "ROT, RUT, ränteavdrag och mer. Vi bygger stöd för fler avdrag och deklarationshjälp.",
    status: "coming" as const,
    href: null,
  },
];

export function Services() {
  return (
    <section id="tjanster" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Våra tjänster
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600 leading-relaxed">
            Skattio hjälper dig med bostadsförsäljning idag &mdash; och fler
            deklarationstjänster är på väg.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const isAvailable = service.status === "available";

            const card = (
              <motion.div
                key={service.title}
                variants={scaleUp}
                className={`group relative rounded-xl border p-6 transition-all duration-300 ${
                  isAvailable
                    ? "border-accent-500/30 bg-white shadow-[0_1px_3px_rgba(10,15,30,0.04),0_1px_2px_rgba(10,15,30,0.02)] hover:shadow-[0_4px_16px_rgba(10,15,30,0.08),0_2px_4px_rgba(10,15,30,0.04)] hover:border-accent-500/50"
                    : "border-neutral-200/80 bg-white shadow-[0_1px_3px_rgba(10,15,30,0.04),0_1px_2px_rgba(10,15,30,0.02)]"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-300 ${
                      isAvailable
                        ? "bg-accent-100 text-accent-500"
                        : "bg-navy-50 text-navy-700"
                    }`}
                  >
                    <service.icon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant="secondary"
                    className={`text-xs font-medium ${
                      isAvailable
                        ? "border-accent-500/20 bg-accent-100 text-accent-600"
                        : "border-navy-200 bg-navy-50 text-navy-600"
                    }`}
                  >
                    {isAvailable ? "Tillgänglig nu" : "Kommer snart"}
                  </Badge>
                </div>

                <h3 className="font-heading text-lg font-semibold text-neutral-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                {isAvailable && (
                  <div className="mt-5 flex items-center text-sm font-medium text-accent-500 transition-colors group-hover:text-accent-600">
                    Läs mer
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                )}
              </motion.div>
            );

            if (isAvailable && service.href) {
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block"
                >
                  {card}
                </Link>
              );
            }

            return card;
          })}
        </motion.div>
      </div>
    </section>
  );
}
