import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardPackageProps {
  name: string;
  tier: string;
  priceMin: number;
  priceMax: number;
  currency: string;
  duration: string;
  inclusions: string[];
  cta: string;
  ctaHref?: string;
  featured?: boolean;
  className?: string;
}

function formatPrice(value: number): string {
  if (value >= 1000) {
    return `$${Math.round(value / 1000)}K`;
  }
  return `$${value}`;
}

export default function CardPackage({
  name,
  tier,
  priceMin,
  priceMax,
  currency,
  duration,
  inclusions,
  cta,
  ctaHref = "/contact",
  featured = false,
  className,
}: CardPackageProps) {
  const top3 = inclusions.slice(0, 3);

  if (featured) {
    return (
      <div className={cn("bg-[#1B4D3E] text-white rounded-2xl p-8", className)}>
        <span className="inline-block bg-white/15 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest">
          {tier}
        </span>
        <h3 className="mt-4 font-serif font-bold text-2xl">{name}</h3>
        <p className="mt-2 text-2xl font-bold">
          {formatPrice(priceMin)}&ndash;{formatPrice(priceMax)}{" "}
          <span className="text-sm font-normal text-white/60">{currency}</span>
        </p>
        <p className="mt-1 text-sm text-white/60">{duration}</p>
        <ul className="mt-5 space-y-2">
          {top3.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/80">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-white/60" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={ctaHref}
          className="mt-6 inline-flex bg-white text-[#1B4D3E] rounded-full px-6 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          {cta}
        </Link>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 flex flex-col",
        className
      )}
    >
      <span className="inline-block bg-[#EBF2EF] text-[#1B4D3E] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest self-start">
        {tier}
      </span>
      <h3 className="mt-4 font-serif font-bold text-2xl text-[#0F0F0F]">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-bold text-[#0F0F0F]">
        {formatPrice(priceMin)}&ndash;{formatPrice(priceMax)}{" "}
        <span className="text-sm font-normal text-[#888888]">{currency}</span>
      </p>
      <p className="mt-1 text-sm text-[#888888]">{duration}</p>
      <ul className="mt-5 space-y-2 flex-1">
        {top3.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#3D3D3D]">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B4D3E]" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex justify-center bg-[#0F0F0F] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#1B4D3E] transition-colors"
      >
        {cta}
      </Link>
    </div>
  );
}
