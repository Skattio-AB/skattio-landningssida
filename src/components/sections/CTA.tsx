"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
      {/* Atmospheric radial glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,_rgba(232,89,12,0.10)_0%,_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_70%_50%,_rgba(59,130,246,0.05)_0%,_transparent_50%)]" />
      {/* Top-edge glow for depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="relative mx-auto max-w-[560px] px-6 text-center"
      >
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
          Redo att deklarera smartare?
        </h2>
        <p className="mt-3 text-[17px] text-navy-300">
          Kom igång gratis &mdash; betala först när du laddar ner din färdiga
          blankett.
        </p>
        <div className="mt-9">
          <Button
            asChild
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white px-7 h-[52px] text-[15px] font-semibold rounded-xl shadow-[0_0_24px_rgba(232,89,12,0.25),0_0_48px_rgba(232,89,12,0.10)] hover:shadow-[0_0_32px_rgba(232,89,12,0.35),0_0_56px_rgba(232,89,12,0.15)] transition-all duration-300"
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
