"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper, SectionHeader } from "@/components/effects/section-wrapper";

const timeline = [
  {
    year: "Zero",
    title: "Every brand starts here",
    description: "Zero customers. Zero followers. Zero recognition. This is where every success story begins.",
  },
  {
    year: "Discover",
    title: "Understanding your potential",
    description: "We analyze your market, audience, and competitors to uncover hidden growth opportunities.",
  },
  {
    year: "Build",
    title: "Crafting your digital presence",
    description: "Premium websites, compelling content, and strategic branding that sets you apart.",
  },
  {
    year: "Grow",
    title: "Scaling what works",
    description: "Data-driven campaigns, SEO, and social media that turn attention into revenue.",
  },
  {
    year: "Scale",
    title: "From Zero to Growth",
    description: "GrowZero exists to help businesses move from Zero to Growth — and beyond.",
  },
];

export function BrandStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <SectionWrapper id="story">
      <div className="container-max" ref={containerRef}>
        <SectionHeader
          badge="Our Story"
          title="Why GrowZero?"
          subtitle="Every successful brand started with zero customers, zero followers, and zero recognition. GrowZero exists to help businesses move from Zero to Growth."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`timeline-item relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:mr-auto md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12 md:text-left md:ml-[50%]"
                }`}
              >
                <div
                  className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background md:left-auto ${
                    i % 2 === 0 ? "md:-right-4 md:left-auto" : "md:-left-4"
                  }`}
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {item.year}
                </span>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
