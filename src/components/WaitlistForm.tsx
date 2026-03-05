"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { cn } from "@/lib/utils";

export function WaitlistForm({
  className,
}: {
  className?: string;
}) {
  const [state, action, pending] = useActionState<WaitlistState | null, FormData>(
    joinWaitlist,
    null
  );

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <AnimatePresence mode="wait">
        {state?.success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center justify-center gap-2 py-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20">
              <Check className="h-4 w-4 text-success" />
            </div>
            <span className="font-heading text-[15px] font-semibold text-neutral-950">
              Tack! Vi hör av oss.
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            action={action}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              name="email"
              placeholder="din@email.se"
              required
              autoComplete="email"
              disabled={pending}
              className="h-[52px] flex-1 rounded-xl text-[15px] px-4 border-neutral-200 bg-white text-neutral-950 placeholder:text-neutral-400"
            />
            <Button
              type="submit"
              variant="outline"
              size="lg"
              disabled={pending}
              className="h-[52px] rounded-xl px-7 text-[15px] border-neutral-200 text-neutral-600 hover:border-neutral-600 hover:text-neutral-950 transition-all duration-200 disabled:opacity-70"
            >
              {pending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Skriv upp mig"
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>

      {state?.error && !state.success && (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-center text-sm text-error"
        >
          {state.error}
        </motion.p>
      )}
    </div>
  );
}
