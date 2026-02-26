"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const mobileNavContainer: import("framer-motion").Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const mobileNavItem: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

const navLinks = [
  { label: "Hur det fungerar", href: "/#hur-det-fungerar" },
  { label: "Tjänster", href: "/#tjanster" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 640;
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
      <header
        className={cn(
          "sticky top-0 z-50 bg-transparent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          !mounted && "opacity-0",
          mounted && "opacity-100",
          scrolled
            ? isMobile
              ? "pt-2 pb-1 px-3"
              : "pt-4 pb-2 px-6"
            : "pt-3 pb-0 px-0"
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled
              ? "max-w-[980px] rounded-full bg-white/90 backdrop-blur-xl shadow-[0_1px_2px_rgba(10,15,30,0.04)] border-neutral-200/60"
              : "max-w-[2000px] rounded-none bg-white shadow-[0_1px_4px_rgba(10,15,30,0.06)] border-neutral-200/50",
            scrolled
              ? isMobile
                ? "h-11 px-4"
                : "h-[52px] px-6"
              : isMobile
                ? "h-14 px-5"
                : "h-[72px] px-9"
          )}
        >
          <Link href="/">
            <Image
              src="/Logodark.svg"
              alt={siteConfig.name}
              width={150}
              height={37}
              priority
              className="mt-1 w-[119px] sm:w-[150px]"
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
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.1 } }}
            transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-white"
          >
            <motion.nav
              className="flex h-full flex-col items-center justify-center gap-2"
              variants={mobileNavContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  variants={mobileNavItem}
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
