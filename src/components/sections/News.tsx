"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft } from "@/lib/animations";

export function News() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-[980px] px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.5fr] lg:gap-16">
          {/* Left: heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromLeft}
          >
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent-500">
              Nyheter
            </span>
            <h2 className="mt-3 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-neutral-950">
              Senaste nytt
            </h2>
            <p className="mt-3 text-[17px] leading-[1.7] text-neutral-600">
              Tillsammans med Cetti förenklar vi bostadsaffären.
            </p>
          </motion.div>

          {/* Right: news card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                  Nyhet
                </span>
                <Image
                  src="/images/partnerlogos/Cetti logo blackPNG.png"
                  alt="Cetti"
                  width={80}
                  height={28}
                  className="h-7 w-auto opacity-80"
                />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-neutral-950">
                Integrerat i bostadsaffärens digitala flöde
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-neutral-600">
                Skattio är integrationspartner till Cetti – en ledande plattform
                för digital budgivning och hantering av bostadsaffärer i
                Sverige. Genom samarbetet kan säljare som använder Cetti enkelt
                genomföra sin bostadsdeklaration direkt i plattformen. Skattio
                hanterar beräkningar, avdrag och SRU-export i bakgrunden, så att
                hela processen blir sammanhållen och smidig.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
