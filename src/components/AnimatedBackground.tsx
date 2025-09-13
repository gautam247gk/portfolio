"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect } from "react";

export default function AnimatedBackground() {
  const reduce = useReducedMotion();

  // Mouse-based parallax (does not place elements under the cursor)
  const mx = useMotionValue(0); // normalized -1..1
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.25 });
  const smy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.25 });

  useEffect(() => {
    if (reduce) return; // respect prefers-reduced-motion
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1; // -1..1
      const y = (e.clientY / window.innerHeight) * 2 - 1; // -1..1
      // Parallax: move opposite to cursor slightly (not directly under pointer)
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, mx, my]);

  // Parallax mappings (deeper layers move less)
  const blob1X = useTransform(smx, [-1, 1], [-60, 60]);
  const blob1Y = useTransform(smy, [-1, 1], [40, -40]);
  const blob2X = useTransform(smx, [-1, 1], [40, -40]);
  const blob2Y = useTransform(smy, [-1, 1], [-35, 35]);
  const blob3X = useTransform(smx, [-1, 1], [-30, 30]);
  const blob3Y = useTransform(smy, [-1, 1], [25, -25]);
  const floater1X = useTransform(smx, [-1, 1], [26, -26]);
  const floater1Y = useTransform(smy, [-1, 1], [-18, 18]);
  const floater2X = useTransform(smx, [-1, 1], [-20, 20]);
  const floater2Y = useTransform(smy, [-1, 1], [16, -16]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft vertical base gradient (updated palette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-emerald-50" />

      {/* Subtle grid with a vignette fade (static) */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-grid opacity-50"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)",
        }}
      />

      {/* Aurora gradient wash (rotates very slowly) */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute -inset-[20%] opacity-60 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(60% 45% at 20% 30%, rgba(16,185,129,0.22) 0%, transparent 60%)," +
              "radial-gradient(55% 40% at 80% 20%, rgba(244,63,94,0.20) 0%, transparent 60%)," +
              "radial-gradient(60% 50% at 50% 85%, rgba(245,158,11,0.18) 0%, transparent 60%)",
            filter: "blur(20px)",
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Animated color blobs */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full bg-emerald-400/30 blur-3xl mix-blend-multiply"
            style={{ x: blob1X, y: blob1Y }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-48 -right-24 h-[50vmax] w-[50vmax] rounded-full bg-rose-400/25 blur-3xl mix-blend-multiply"
            style={{ x: blob2X, y: blob2Y }}
          />
          <motion.div
            aria-hidden
            className="absolute top-1/3 left-1/2 h-[45vmax] w-[45vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/25 blur-3xl mix-blend-multiply"
            style={{ x: blob3X, y: blob3Y }}
          />
          {/* Additional smaller floaters for more motion */}
          <motion.div
            aria-hidden
            className="absolute top-10 right-1/3 h-[28vmax] w-[28vmax] rounded-full bg-amber-300/25 blur-3xl mix-blend-multiply"
            style={{ x: floater1X, y: floater1Y }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-1/4 left-1/4 h-[22vmax] w-[22vmax] rounded-full bg-teal-300/25 blur-2xl mix-blend-multiply"
            style={{ x: floater2X, y: floater2Y }}
          />
        </>
      )}
    </div>
  );
}
