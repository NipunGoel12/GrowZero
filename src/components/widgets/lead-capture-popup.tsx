"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LeadCapturePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const dismissedBefore = sessionStorage.getItem("growzero-popup-dismissed");
    if (dismissedBefore) return;

    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("growzero-popup-dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative max-w-md rounded-2xl border border-border bg-background p-8 shadow-2xl"
          >
            <button
              onClick={dismiss}
              className="absolute right-4 top-4 text-muted hover:text-foreground"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold">
              Ready to Grow?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Get a free growth audit for your business. Limited spots available
              this month.
            </p>

            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="your@email.com" required />
              <Button asChild className="w-full">
                <Link href="#contact" onClick={dismiss}>
                  Claim Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-muted">
              Or{" "}
              <Link
                href={BRAND.calendly}
                target="_blank"
                className="text-primary hover:underline"
                onClick={dismiss}
              >
                book a consultation
              </Link>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
