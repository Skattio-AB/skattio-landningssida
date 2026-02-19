"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { Check, ArrowRight } from "lucide-react";

const included = [
  "Guidad steg-för-steg wizard",
  "AI-stöd för frågor",
  "Automatisk beräkning av vinst/förlust",
  "Uppskovsberäkning",
  "Färdig K5 eller K6-blankett (PDF)",
  "SRU-fil för import i Skatteverket",
];

export function Pricing() {
  return (
    <section id="priser" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Enkel prissättning
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            En bråkdel av vad en skatteexpert kostar.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-md"
        >
          <div className="relative rounded-2xl border-2 border-brand-200 bg-white p-8 shadow-md">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white hover:bg-brand-600">
              Lanseringspris
            </Badge>

            <div className="text-center">
              <p className="text-sm font-medium text-text-secondary">
                Bostadsförsäljning (K5/K6)
              </p>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold font-heading text-text-primary">
                  1 499
                </span>
                <span className="text-text-secondary">kr</span>
              </div>
              <p className="mt-1 text-sm text-text-muted line-through">
                2 499 kr ordinarie pris
              </p>
              <p className="mt-4 text-sm text-text-secondary">
                Jämfört med 5 000–15 000 kr hos skatteexpert
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-primary"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-8 w-full bg-brand-600 hover:bg-brand-700 text-white h-12 text-base"
            >
              <a href={siteConfig.links.app}>
                Kom igång
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <p className="mt-4 text-center text-xs text-text-muted">
              Du betalar först när du laddar ner blanketten.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
