"use client";

import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function HeroSpline() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (contentRef.current) {
          const maxScroll = 400;
          const opacity = 1 - Math.min(window.pageYOffset / maxScroll, 1);
          contentRef.current.style.opacity = opacity.toString();
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Spline
          style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
          scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
        />
        {/* Gradient overlay — edges + bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, rgba(0,0,0,0.75) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.75) 100%),
              linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.92) 100%)
            `,
          }}
        />
      </div>

      {/* Hero content — fades out on scroll */}
      <div
        ref={contentRef}
        className="relative z-10 flex items-center min-h-screen pointer-events-none"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full py-24">
          <p className="text-xs font-medium uppercase tracking-widest text-white/60 mb-6">
            AI Mastery & Deep Domain Expertise
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-white tracking-tight leading-snug">
          AI for your business and tech.
            <br />
          Put where it matters. Driven by masters.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 max-w-xl">
            Most businesses experiment with AI. Few truly own it. AIQUIRE
            bridges the gap between what AI promises and what your business
            actually needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
            <Link
              href="/contact"
              className="inline-flex bg-[var(--color-cta)] text-white rounded px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Talk to an AI Consultant
            </Link>
            <Link
              href="/packages"
              className="inline-flex border border-white/50 text-white rounded px-8 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              See Our Packages
            </Link>
          </div>
          <p className="mt-8 text-xs font-medium uppercase tracking-widest text-white/40">
            Trusted by growing SMBs and Mid-Market teams
          </p>
        </div>
      </div>
    </div>
  );
}
