import AnimatedBackground from "@/components/AnimatedBackground";
import { Button as CTAButton } from "@/components/ui/button-custom";
import { Button as UIButton } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";

const SOCIAL_LINKS = {
  contact: "#contact", // Update to your contact section or mailto link
  linkedin: "#", // e.g., https://www.linkedin.com/in/your-handle
  github: "#", // e.g., https://github.com/your-handle
  whatsapp: "#", // e.g., https://wa.me/your-number
  telegram: "#", // e.g., https://t.me/your-handle
};

export default function HeroSection() {
  return (
    <section className="relative flex w-full items-center justify-center pt-14 md:pt-18">
      {/* Animated ambient background */}
      <AnimatedBackground />

      <div className="container mx-8 px-4 md:px-6">
        <div className=" min-h-[60vh] items-center flex justify-center gap-40 ">
          {/* Left: Copy */}
          <div className="flex flex-col items-start gap-6 text-left">
            {/* Greeting pill */}
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-1 text-xs text-foreground/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/50">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Hello, I'm
            </div>

            {/* Name */}
            <h1 className="max-w-3xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Gautam Krishnan
            </h1>

            {/* Role & Experience */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <p className="text-base text-foreground/80 sm:text-lg">
                Software Engineer
              </p>
              <span className="hidden h-4 w-px bg-foreground/15 sm:block" />
              <span className="rounded-full bg-foreground/5 px-3 py-1 text-sm text-foreground/70 ring-1 ring-foreground/10">
                3 Years of Experience
              </span>
            </div>

            {/* Primary CTA */}
            <div className="mt-2 flex justify-start">
              <CTAButton asChild size="cta" variant="primary" rounded>
                <a href={SOCIAL_LINKS.contact} aria-label="Contact Gautam">
                  <Mail className="mr-1.5" /> Contact
                </a>
              </CTAButton>
            </div>

            {/* Social links */}
            <div className="mt-2 flex flex-wrap items-center justify-start gap-3">
              <UIButton asChild variant="outline" size="sm">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin /> LinkedIn
                </a>
              </UIButton>
              <UIButton asChild variant="outline" size="sm">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github /> GitHub
                </a>
              </UIButton>
            </div>
          </div>

          {/* Right: Photo placeholder */}
          <div className="relative mx-auto md:mx-0">
            <div className="relative aspect-square w-56 sm:w-72 md:w-80 rounded-2xl bg-gradient-to-br from-emerald-200 via-zinc-100 to-rose-200 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 p-[3px] shadow-2xl ring-1 ring-foreground/10">
              <div className="flex size-full items-center justify-center rounded-2xl bg-background/80 backdrop-blur">
                <img
                  src="/IMG_4565.jpeg"
                  alt="Gautam Krishnan"
                  className="rounded-2xl object-cover w-full h-full"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </div>
              {/* Accent glow */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(40%_30%_at_30%_20%,rgba(16,185,129,0.25),transparent),radial-gradient(30%_25%_at_70%_80%,rgba(244,63,94,0.18),transparent)] blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
