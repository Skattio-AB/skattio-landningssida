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

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className={`sticky top-0 z-50 px-6 pt-4 pb-2 transition-all duration-300 ${
        scrolled ? "bg-neutral-50/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-12 max-w-[980px] items-center justify-between rounded-full border border-neutral-200/60 bg-white px-5 shadow-[0_1px_3px_rgba(10,15,30,0.04)]">
        <Link href="/">
          <Image
            src="/images/skattio_fixed2_light.svg"
            alt={siteConfig.name}
            width={100}
            height={24}
            priority
          />
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 font-heading text-[13px] font-medium text-neutral-400 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
