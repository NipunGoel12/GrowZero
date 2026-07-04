"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { BRAND, STATS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { ParticlesBackground } from "@/components/effects/particles";
import { AnimatedCounter } from "@/components/effects/animated-counter";

const GrowthGraphScene = dynamic(
  () =>
    import("@/components/three/growth-graph-scene").then((mod) => mod.GrowthGraphScene),
  { ssr: false }
);

const floatingIcons = ["📈", "🚀", "💡", "🎯", "✨"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="animated-gradient absolute inset-0" />
      <div className="grid-bg absolute inset-0 opacity-50" />
      <ParticlesBackground />

      <div className="absolute right-0 top-1/4 hidden h-[500px] w-[500px] opacity-40 lg:block">
        <GrowthGraphScene />
      </div>

      {floatingIcons.map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl opacity-20 md:text-3xl"
          style={{
            left: `${10 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.span>
      ))}

      <div className="container-max relative z-10 px-4 md:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary">Digital Growth Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.5 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            Every Business{" "}
            <span className="gradient-text neon-text">Starts At Zero.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.7 }}
            className="mt-6 max-w-xl text-lg text-muted md:text-xl"
          >
            {BRAND.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.9 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Button asChild size="lg" className="neon-glow w-full sm:w-auto">
                <Link href={BRAND.calendly} target="_blank">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.1 }}
            className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8 md:max-w-lg"
          >
            {STATS.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted/50 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
