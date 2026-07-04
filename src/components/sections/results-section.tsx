"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { RESULTS } from "@/lib/constants";
import { SectionWrapper, SectionHeader } from "@/components/effects/section-wrapper";

function AnimatedBar({
  label,
  value,
  suffix,
  color,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(value * progress));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="font-bold" style={{ color }}>
          {displayValue}
          {suffix}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${Math.min(value / 5, 100)}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </motion.div>
  );
}

export function ResultsSection() {
  return (
    <SectionWrapper id="results">
      <div className="container-max">
        <SectionHeader
          badge="Proven Results"
          title="Growth You Can Measure"
          subtitle="Real metrics from real campaigns — because growth should never be a guess."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {RESULTS.map((result, i) => (
              <AnimatedBar key={result.label} {...result} delay={i * 0.1} />
            ))}
          </div>

          <div className="glass relative overflow-hidden rounded-2xl p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
            <h3 className="relative font-display text-2xl font-bold">
              Average Client Growth
            </h3>
            <div className="relative mt-8 grid grid-cols-2 gap-6">
              {[
                { label: "Avg. ROI", value: "340%" },
                { label: "Client Retention", value: "95%" },
                { label: "Avg. Timeline", value: "3 Weeks" },
                { label: "Satisfaction", value: "4.9/5" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-background/50 p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="relative mt-8 flex h-40 items-end justify-between gap-2 px-2">
              {[40, 55, 45, 70, 60, 85, 75, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="w-full rounded-t-md bg-gradient-to-t from-primary to-secondary opacity-80"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
