"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 120,
    });
  }, []);

  return null;
}
