"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";
import { PORTFOLIO } from "@/lib/constants";
import { SectionWrapper, SectionHeader } from "@/components/effects/section-wrapper";
import { Badge } from "@/components/ui/badge";

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="portfolio" className="grid-bg">
      <div className="container-max">
        <SectionHeader
          badge="Our Work"
          title="Portfolio Showcase"
          subtitle="Real results for real businesses — see how we transform brands from zero to growth."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {PORTFOLIO.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-glass"
            >
              <div
                className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient} p-6`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                  animate={{
                    y: hoveredIndex === i ? -10 : 0,
                    scale: hoveredIndex === i ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative mx-auto mt-4 h-full max-w-[280px] rounded-t-xl border border-white/20 bg-background/90 p-4 shadow-2xl"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 rounded bg-white/5 px-2 py-0.5 text-[10px] text-muted">
                      {project.title.toLowerCase().replace(/\s/g, "")}.com
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 rounded bg-primary/30" />
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-5/6 rounded bg-white/10" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="aspect-square rounded bg-white/5" />
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    x: hoveredIndex === i ? 0 : 20,
                    opacity: hoveredIndex === i ? 1 : 0.7,
                  }}
                  className="absolute bottom-4 right-4 flex h-32 w-16 items-center justify-center rounded-xl border-2 border-white/20 bg-background/90 shadow-xl"
                >
                  <Smartphone className="h-8 w-8 text-muted" />
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-3 text-sm font-semibold text-accent">{project.metric}</p>

                <div className="mt-4 flex gap-4">
                  <div className="flex-1 rounded-lg border border-border p-3 text-center">
                    <span className="text-xs text-muted">Before</span>
                    <div className="mt-1 h-2 rounded bg-red-500/30">
                      <div className="h-full w-1/4 rounded bg-red-500" />
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg border border-border p-3 text-center">
                    <span className="text-xs text-muted">After</span>
                    <div className="mt-1 h-2 rounded bg-accent/30">
                      <div className="h-full w-full rounded bg-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
