"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  blurIn,
  fadeUp,
  staggerContainer,
  useInView,
  usePrefersReducedMotion,
  useShouldReduceMotion,
} from "@/lib/animations";

/* ------------------------------------------------------------------ */
/*  Animated value counter                                             */
/* ------------------------------------------------------------------ */

function AnimatedValue({
  target,
  animate,
  delay = 0,
  duration = 1200,
  suffix = "",
}: {
  target: number;
  animate: boolean;
  delay?: number;
  duration?: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!animate) return;
    if (reducedMotion) {
      const raf = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(raf);
    }
    const timeout = setTimeout(() => {
      const start = performance.now();
      function update(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }, delay);
    return () => clearTimeout(timeout);
  }, [animate, target, delay, duration, reducedMotion]);

  return (
    <>
      {value.toLocaleString("sv-SE")}
      {suffix}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating badge with continuous bobbing                             */
/* ------------------------------------------------------------------ */

function FloatingBadge({
  children,
  className,
  entryDelay,
  floatDuration,
  floatDistance,
  isVisible,
}: {
  children: React.ReactNode;
  className: string;
  entryDelay: number;
  floatDuration: number;
  floatDistance: number;
  isVisible: boolean;
}) {
  const shouldReduce = useShouldReduceMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: entryDelay }}
      className={className}
    >
      <motion.div
        animate={
          isVisible && !shouldReduce
            ? { y: [0, -floatDistance, 0, floatDistance * 0.6, 0] }
            : {}
        }
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: entryDelay + 0.5,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cumulative data                                                    */
/* ------------------------------------------------------------------ */

const cumulativeData = [
  { label: "",          utan: 0,      med: 0 },
  { label: "Uppskov",   utan: 0,      med: 48000 },
  { label: "Förb.utg.", utan: 12000,  med: 93000 },
  { label: "Ränta",     utan: 20200,  med: 101200 },
  { label: "Mäklar.",   utan: 20200,  med: 139200 },
];

const totalUtan = cumulativeData[cumulativeData.length - 1].utan;
const totalMed = cumulativeData[cumulativeData.length - 1].med;

/* ------------------------------------------------------------------ */
/*  SVG chart helpers                                                  */
/* ------------------------------------------------------------------ */

const CHART_X = 55;
const CHART_W = 525;
const CHART_Y = 20;
const CHART_H = 260;
const Y_MAX = 150000;

function dataToPoints(values: number[]): { x: number; y: number }[] {
  return values.map((v, i) => ({
    x: CHART_X + (i / (values.length - 1)) * CHART_W,
    y: CHART_Y + CHART_H - (v / Y_MAX) * CHART_H,
  }));
}

function pointsToPath(points: { x: number; y: number }[]): string {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
}

function pointsToAreaPath(
  points: { x: number; y: number }[],
  baselineY: number
): string {
  const linePath = pointsToPath(points);
  const last = points[points.length - 1];
  const first = points[0];
  return `${linePath} L ${last.x} ${baselineY} L ${first.x} ${baselineY} Z`;
}

const gridLines = [0, 50000, 100000, 139200];
const gridLabels = ["0", "50k", "100k", "139k"];

/* ------------------------------------------------------------------ */
/*  Animation config                                                   */
/* ------------------------------------------------------------------ */

const chartEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function HeroHome() {
  const frameRef = useRef<HTMLDivElement>(null);
  const frameInView = useInView(frameRef);
  const reducedMotion = usePrefersReducedMotion();
  const shouldReduce = useShouldReduceMotion();

  const utanValues = cumulativeData.map((d) => d.utan);
  const medValues = cumulativeData.map((d) => d.med);
  const utanPoints = dataToPoints(utanValues);
  const medPoints = dataToPoints(medValues);
  const utanPath = pointsToPath(utanPoints);
  const medPath = pointsToPath(medPoints);
  const medAreaPath = pointsToAreaPath(medPoints, CHART_Y + CHART_H);
  const baselineY = CHART_Y + CHART_H;

  return (
    <section className="relative overflow-hidden bg-neutral-50 pt-24 pb-20 sm:pt-28 sm:pb-24">
      {/* Background orbs — static on mobile, animated on desktop */}
      {shouldReduce ? (
        <>
          <div className="pointer-events-none absolute top-[60%] left-[10%] h-[600px] w-[600px] rounded-full bg-[rgba(232,89,12,0.08)] opacity-40 blur-[120px]" />
          <div className="pointer-events-none absolute top-[30%] right-[5%] h-[600px] w-[600px] rounded-full bg-[rgba(59,130,246,0.05)] opacity-40 blur-[120px]" />
          <div className="pointer-events-none absolute top-[10%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[rgba(232,89,12,0.04)] opacity-30 blur-[100px]" />
        </>
      ) : (
        <>
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.1, 0.95, 1],
              rotate: [0, 3, -2, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute top-[60%] left-[10%] h-[600px] w-[600px] rounded-full bg-[rgba(232,89,12,0.08)] opacity-40 blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, -25, 15, 0],
              y: [0, 30, -25, 0],
              scale: [1, 0.95, 1.08, 1],
              rotate: [0, -2, 3, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute top-[30%] right-[5%] h-[600px] w-[600px] rounded-full bg-[rgba(59,130,246,0.05)] opacity-40 blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, 20, -30, 0],
              y: [0, -20, 35, 0],
              scale: [1, 1.05, 0.97, 1],
              rotate: [0, 2, -3, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute top-[10%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[rgba(232,89,12,0.04)] opacity-30 blur-[100px]"
          />
        </>
      )}

      {/* Text content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-[720px] px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-4 py-1.5 font-heading text-[13px] font-medium text-accent-500"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" />
          Kommer snart
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={blurIn}
          className="font-heading text-[clamp(2.5rem,6vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-neutral-950"
        >
          Deklarera{" "}
          <span className="bg-linear-to-br from-accent-500 to-warning bg-clip-text text-transparent">
            smartare
          </span>
          <br className="sm:hidden" />
          {" "}med AI-stöd
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-[520px] text-lg leading-[1.7] text-neutral-600"
        >
          Skattio guidar dig genom deklarationen steg för steg &mdash; med AI
          som förklarar, beräknar och ser till att allt blir rätt.
        </motion.p>

        {/* Button */}
        <motion.div
          variants={fadeUp}
          className="mt-9 flex items-center justify-center"
        >
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

      {/* Savings graph card */}
      <div
        className="relative mx-auto mt-16 max-w-[900px] px-6"
        ref={frameRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={
            frameInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.98 }
          }
          transition={{ duration: 0.9, ease: chartEasing, delay: 0.3 }}
          className="relative z-1 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white ring-1 ring-black/2 shadow-[0_0_0_1px_rgba(10,15,30,0.02),0_4px_12px_rgba(10,15,30,0.04),0_20px_60px_rgba(10,15,30,0.08)]"
        >
          {/* Header */}
          <div className="border-b border-neutral-100 px-5 py-4 sm:px-7 sm:py-5">
            <h3 className="font-heading text-sm font-semibold text-neutral-950 sm:text-base">
              Avdrag vid bostadsförsäljning
            </h3>
            <p className="mt-0.5 text-xs text-neutral-500">
              Genomsnittlig besparing med Skattios AI-stöd
            </p>
          </div>

          {/* Graph body */}
          <div className="px-5 py-5 sm:px-7 sm:py-6">
            {/* Legend */}
            <div className="mb-5 flex items-center gap-5 sm:mb-6">
              <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                <span className="inline-block h-2 w-2 rounded-full bg-navy-200" />
                Utan Skattio
              </span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                <span className="inline-block h-2 w-2 rounded-full bg-success" />
                Med Skattio
              </span>
            </div>

            {/* SVG Line Graph — static labels/grid, animated lines only */}
            <svg
              viewBox="0 0 600 320"
              className="w-full h-auto"
              role="img"
              aria-label="Linjegraf som visar ackumulerade avdrag: Med Skattio 139 200 kr, Utan Skattio 20 200 kr"
            >
              <defs>
                <linearGradient
                  id="med-area-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines — plain SVG */}
              {gridLines.map((val, i) => {
                const y = CHART_Y + CHART_H - (val / Y_MAX) * CHART_H;
                return (
                  <line
                    key={`grid-${i}`}
                    x1={CHART_X}
                    y1={y}
                    x2={CHART_X + CHART_W}
                    y2={y}
                    stroke="#F5F5F5"
                    strokeWidth={1}
                  />
                );
              })}

              {/* Y-axis labels — plain SVG */}
              {gridLines.map((val, i) => {
                const y = CHART_Y + CHART_H - (val / Y_MAX) * CHART_H;
                return (
                  <text
                    key={`y-label-${i}`}
                    x={CHART_X - 8}
                    y={y + 3}
                    textAnchor="end"
                    fontFamily="Inter, sans-serif"
                    fontSize={10}
                    fill="#A3A3A3"
                  >
                    {gridLabels[i]}
                  </text>
                );
              })}

              {/* X-axis labels — plain SVG */}
              {cumulativeData.map((d, i) => {
                if (i === 0) return null;
                const x =
                  CHART_X + (i / (cumulativeData.length - 1)) * CHART_W;
                return (
                  <text
                    key={`x-label-${i}`}
                    x={x}
                    y={baselineY + 16}
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize={10}
                    fill="#737373"
                  >
                    {d.label}
                  </text>
                );
              })}

              {/* Gradient area under "Med" line */}
              <motion.path
                d={medAreaPath}
                fill="url(#med-area-gradient)"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={
                  frameInView ? { opacity: 1 } : reducedMotion ? { opacity: 1 } : { opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 1.4 }}
              />

              {/* "Utan" line — GPU-efficient pathLength animation */}
              <motion.path
                d={utanPath}
                fill="none"
                stroke="#B0B9D1"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={
                  frameInView
                    ? { pathLength: 1 }
                    : reducedMotion
                    ? { pathLength: 1 }
                    : { pathLength: 0 }
                }
                transition={{ duration: 1.2, ease: chartEasing, delay: 0.8 }}
              />

              {/* "Med" line — GPU-efficient pathLength animation */}
              <motion.path
                d={medPath}
                fill="none"
                stroke="#10B981"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={
                  frameInView
                    ? { pathLength: 1 }
                    : reducedMotion
                    ? { pathLength: 1 }
                    : { pathLength: 0 }
                }
                transition={{ duration: 1.2, ease: chartEasing, delay: 0.8 }}
              />

              {/* "Utan" dots — plain SVG */}
              {utanPoints.map((p, i) => (
                <circle
                  key={`utan-dot-${i}`}
                  cx={p.x}
                  cy={p.y}
                  r={3}
                  fill="#B0B9D1"
                />
              ))}

              {/* "Med" dots — plain SVG */}
              {medPoints.map((p, i) => (
                <circle
                  key={`med-dot-${i}`}
                  cx={p.x}
                  cy={p.y}
                  r={4}
                  fill="#10B981"
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </svg>

            {/* Summary */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={
                frameInView ? { opacity: 1 } : reducedMotion ? { opacity: 1 } : { opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
              className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 sm:mt-6 sm:pt-5"
            >
              <span className="font-heading text-sm font-semibold text-neutral-950">
                Totala avdrag
              </span>
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-xs tabular-nums text-neutral-400 sm:text-sm">
                  <AnimatedValue
                    target={totalUtan}
                    animate={frameInView}
                    delay={1500}
                    suffix=" kr"
                  />
                </span>
                <span className="font-heading text-sm font-bold tabular-nums text-success sm:text-base">
                  <AnimatedValue
                    target={totalMed}
                    animate={frameInView}
                    delay={1500}
                    suffix=" kr"
                  />
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating badges */}

        {/* Badge: "4 avdrag hittade" — bottom right, outside card */}
        <FloatingBadge
          isVisible={frameInView}
          entryDelay={1.2}
          floatDuration={5}
          floatDistance={5}
          className="absolute -bottom-5 -right-6 z-2 max-md:hidden"
        >
          <div className="flex items-center gap-2 rounded-[10px] border border-neutral-200/60 bg-white/90 backdrop-blur-sm px-3.5 py-2 font-heading text-xs font-semibold text-neutral-950 shadow-[0_4px_16px_rgba(10,15,30,0.08)]">
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-success/15">
              <Check className="h-3 w-3 text-success" />
            </span>
            4 avdrag hittade
          </div>
        </FloatingBadge>

        {/* Badge: "AI-hjälp" — top right, outside card */}
        <FloatingBadge
          isVisible={frameInView}
          entryDelay={1.4}
          floatDuration={4.5}
          floatDistance={6}
          className="absolute -top-4 -right-8 z-2 max-md:hidden"
        >
          <div className="flex items-center gap-2 rounded-[10px] border border-transparent bg-navy-950/95 backdrop-blur-sm px-3.5 py-2 font-heading text-xs font-semibold text-white shadow-[0_4px_16px_rgba(10,15,30,0.08)]">
            <Sparkles className="h-3.5 w-3.5" />
            AI-hjälp
          </div>
        </FloatingBadge>
      </div>
    </section>
  );
}
