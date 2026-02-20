"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getConsent, setConsent } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    setConsent("granted");
    setVisible(false);
  }

  function handleReject() {
    setConsent("denied");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] bg-navy-950 border-t border-navy-800"
        >
          <div className="mx-auto flex max-w-[980px] flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-white/70">
              Vi använder cookies för att analysera hur webbplatsen används.{" "}
              <Link
                href="/cookies"
                className="underline underline-offset-2 transition-colors hover:text-white"
              >
                Läs mer
              </Link>
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                onClick={handleReject}
                className="rounded-full border border-navy-700 px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:border-navy-600 hover:text-white"
              >
                Neka
              </button>
              <button
                onClick={handleAccept}
                className="rounded-full bg-accent-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-600"
              >
                Godkänn
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
