"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 400 && y > lastY) {
        setVisible(true);
      } else if (y < lastY) {
        setVisible(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <div
      className={`fixed bottom-6 right-4 z-50 p-4 flex flex-col gap-2 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <a href="tel:2566798665" className="bg-gold text-navy font-semibold px-5 py-3 rounded-full shadow-lg text-sm">
        Call Now: 256-679-8665
      </a>
      <Link href="/contact" className="bg-skyblue text-white font-semibold px-5 py-3 rounded-full shadow-lg text-sm">
        Get a Free Quote →
      </Link>
    </div>
  );
}
