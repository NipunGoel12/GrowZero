"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={`https://wa.me/${BRAND.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute -top-10 right-0 whitespace-nowrap rounded-lg bg-background px-3 py-1 text-xs opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Chat with us
        </span>
      </Link>
    </motion.div>
  );
}
