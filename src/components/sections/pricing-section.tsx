"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { SectionWrapper, SectionHeader } from "@/components/effects/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/effects/section-wrapper";

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="grid-bg">
      <div className="container-max">
        <SectionHeader
          badge="Pricing"
          title="Plans That Scale With You"
          subtitle="Transparent pricing with no hidden fees. Choose the plan that fits your growth stage."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {PRICING.map((plan, i) => (
            <TiltCard key={plan.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-500 ${
                  plan.popular
                    ? "border-primary bg-primary/5 neon-glow scale-[1.02]"
                    : "border-border bg-glass hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <Badge variant="popular" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
                <div className="mt-6">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.popular ? "default" : "secondary"}
                  className="mt-8 w-full"
                >
                  <Link href="#contact">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
