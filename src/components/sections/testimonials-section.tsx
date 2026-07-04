"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionWrapper, SectionHeader } from "@/components/effects/section-wrapper";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="testimonials">
      <div className="container-max overflow-hidden">
        <SectionHeader
          badge="Client Love"
          title="What Our Clients Say"
          subtitle="Real stories from businesses that went from zero to growth with GrowZero."
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass relative rounded-2xl p-8 md:p-12"
            >
              <Quote className="absolute right-8 top-8 h-10 w-10 text-primary/20" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg leading-relaxed md:text-xl">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-bold text-white">
                  {TESTIMONIALS[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{TESTIMONIALS[current].name}</div>
                  <div className="text-sm text-muted">{TESTIMONIALS[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-muted/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="animate-marquee flex gap-6">
            {doubled.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="glass w-80 shrink-0 rounded-xl p-6 transition-transform hover:scale-[1.02]"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted line-clamp-3">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
