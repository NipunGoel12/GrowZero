"use server";

import { newsletterSchema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string;
  const parsed = newsletterSchema.safeParse({ email });

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message };
  }

  try {
    if (process.env.DATABASE_URL) {
      await prisma.newsletterSubscriber.upsert({
        where: { email: parsed.data.email },
        update: {},
        create: { email: parsed.data.email },
      });
    }

    return { success: true };
  } catch {
    return { success: false, error: "Failed to subscribe. Please try again." };
  }
}
