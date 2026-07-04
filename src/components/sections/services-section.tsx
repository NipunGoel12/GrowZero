"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Share2,
  Clapperboard,
  Palette,
  Search,
  Target,
  MapPin,
  LineChart,
  LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionWrapper, SectionHeader } from "@/components/effects/section-wrapper";
import { TiltCard } from "@/components/effects/section-wrapper";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Share2,
  Clapperboard,
  Palette,
  Search,
  Target,
  MapPin,
  LineChart,
};

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="grid-bg">
      <div className="container-max">
        <SectionHeader
          badge="What We Do"
          title="Services That Drive Growth"
          subtitle="End-to-end digital solutions designed to take your business from zero to market leader."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <TiltCard key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-glass p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <h3 className="font-display text-lg font-bold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
