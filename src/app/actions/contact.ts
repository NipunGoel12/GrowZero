"use server";

import { contactFormSchema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";

export async function submitContactForm(formData: FormData) {
  const raw = {
    fullName: formData.get("fullName") as string,
    businessName: formData.get("businessName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    service: formData.get("service") as string,
    message: formData.get("message") as string,
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    parsed.error.issues.forEach((issue) => {
      if (issue.path[0]) {
        errors[issue.path[0] as string] = issue.message;
      }
    });
    return { success: false, errors };
  }

  try {
    if (process.env.DATABASE_URL) {
      await prisma.contactInquiry.create({
        data: parsed.data,
      });
    }

    return { success: true };
  } catch {
    return {
      success: false,
      errors: { form: "Something went wrong. Please try again or contact us on WhatsApp." },
    };
  }
}
