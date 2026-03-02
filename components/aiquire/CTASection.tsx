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
    <section className={cn("bg-[#F2F0EB] py-16 md:py-24", className)}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
          {headline}
        </h2>
        {subtext && (
          <p className="mt-4 text-base leading-relaxed text-[#3D3D3D] max-w-2xl">
            {subtext}
          </p>
        )}
        <Link
          href={ctaHref}
          className="mt-8 inline-flex bg-[#0F0F0F] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#1B4D3E] transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
