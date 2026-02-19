"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-warm to-brand-100/30 pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Subtle decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,0,0.06)_0%,_transparent_60%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div variants={fadeUp}>
          <Badge
            variant="secondary"
            className="mb-6 border-brand-200 bg-brand-50 text-brand-700 font-medium"
          >
            Nu tillgängligt &mdash; Deklaration 2025
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-heading text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
        >
          Skattehjälp som{" "}
          <span className="text-brand-600">faktiskt hjälper</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl"
        >
          Skattio gör det enkelt att deklarera &mdash; oavsett om du sålt bostad,
          hyr ut eller behöver hjälp med avdrag. Guidad steg-för-steg med
          AI-stöd.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-brand-600 hover:bg-brand-700 text-white px-8 h-12 text-base"
          >
            <a href={siteConfig.links.app}>
              Kom igång gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 text-base"
          >
            <a href="#hur-det-fungerar">Se hur det fungerar</a>
          </Button>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-sm text-text-muted"
        >
          Ingen registrering krävs. Betala först när du laddar ner blanketten.
        </motion.p>
      </motion.div>
    </section>
  );
}
