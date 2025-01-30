"use client";

import { LazyMotion } from "framer-motion";
import type { ReactNode } from "react";
// ----------------------------------------------------------------------

export type MotionLazyProps = {
  children: ReactNode;
};

const loadFeaturesAsync = async () =>
  import("./features").then((res) => res.default);

export function MotionLazy({ children }: MotionLazyProps) {
  return (
    <LazyMotion strict features={loadFeaturesAsync}>
      {children}
    </LazyMotion>
  );
}
