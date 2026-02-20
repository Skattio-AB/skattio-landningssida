"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { blurIn, fadeUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-navy-50/60 pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Decorative radial — cool navy wash top-right */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_-20%,_rgba(10,15,30,0.05)_0%,_transparent_70%)]" />
      {/* Secondary warm accent glow — very subtle, bottom-left */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_100%,_rgba(232,89,12,0.03)_0%,_transparent_60%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <motion.h1
          variants={blurIn}
          className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl"
        >
          Din skattehjälp &mdash;{" "}
          <span className="bg-gradient-to-r from-accent-500 to-accent-400 bg-clip-text text-transparent">
            enkel, smart och trygg
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl"
        >
          Skattio guidar dig genom deklarationen steg för steg &mdash; med
          AI-stöd som förklarar, beräknar och ser till att allt blir rätt.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 h-12 text-base shadow-md hover:shadow-lg transition-all duration-200"
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
            className="h-12 text-base border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200"
          >
            <a href="#tjanster">Utforska våra tjänster</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
