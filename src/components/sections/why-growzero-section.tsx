"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/effects/section-wrapper";

const others = [
  "Generic Designs",
  "Slow Delivery",
  "No Growth Strategy",
  "Weak Branding",
];

const growzero = [
  "Premium Websites",
  "Faster Delivery",
  "Growth-Focused Strategy",
  "Strong Online Presence",
];

export function WhyGrowZeroSection() {
  return (
    <SectionWrapper id="why" className="grid-bg">
      <div className="container-max">
        <SectionHeader
          badge="The Difference"
          title="Others vs GrowZero"
          subtitle="Not all agencies are built the same. Here's why businesses choose us."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8"
          >
            <h3 className="mb-6 font-display text-xl font-bold text-red-400">
              Others
            </h3>
            <ul className="space-y-4">
              {others.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-accent/30 bg-accent/5 p-8 neon-glow"
          >
            <h3 className="mb-6 font-display text-xl font-bold gradient-text">
              GrowZero
            </h3>
            <ul className="space-y-4">
              {growzero.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
