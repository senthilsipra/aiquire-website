import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function CTASection({
  headline,
  subtext,
  ctaLabel = "Talk to an AI Consultant",
  ctaHref = "/contact",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-white py-16 md:py-24", className)}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
          {headline}
        </h2>
        {subtext && (
          <p className="mt-4 text-base leading-relaxed text-[#514f4f] max-w-2xl">
            {subtext}
          </p>
        )}
        <Link
          href={ctaHref}
          className="mt-8 inline-flex bg-[var(--color-cta)] text-white rounded px-8 py-3 text-sm font-medium hover:bg-[#002329] transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
