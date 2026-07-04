"use client";

import Link from "next/link";
import {
  Share2,
  Globe,
  AtSign,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { BRAND, NAV_LINKS, SERVICES } from "@/lib/constants";
import { NewsletterForm } from "@/components/widgets/newsletter-form";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/80">
      <div className="section-padding pb-8">
        <div className="container-max grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <span className="font-display text-lg font-bold text-white">G</span>
              </div>
              <span className="font-display text-xl font-bold">{BRAND.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Every successful business starts at Zero. We help local businesses grow
              online through premium websites, social media, and digital marketing.
            </p>
            <p className="mt-4 font-display text-sm font-semibold gradient-text">
              {BRAND.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <Link
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted">
                <Mail className="h-4 w-4 text-primary" />
                {BRAND.email}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <Phone className="h-4 w-4 text-primary" />
                {BRAND.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-primary" />
                India
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[Share2, Globe, AtSign].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-glass transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container-max mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <NewsletterForm />
          </div>
          <p className="mt-8 text-center text-xs text-muted">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
