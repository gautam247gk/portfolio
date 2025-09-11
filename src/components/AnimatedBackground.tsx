"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export default function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft vertical base gradient (updated palette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-emerald-50" />

      {/* Subtle grid with a vignette fade + gentle parallax */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-grid opacity-50"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)",
        }}
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, 8, -6, 0], y: [0, -6, 8, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
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
            initial={{ x: -120, y: -100, scale: 1 }}
            animate={{
              x: [-120, 100, -80, -120],
              y: [-100, 60, -40, -100],
              scale: [1, 1.12, 0.92, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-48 -right-24 h-[50vmax] w-[50vmax] rounded-full bg-rose-400/25 blur-3xl mix-blend-multiply"
            initial={{ x: 60, y: 120, scale: 1 }}
            animate={{
              x: [60, -60, 100, 60],
              y: [120, 40, 160, 120],
              scale: [1, 0.94, 1.12, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute top-1/3 left-1/2 h-[45vmax] w-[45vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/25 blur-3xl mix-blend-multiply"
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: [0, 45, -30, 0], scale: [1, 1.06, 0.97, 1] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Additional smaller floaters for more motion */}
          <motion.div
            aria-hidden
            className="absolute top-10 right-1/3 h-[28vmax] w-[28vmax] rounded-full bg-amber-300/25 blur-3xl mix-blend-multiply"
            initial={{ x: 40, y: -20, scale: 1 }}
            animate={{
              x: [40, -30, 60, 0, 40],
              y: [-20, 30, -10, 50, -20],
              scale: [1, 1.04, 0.98, 1.06, 1],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-1/4 left-1/4 h-[22vmax] w-[22vmax] rounded-full bg-teal-300/25 blur-2xl mix-blend-multiply"
            initial={{ x: -20, y: 20, rotate: 0 }}
            animate={{
              x: [-20, 50, -40, 30, -20],
              y: [20, -30, 40, -10, 20],
              rotate: [0, 20, -15, 10, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}
