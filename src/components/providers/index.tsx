"use client";

import { ThemeProvider } from "./theme-provider";
import { SmoothScrollProvider } from "./smooth-scroll-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </ThemeProvider>
  );
}
