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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Enkel prissättning
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600 leading-relaxed">
            En bråkdel av vad en skatteexpert kostar.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto mt-14 max-w-md"
        >
          <div className="relative rounded-2xl border-2 border-accent-500 bg-white p-8 shadow-[0_8px_30px_rgba(10,15,30,0.12),0_2px_8px_rgba(10,15,30,0.06)]">

            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white hover:bg-accent-500 shadow-sm">
              Lanseringspris
            </Badge>

            <div className="mt-2 text-center">
              <p className="text-sm font-medium text-neutral-600">
                Bostadsförsäljning (K5/K6)
              </p>
              <div className="mt-4 flex items-baseline justify-center gap-1.5">
                <span className="font-heading text-5xl font-bold leading-[1.1] text-neutral-950">
                  1 499
                </span>
                <span className="text-lg font-medium text-neutral-500">kr</span>
              </div>
              <p className="mt-1.5 text-sm text-neutral-400 line-through">
                2 499 kr ordinarie pris
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Jämfört med 5 000–15 000 kr hos skatteexpert
              </p>
            </div>

            <div className="my-8 h-px bg-neutral-100" />

            <ul className="space-y-3.5">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-neutral-800"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-8 w-full bg-accent-500 hover:bg-accent-600 text-white h-12 text-base shadow-md hover:shadow-lg transition-all duration-200"
            >
              <a href={siteConfig.links.app}>
                Kom igång
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <p className="mt-4 text-center text-xs text-neutral-500">
              Du betalar först när du laddar ner blanketten.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
