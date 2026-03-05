"use client";

import { motion } from "framer-motion";
import { blurIn } from "@/lib/animations";
import { WaitlistForm } from "@/components/WaitlistForm";

export function CTA() {
  return (
    <section id="vantelista" className="bg-neutral-50 py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={blurIn}
        className="mx-auto max-w-[560px] px-6 text-center"
      >
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-neutral-950">
          Redo att deklarera smartare?
        </h2>
        <p className="mt-3 text-[17px] text-neutral-600">
          Skriv upp dig så hör vi av oss när det är dags.
        </p>
        <WaitlistForm className="mt-8" />
      </motion.div>
    </section>
  );
}
