"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import navigation from "@/content/navigation.json";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6] border-b border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link href="/" className="font-serif font-bold text-xl tracking-tight text-[#0F0F0F]">
          AIQUIRE
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.main_nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#0F0F0F] hover:text-[#1B4D3E] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href={navigation.cta.href}
          className="hidden lg:inline-flex bg-[#0F0F0F] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#1B4D3E] transition-colors"
        >
          {navigation.cta.label}
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#0F0F0F]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#EBEBEB] bg-[#FAF9F6]">
          <nav className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navigation.main_nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[#0F0F0F] hover:text-[#1B4D3E] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={navigation.cta.href}
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center bg-[#0F0F0F] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#1B4D3E] transition-colors"
            >
              {navigation.cta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
