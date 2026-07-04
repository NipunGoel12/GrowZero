"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionWrapper, SectionHeader } from "@/components/effects/section-wrapper";

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const steps = gsap.utils.toArray<HTMLElement>(".process-step");
    steps.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <SectionWrapper id="process">
      <div className="container-max" ref={sectionRef}>
        <SectionHeader
          badge="How We Work"
          title="Our Growth Process"
          subtitle="A proven framework that transforms ideas into measurable business growth."
        />

        <div className="relative mx-auto flex max-w-lg flex-col items-center">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="process-step group relative w-full rounded-2xl border border-border bg-glass p-8 text-center transition-all duration-500 hover:border-primary/40 hover:neon-glow">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xl font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="font-display text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="my-4 flex flex-col items-center">
                  <div className="h-8 w-px bg-gradient-to-b from-primary to-secondary" />
                  <div className="text-secondary">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
