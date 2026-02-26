"use client";

import { motion } from "framer-motion";
import { blurIn, useShouldReduceMotion } from "@/lib/animations";

export function CTA() {
  const shouldReduce = useShouldReduceMotion();

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
      {/* Atmospheric radial glows — static on mobile, pulsing on desktop */}
      {shouldReduce ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,_rgba(232,89,12,1)_0%,_transparent_60%)]"
            style={{ opacity: 0.14 }}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_70%_50%,_rgba(59,130,246,1)_0%,_transparent_50%)]"
            style={{ opacity: 0.075 }}
          />
        </>
      ) : (
        <>
          <motion.div
            animate={{ opacity: [0.10, 0.18, 0.10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,_rgba(232,89,12,1)_0%,_transparent_60%)]"
          />
          <motion.div
            animate={{ opacity: [0.05, 0.10, 0.05] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_70%_50%,_rgba(59,130,246,1)_0%,_transparent_50%)]"
          />
        </>
      )}
      {/* Top-edge glow for depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={blurIn}
        className="relative mx-auto max-w-[560px] px-6 text-center"
      >
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
          Redo att deklarera smartare?
        </h2>
        <p className="mt-3 text-[17px] text-navy-300">
          Vi lanserar snart.
        </p>
      </motion.div>
    </section>
  );
}
