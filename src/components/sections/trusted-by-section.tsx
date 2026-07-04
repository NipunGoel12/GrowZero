"use client";

import { TRUSTED_LOGOS } from "@/lib/constants";

export function TrustedBySection() {
  const logos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <section className="relative overflow-hidden border-y border-border py-12">
      <div className="mb-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          Trusted By Growing Businesses
        </span>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12">
          {logos.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-glass px-6 py-3 transition-colors hover:border-primary/30"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-sm font-bold text-primary">
                {logo.charAt(0)}
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-muted">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
