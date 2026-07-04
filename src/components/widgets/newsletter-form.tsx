"use client";

import { useState, useTransition } from "react";
import { Mail, Loader2, Check } from "lucide-react";
import { subscribeNewsletter } from "@/app/actions/newsletter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (formData: FormData) => {
    setError("");
    startTransition(async () => {
      const result = await subscribeNewsletter(formData);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Something went wrong");
      }
    });
  };

  if (success) {
    return (
      <div className="flex items-center gap-2 text-sm text-accent">
        <Check className="h-4 w-4" />
        Thanks for subscribing!
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="pl-10"
          required
        />
      </div>
      <Button type="submit" size="sm" disabled={isPending}>
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
      </Button>
      {error && <p className="text-xs text-red-400 sm:absolute sm:mt-12">{error}</p>}
    </form>
  );
}
