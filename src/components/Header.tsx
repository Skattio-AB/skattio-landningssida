"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Hur det fungerar", href: "#hur-det-fungerar" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "FAQ", href: "#faq" },
];

const PILL_DURATION = 0.7;
const PILL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        paddingTop: scrolled ? 16 : 0,
        paddingBottom: scrolled ? 8 : 0,
        paddingLeft: scrolled ? 24 : 0,
        paddingRight: scrolled ? 24 : 0,
      }}
      transition={{
        opacity: { duration: 0.4, ease: [0, 0, 0.2, 1] },
        paddingTop: { duration: PILL_DURATION, ease: PILL_EASE },
        paddingBottom: { duration: PILL_DURATION, ease: PILL_EASE },
        paddingLeft: { duration: PILL_DURATION, ease: PILL_EASE },
        paddingRight: { duration: PILL_DURATION, ease: PILL_EASE },
      }}
      className="sticky top-0 z-50 bg-transparent"
    >
      <motion.div
        animate={{
          height: scrolled ? 52 : 72,
          maxWidth: scrolled ? 980 : 2000,
          borderRadius: scrolled ? 9999 : 0,
          boxShadow: scrolled
            ? "0 1px 2px rgba(10,15,30,0.04)"
            : "0 1px 4px rgba(10,15,30,0.06)",
          borderColor: scrolled
            ? "rgba(229,229,229,0.6)"
            : "rgba(229,229,229,0.5)",
          paddingLeft: scrolled ? 24 : 36,
          paddingRight: scrolled ? 24 : 36,
        }}
        transition={{
          height: { duration: PILL_DURATION, ease: PILL_EASE },
          maxWidth: { duration: PILL_DURATION, ease: PILL_EASE },
          borderRadius: { duration: PILL_DURATION, ease: PILL_EASE },
          boxShadow: { duration: PILL_DURATION, ease: PILL_EASE },
          borderColor: { duration: 0.5, ease: PILL_EASE },
          paddingLeft: { duration: PILL_DURATION, ease: PILL_EASE },
          paddingRight: { duration: PILL_DURATION, ease: PILL_EASE },
        }}
        className={`mx-auto flex items-center justify-between border ${
          scrolled ? "bg-white/90 backdrop-blur-xl" : "bg-white"
        }`}
      >
        <Link href="/">
          <Image
            src="/images/skattio_fixed2_light.svg"
            alt={siteConfig.name}
            width={160}
            height={35}
            priority
          />
        </Link>

        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 font-heading text-[15px] font-medium text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
