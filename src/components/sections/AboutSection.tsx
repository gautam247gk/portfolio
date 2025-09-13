"use client";

import { useEffect } from "react";
import { Button as UIButton } from "@/components/ui/button";

export default function AboutSection() {
  useEffect(() => {
    // no-op, section uses AOS attributes configured globally
  }, []);

  return (
    <section id="aboutMe" className="relative w-full px-6 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div data-aos="fade-up" className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              About Me
            </h2>
            <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
              I design and build resilient, delightful software—bringing
              together product sense, performance engineering, and clean
              architecture. I enjoy shipping fast without compromising quality,
              and crafting experiences that feel effortless.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My focus areas include platform engineering, DX tooling, and
              modern web stacks. I care about details: accessibility, motion,
              and micro‑interactions that make interfaces feel alive.
            </p>
            <div
              className="flex flex-wrap gap-3 pt-2"
              data-aos="zoom-in"
              data-aos-delay="50"
            >
              <span className="rounded-full border px-3 py-1 text-xs">
                TypeScript
              </span>
              <span className="rounded-full border px-3 py-1 text-xs">
                Next.js
              </span>
              <span className="rounded-full border px-3 py-1 text-xs">
                Node.js
              </span>
              <span className="rounded-full border px-3 py-1 text-xs">
                PostgreSQL
              </span>
              <span className="rounded-full border px-3 py-1 text-xs">
                Cloud
              </span>
              <span className="rounded-full border px-3 py-1 text-xs">
                Design Systems
              </span>
            </div>
            <div className="pt-4" data-aos="fade-up" data-aos-delay="100">
              <UIButton asChild size="sm" className="rounded-full">
                <a href="#projects">Explore Projects</a>
              </UIButton>
            </div>
          </div>

          <div
            className="relative mx-auto max-w-sm"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-emerald-300 via-zinc-100 to-rose-200 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 shadow-2xl ring-1 ring-foreground/10">
              <div className="rounded-2xl bg-background/70 backdrop-blur p-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Performance‑first mindset
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue-500" />
                    End‑to‑end ownership
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-rose-500" />
                    Accessible, inclusive design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-violet-500" />
                    Thoughtful motion and polish
                  </li>
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(40%_30%_at_30%_20%,rgba(16,185,129,0.25),transparent),radial-gradient(30%_25%_at_70%_80%,rgba(244,63,94,0.18),transparent)] blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
