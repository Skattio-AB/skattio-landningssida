"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_1px_3px_rgba(10,15,30,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt={siteConfig.name}
            width={120}
            height={32}
            priority
          />
        </Link>

        <Button asChild size="sm" className="bg-accent-500 hover:bg-accent-600 text-white">
          <a href={siteConfig.links.app}>Kom igång</a>
        </Button>
      </div>
    </motion.header>
  );
}
