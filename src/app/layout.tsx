import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { WhatsAppButton } from "@/components/widgets/whatsapp-button";
import { AIChatWidget } from "@/components/widgets/ai-chat-widget";
import { LeadCapturePopup } from "@/components/widgets/lead-capture-popup";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BRAND.name} | Digital Growth Agency — From Zero To Growth`,
  description: BRAND.subheadline,
  keywords: [
    "digital marketing agency",
    "website development",
    "social media management",
    "SEO",
    "branding",
    "lead generation",
    "GrowZero",
  ],
  openGraph: {
    title: `${BRAND.name} — Every Business Starts At Zero`,
    description: BRAND.subheadline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <Providers>
          <LoadingScreen />
          <CursorGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <AIChatWidget />
          <LeadCapturePopup />
        </Providers>
      </body>
    </html>
  );
}
