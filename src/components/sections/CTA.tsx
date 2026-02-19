"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-24">
      {/* Atmospheric radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,_rgba(58,79,135,0.25)_0%,_transparent_70%)]" />
      {/* Subtle top-edge glow for depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Redo att deklarera?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-navy-300 leading-relaxed">
          Kom igång gratis och betala först när du laddar ner din färdiga
          blankett.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 h-12 text-base shadow-[0_0_20px_rgba(232,89,12,0.25),0_0_40px_rgba(232,89,12,0.10)] hover:shadow-[0_0_25px_rgba(232,89,12,0.35),0_0_50px_rgba(232,89,12,0.15)] transition-all duration-300"
          >
            <a href={siteConfig.links.app}>
              Kom igång nu
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
