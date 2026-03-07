"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import navigation from "@/content/navigation.json";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e6e4e2]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="AIQUIRE"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.main_nav.map((item) => {
            const hasDropdown = item.dropdown && (navigation as any)[item.dropdown];

            if (hasDropdown) {
              const dropdownItems = (navigation as any)[item.dropdown];
              return (
                <div key={item.href} className="relative group py-4">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-[#100d0d] hover:text-[#002329] transition-colors"
                  >
                    {item.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pt-2">
                    <div className="bg-white border border-[#e6e4e2] rounded-lg shadow-lg overflow-hidden py-1">
                      {dropdownItems.map((subItem: any) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-[#514f4f] hover:bg-[#f0eeec] hover:text-[#002329] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#100d0d] hover:text-[#002329] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href={navigation.cta.href}
          className="hidden lg:inline-flex bg-[var(--color-cta)] text-white rounded px-6 py-2.5 text-sm font-medium hover:bg-[#002329] transition-colors"
        >
          {navigation.cta.label}
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#100d0d]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#e6e4e2] bg-white max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navigation.main_nav.map((item) => {
              const hasDropdown = item.dropdown && (navigation as any)[item.dropdown];

              if (hasDropdown) {
                const dropdownItems = (navigation as any)[item.dropdown];
                return (
                  <div key={item.href} className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-semibold text-[#100d0d]"
                    >
                      {item.label}
                    </Link>
                    <div className="flex flex-col gap-3 pl-4 border-l border-[#e6e4e2]">
                      {dropdownItems.map((subItem: any) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-base font-medium text-[#514f4f] hover:text-[#002329] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[#100d0d] hover:text-[#002329] transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={navigation.cta.href}
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center bg-[var(--color-cta)] text-white rounded px-6 py-3 text-sm font-medium hover:bg-[#002329] transition-colors"
            >
              {navigation.cta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
