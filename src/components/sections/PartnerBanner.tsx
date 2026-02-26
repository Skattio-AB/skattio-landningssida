"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

const partners = [
  { name: "Cetti", logo: "/images/partnerlogos/Cetti logo blackPNG.png" },
  { name: "Foundry", logo: "/images/partnerlogos/foundry.png", invert: true },
  { name: "Chalmers", logo: "/images/partnerlogos/chalmers.png" },
];

export function PartnerBanner() {
  // Repeat logos 4x (12 total) so the marquee has enough to fill the track
  const logos = [...partners, ...partners, ...partners, ...partners];

  return (
    <section aria-label="Partners" className="py-10 sm:py-14">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation-play-state: paused !important; }
        }
      `}</style>

      <motion.div
        className="mx-auto max-w-6xl overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div
          className="marquee-track flex w-max items-center gap-16 sm:gap-20"
          style={{ animation: "marquee 30s linear infinite" }}
          aria-hidden="true"
        >
          {logos.map((partner, i) => (
            <Image
              key={`${partner.name}-${i}`}
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={40}
              className={cn("h-8 w-auto shrink-0 object-contain grayscale opacity-50 sm:h-10", partner.invert && "invert")}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
