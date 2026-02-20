"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { blurIn, fadeUp, scaleUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

function useInView(ref: React.RefObject<HTMLElement | null>, once = true) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, once]);
  return inView;
}

function SavingsCounter({ animate }: { animate: boolean }) {
  const [value, setValue] = useState(0);
  const target = 8550;

  useEffect(() => {
    if (!animate) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }, [animate]);

  return <>{value.toLocaleString("sv-SE")} kr</>;
}

export function HeroHome() {
  const frameRef = useRef<HTMLDivElement>(null);
  const frameInView = useInView(frameRef);

  return (
    <section className="relative overflow-hidden bg-neutral-50 pt-24 pb-20 sm:pt-28 sm:pb-24">
      {/* Background glows */}
      <div className="pointer-events-none absolute top-[60%] left-[10%] h-[600px] w-[600px] rounded-full bg-[rgba(232,89,12,0.08)] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute top-[30%] right-[5%] h-[600px] w-[600px] rounded-full bg-[rgba(59,130,246,0.05)] opacity-40 blur-[120px]" />

      {/* Text content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-[720px] px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-4 py-1.5 font-heading text-[13px] font-medium text-accent-500">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" />
          Kommer snart
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={blurIn}
          className="font-heading text-[clamp(2.5rem,6vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-neutral-950"
        >
          Deklarera{" "}
          <span className="bg-gradient-to-br from-accent-500 to-warning bg-clip-text text-transparent">
            smartare
          </span>{" "}
          med AI-stöd
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-[520px] text-lg leading-[1.7] text-neutral-400"
        >
          Skattio guidar dig genom deklarationen steg för steg &mdash; med AI
          som förklarar, beräknar och ser till att allt blir rätt.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white px-7 h-[52px] text-[15px] font-semibold rounded-xl shadow-[0_2px_8px_rgba(232,89,12,0.12)] hover:shadow-[0_4px_20px_rgba(232,89,12,0.22)] hover:-translate-y-px transition-all duration-200"
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
            className="h-[52px] px-7 text-[15px] rounded-xl border-neutral-200 text-neutral-600 hover:border-neutral-600 hover:text-neutral-950 transition-all duration-200"
          >
            <a href="#tjanster">Utforska tjänster</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* App mockup */}
      <div className="relative mx-auto mt-16 max-w-[900px] px-6" ref={frameRef}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={
            frameInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.98 }
          }
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative z-[1] overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-[0_0_0_1px_rgba(10,15,30,0.02),0_4px_12px_rgba(10,15,30,0.04),0_20px_60px_rgba(10,15,30,0.08)]"
        >
          {/* Browser bar */}
          <div className="flex h-11 items-center gap-2 bg-navy-950 px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <div className="ml-2 flex h-[26px] flex-1 items-center rounded-md bg-white/[0.08] px-2.5">
              <span className="font-mono text-[11px] text-white/40">
                app.skattio.se/deklaration
              </span>
            </div>
          </div>

          {/* App body */}
          <div className="grid min-h-[340px] grid-cols-[200px_1fr] max-md:grid-cols-1">
            {/* Sidebar */}
            <div className="border-r border-neutral-200/60 bg-neutral-50 py-5 max-md:hidden">
              {["Översikt", "Försäljning", "Avdrag", "Resultat", "Ladda ner"].map(
                (item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2.5 px-5 py-2.5 font-heading text-xs font-medium ${
                      item === "Försäljning"
                        ? "border-r-2 border-accent-500 bg-accent-50 font-semibold text-accent-500"
                        : "text-neutral-400"
                    }`}
                  >
                    <span
                      className={`h-4 w-4 rounded bg-current opacity-20 ${
                        item === "Försäljning" ? "opacity-40" : ""
                      }`}
                    />
                    {item}
                  </div>
                )
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-5 font-heading text-sm font-bold text-neutral-950">
                Försäljningsuppgifter
              </div>

              {/* Form fields */}
              <div className="mb-3 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                <div>
                  <div className="mb-1.5 font-heading text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    Försäljningspris
                  </div>
                  <div className="flex h-9 items-center rounded-lg border border-neutral-200/60 bg-neutral-50 px-3 font-mono text-xs text-neutral-950">
                    3 200 000 kr
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 font-heading text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    Inköpspris
                  </div>
                  <div className="flex h-9 items-center rounded-lg border border-neutral-200/60 bg-neutral-50 px-3 font-mono text-xs text-neutral-950">
                    2 100 000 kr
                  </div>
                </div>
              </div>

              {/* Deductions */}
              <div className="mb-3 border-l-2 border-accent-500 pl-3">
                <div className="mb-1.5 font-heading text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Avdrag (förbättringar, mäklararvode m.m.)
                </div>
                <div className="flex h-9 items-center rounded-lg border border-neutral-200/60 bg-neutral-50 px-3 font-mono text-xs text-neutral-950">
                  185 000 kr
                </div>
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-neutral-200/60" />

              {/* Result */}
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-success" />
                <span className="font-heading text-[13px] font-semibold text-neutral-950">
                  Beräknad vinst:{" "}
                  <span className="text-success">915 000 kr</span>
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="mb-2 flex justify-between">
                  <span className="font-heading text-[11px] font-semibold text-neutral-400">
                    Steg 2 av 5
                  </span>
                  <span className="font-heading text-[11px] font-semibold text-neutral-400">
                    40%
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent-500 to-warning"
                    initial={{ width: "0%" }}
                    animate={frameInView ? { width: "40%" } : { width: "0%" }}
                    transition={{
                      duration: 1.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.6,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={
            frameInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
          className="absolute top-5 -right-6 z-[2] rounded-[10px] border border-neutral-200/60 bg-white px-4 py-2 font-heading text-xs font-semibold text-success shadow-[0_4px_16px_rgba(10,15,30,0.08)] max-md:hidden"
        >
          ✓ K5 klar
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={
            frameInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.25 }}
          className="absolute bottom-[60px] -left-5 z-[2] rounded-[10px] border border-transparent bg-navy-950 px-4 py-2 font-heading text-xs font-semibold text-white shadow-[0_4px_16px_rgba(10,15,30,0.08)] max-md:hidden"
        >
          AI-stöd aktiv
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={
            frameInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
          className="absolute -bottom-3 -right-4 z-[2] rounded-[10px] border border-neutral-200/60 bg-white px-4 py-2.5 text-center shadow-[0_4px_16px_rgba(10,15,30,0.08)] max-md:hidden"
        >
          <div className="font-heading text-[9px] font-medium text-neutral-400">
            Du sparar
          </div>
          <div className="font-heading text-[15px] font-bold leading-snug text-success">
            <SavingsCounter animate={frameInView} />
          </div>
          <div className="text-[8px] text-neutral-400/60">i skatt</div>
        </motion.div>
      </div>
    </section>
  );
}
