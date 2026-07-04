"use client";

import { useEffect, useState } from "react";
import { useSpring, useTransform } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const [display, setDisplay] = useState(0);
  const spring = useSpring(0, { duration: 2000 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    spring.set(value);
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [value, spring, rounded]);

  return (
    <div className="text-center">
      <span className="font-display text-3xl font-bold md:text-4xl">
        {display}
        {suffix}
      </span>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
