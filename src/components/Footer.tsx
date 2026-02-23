"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { fadeIn } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-navy-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        className="mx-auto flex max-w-[980px] flex-col items-center gap-5 px-6 py-10 sm:flex-row sm:justify-between"
      >
        {/* Left: logo + copyright */}
        <div className="flex flex-col gap-2 max-sm:items-center">
          <Link href="/">
            <Image
              src="/images/skattio_fixed2_dark.svg"
              alt={siteConfig.name}
              width={100}
              height={24}
            />
          </Link>
          <span className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Skattio AB
          </span>
        </div>

        {/* Right: links */}
        <nav className="flex flex-wrap justify-center gap-5">
          <a
            href="#faq"
            className="font-heading text-xs font-medium text-white/60 transition-colors duration-200 hover:text-white/90"
          >
            FAQ
          </a>
          <Link
            href="/anvandarvillkor"
            className="font-heading text-xs font-medium text-white/60 transition-colors duration-200 hover:text-white/90"
          >
            Användarvillkor
          </Link>
          <Link
            href="/integritetspolicy"
            className="font-heading text-xs font-medium text-white/60 transition-colors duration-200 hover:text-white/90"
          >
            Integritet
          </Link>
          <Link
            href="/cookies"
            className="font-heading text-xs font-medium text-white/60 transition-colors duration-200 hover:text-white/90"
          >
            Cookies
          </Link>
          <Link
            href="/gdpr"
            className="font-heading text-xs font-medium text-white/60 transition-colors duration-200 hover:text-white/90"
          >
            GDPR
          </Link>
        </nav>
      </motion.div>
    </footer>
  );
}
