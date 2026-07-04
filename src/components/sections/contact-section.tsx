"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, CheckCircle, Loader2 } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";
import { submitContactForm } from "@/app/actions/contact";
import { SectionWrapper, SectionHeader } from "@/components/effects/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (formData: FormData) => {
    setErrors({});
    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      } else if (result.errors) {
        setErrors(result.errors);
      }
    });
  };

  return (
    <SectionWrapper id="contact" className="grid-bg">
      <div className="container-max">
        <SectionHeader
          badge="Get In Touch"
          title="Start Your Growth Journey"
          subtitle="Ready to go from zero to growth? Let's talk about your business goals."
        />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold">Let&apos;s Connect</h3>
              <p className="mt-3 text-sm text-muted">
                Book a free consultation or reach out directly. We typically respond within
                24 hours.
              </p>
              <div className="mt-8 space-y-4">
                <div>
                  <span className="text-xs text-muted">Email</span>
                  <p className="font-medium">{BRAND.email}</p>
                </div>
                <div>
                  <span className="text-xs text-muted">Phone</span>
                  <p className="font-medium">{BRAND.phone}</p>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-8 w-full">
                <Link
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Contact
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-3">
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-background/95 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                  >
                    <CheckCircle className="h-16 w-16 text-accent" />
                  </motion.div>
                  <h3 className="mt-4 font-display text-2xl font-bold">Message Sent!</h3>
                  <p className="mt-2 text-muted">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              action={handleSubmit}
              className="glass space-y-5 rounded-2xl p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" name="fullName" placeholder="John Doe" required />
                  {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder="Your Business"
                    required
                  />
                  {errors.businessName && (
                    <p className="text-xs text-red-400">{errors.businessName}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@business.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Required</Label>
                <select
                  id="service"
                  name="service"
                  required
                  className="flex h-12 w-full rounded-xl border border-border bg-glass px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-xs text-red-400">{errors.service}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business and goals..."
                  required
                />
                {errors.message && (
                  <p className="text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {errors.form && (
                <p className="text-sm text-red-400">{errors.form}</p>
              )}

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
