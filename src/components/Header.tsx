"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/animations";

const navLinks = [
  { label: "Hur det fungerar", href: "/#hur-det-fungerar" },
  { label: "Tjänster", href: "/#tjanster" },
  { label: "FAQ", href: "/#faq" },
];

const PILL_DURATION = 0.7;
const PILL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SM_BREAKPOINT = 640;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < SM_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          paddingTop: scrolled ? (isMobile ? 8 : 16) : 0,
          paddingBottom: scrolled ? (isMobile ? 4 : 8) : 0,
          paddingLeft: scrolled ? (isMobile ? 12 : 24) : 0,
          paddingRight: scrolled ? (isMobile ? 12 : 24) : 0,
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
            height: scrolled
              ? isMobile
                ? 44
                : 52
              : isMobile
                ? 56
                : 72,
            maxWidth: scrolled ? 980 : 2000,
            borderRadius: scrolled ? 9999 : 0,
            boxShadow: scrolled
              ? "0 1px 2px rgba(10,15,30,0.04)"
              : "0 1px 4px rgba(10,15,30,0.06)",
            borderColor: scrolled
              ? "rgba(229,229,229,0.6)"
              : "rgba(229,229,229,0.5)",
            paddingLeft: scrolled ? (isMobile ? 16 : 24) : isMobile ? 20 : 36,
            paddingRight: scrolled
              ? isMobile
                ? 16
                : 24
              : isMobile
                ? 20
                : 36,
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
              src="/images/skattio_jakarta.svg"
              alt={siteConfig.name}
              width={220}
              height={44}
              priority
              className="w-[160px] sm:w-[220px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 sm:flex">
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 sm:hidden"
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X className="h-5 w-5 text-neutral-700" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu className="h-5 w-5 text-neutral-700" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-white"
          >
            <motion.nav
              className="flex h-full flex-col items-center justify-center gap-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  variants={fadeUp}
                  className="rounded-xl px-6 py-3 font-heading text-xl font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
