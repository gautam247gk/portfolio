"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button-custom";
import { Menu as MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";

const nav = [
  { id: "home", label: "Home" },
  { id: "aboutMe", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const el = headerRef.current;
    const originalHeight = el?.offsetHeight ?? 64;

    function onScroll() {
      setScrolled(window.scrollY > originalHeight);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // smooth scroll handler for hash links (prevents navigation)
  function handleHashScroll(e: React.MouseEvent, id: string) {
    e.preventDefault();

    // If we're not on the home page, navigate there with the hash first.
    // After navigation, attempt to scroll to the element.
    if (pathname !== "/") {
      router.push(`/#${id}`);
      // attempt to scroll after navigation / render; small delay is usually sufficient
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update history so the hash appears in the URL
      if (
        typeof window !== "undefined" &&
        typeof history !== "undefined" &&
        history.replaceState
      ) {
        history.replaceState(null, "", `#${id}`);
      }
    }
  }

  return (
    <header
      ref={headerRef}
      className={`sticky h-[56px] sm:h-[64px] top-0  z-50 w-full p-0 text-foreground transition-colors duration-200   ${
        scrolled ? "bg-opacity-90 backdrop-blur-md" : "bg-transparent"
      } }`}
    >
      <div className="container max-w-7xl ">
        <div className="grid w-full grid-cols-2 items-center justify-center py-3 md:grid-cols-[1fr_2fr_0.5fr] ">
          <Link href="/" className="flex items-center justify-start gap-2">
            <h2 className="text-2xl font-bold">&lt;Gautam Krishnan&#47;&gt;</h2>
            <span className="sr-only">Gautam Krishnan</span>
          </Link>

          <nav className="hidden w-full items-center justify-around align-baseline text-md font-medium md:flex-row md:flex">
            {nav.map((item) => {
              return (
                <a
                  key={item.id}
                  href={"#" + item.id}
                  onClick={(e) => handleHashScroll(e, item.id)}
                  className="text-black text-center w-full dark:text-secondary-foreground"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <div className="hidden items-center gap-2 text-sm font-medium md:flex">
              <Button
                asChild
                size="sm"
                className="rounded-full border-white border"
              >
                <a href="#resume">Resume</a>
              </Button>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="inline-flex items-center justify-center p-2 rounded-md"
                  >
                    <MenuIcon className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="px-4 py-2 flex flex-col gap-3">
                    {nav.map((item) => {
                      return (
                        <SheetClose asChild key={item.id}>
                          <a
                            href={"#" + item.id}
                            onClick={(e) => handleHashScroll(e, item.id)}
                            className="text-lg font-semibold py-2"
                          >
                            {item.label}
                          </a>
                        </SheetClose>
                      );
                    })}
                    <div className="mt-4 flex flex-col gap-2">
                      <Button asChild size="sm" className="rounded-full">
                        <a href="#resume">Resume</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
