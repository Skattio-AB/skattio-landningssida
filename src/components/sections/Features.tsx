"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  Home,
  Clock,
  MessageSquare,
  FileText,
  Shield,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Bostadsförsäljning (K5/K6)",
    description:
      "Deklarera vinst eller förlust vid försäljning av villa, bostadsrätt eller fritidshus.",
  },
  {
    icon: Clock,
    title: "Uppskov",
    description:
      "Beräkna och ansök om uppskov med kapitalvinsten automatiskt. Vi guidar dig genom reglerna.",
  },
  {
    icon: MessageSquare,
    title: "AI-stöd i wizarden",
    description:
      "Osäker på en fråga? Vårt AI-stöd förklarar och hjälper dig direkt i steget du arbetar med.",
  },
  {
    icon: FileText,
    title: "PDF + SRU direkt till Skatteverket",
    description:
      "Ladda ner ifylld K-blankett som PDF eller SRU-fil för import i Skatteverkets e-tjänst.",
  },
  {
    icon: Shield,
    title: "Säker datahantering",
    description:
      "Din data lagras krypterat och delas aldrig med tredje part. Servrar i Sverige.",
  },
  {
    icon: Sparkles,
    title: "Fler avdrag på väg",
    description:
      "Vi bygger stöd för fler avdrag och deklarationshjälp. Håll utkik — mer kommer snart.",
  },
];

export function Features() {
  return (
    <section id="funktioner" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Allt du behöver för din deklaration
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Skattio hjälper dig med bostadsförsäljning idag — och fler
            deklarationstjänster imorgon.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
