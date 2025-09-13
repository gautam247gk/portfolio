"use client";
import AnimatedBackground from "@/components/AnimatedBackground";
import Image from "next/image";
import { Button as UIButton } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SOCIAL_LINKS = {
  contact: "#contact",
  linkedin: "https://www.linkedin.com/in/gautam247gk/",
  github: "https://github.com/gautam247gk/",
  email: "mailto:gautam247gk@gmail.com",
};

// Typewriter effect for name
function Typewriter({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Clean any existing timer (Strict Mode double-invoke safe)
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setDisplayed("");
    let index = 0;

    const tick = () => {
      setDisplayed(text.slice(0, index + 1));
      index += 1;
      if (index < text.length) {
        timeoutRef.current = setTimeout(tick, speed);
      }
    };

    timeoutRef.current = setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full px-6 py-20 pt-14 md:pt-18">
      {/* Animated ambient background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 md:px-6">
        <div className="min-h-[60vh] grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
          {/* Left: Copy */}
          <div
            className="flex flex-col items-start gap-6 text-left max-w-2xl"
            data-aos="fade-right"
          >
            {/* Greeting pill */}
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-1 text-xs text-foreground/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/50">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Hello, I&apos;m
            </div>

            {/* Name with typewriter effect */}
            <h1 className="max-w-3xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              <Typewriter text="Gautam Krishnan" speed={120} />
            </h1>

            {/* Role & Experience */}
            <div className="flex flex-row items-center gap-3 sm:flex-row sm:gap-4">
              <div className="flex flex-col">
                <p className="text-base text-foreground/80 sm:text-lg">
                  Results-driven Full Stack Software Engineer with significant
                  experience in building enterprise-grade web applications and
                  cloud-native services
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-2 flex flex-wrap items-center justify-start gap-3">
              <UIButton
                asChild
                variant="outline"
                size="sm"
                className="rounded-full px-4"
              >
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="mr-1.5" /> LinkedIn
                </a>
              </UIButton>
              <UIButton
                asChild
                variant="outline"
                size="sm"
                className="rounded-full px-4"
              >
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="mr-1.5" /> GitHub
                </a>
              </UIButton>
              <UIButton
                asChild
                variant="outline"
                size="sm"
                className="rounded-full px-4"
              >
                <a
                  href={SOCIAL_LINKS.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="mr-1.5" /> Email
                </a>
              </UIButton>
            </div>
          </div>

          {/* Right: Photo placeholder */}
          <div
            className="relative mx-auto md:mx-0 mt-8 px-10 w-100vw"
            data-aos="fade-left"
          >
            <div className="flex size-full items-center justify-center rounded-2xl bg-transparent backdrop-blur">
              {/* Right: Photo with abstract frame */}
              <div className="relative aspect-square w-56 sm:w-72 md:w-80 rounded-2xl bg-gradient-to-br from-emerald-200 via-zinc-100 to-rose-200 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 p-[3px] shadow-2xl ring-1 ring-foreground/10">
                {/* Core image panel */}
                <div className="flex size-full items-center justify-center overflow-hidden rounded-2xl bg-background/80 backdrop-blur">
                  <Image
                    src="/IMG_4565.png"
                    alt="Gautam Krishnan"
                    fill
                    priority
                    sizes="(max-width: 768px) 16rem, (max-width: 1024px) 18rem, 20rem"
                    className="object-cover rounded-2xl"
                  />
                </div>

                {/* Decorative abstract frame */}
                {/* Soft radial blobs that match the page gradient */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-8 -z-10"
                >
                  <div className="absolute -left-10 -top-6 size-28 rounded-full bg-emerald-400/25 blur-2xl" />
                  <div className="absolute -right-8 -bottom-8 size-32 rounded-full bg-rose-400/25 blur-2xl" />
                  <div className="absolute left-8 bottom-6 size-24 rounded-full bg-violet-400/20 blur-2xl" />
                </div>

                {/* Dotted rotating ring */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-[-14%] -z-10 flex items-center justify-center"
                >
                  <div className="size-full rounded-[2.2rem]">
                    <div className="absolute left-1/2 top-1/2 size-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-foreground/20 opacity-60 animate-[spin_18s_linear_infinite]" />
                  </div>
                </div>

                {/* Accent glow (kept) */}
                <div className="pointer-events-none absolute -inset-6 -z-20 rounded-[2rem] bg-[radial-gradient(40%_30%_at_30%_20%,rgba(16,185,129,0.22),transparent),radial-gradient(30%_25%_at_70%_80%,rgba(244,63,94,0.16),transparent)] blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
