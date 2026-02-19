"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-brand-100/50 py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Redo att deklarera?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
          Kom igång gratis och betala först när du laddar ner din färdiga
          blankett.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-brand-600 hover:bg-brand-700 text-white px-8 h-12 text-base"
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
