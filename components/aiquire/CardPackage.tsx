import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardPackageProps {
  name: string;
  tier: string;
  duration: string;
  inclusions: string[];
  cta: string;
  ctaHref?: string;
  featured?: boolean;
  className?: string;
}

export default function CardPackage({
  name,
  tier,
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
      <div className={cn("bg-[#002329] text-white rounded-lg p-8", className)}>
        <span className="inline-block bg-white/15 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest">
          {tier}
        </span>
        <h3 className="mt-4 font-display font-bold text-2xl">{name}</h3>
        <p className="mt-2 text-sm text-white/60">{duration}</p>
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
          className="mt-6 inline-flex bg-white text-[#002329] rounded-full px-6 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          {cta}
        </Link>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-[#e6e4e2] shadow-sm p-8 flex flex-col",
        className
      )}
    >
      <span className="inline-block bg-[#fff8e8] text-[#002329] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest self-start">
        {tier}
      </span>
      <h3 className="mt-4 font-display font-bold text-2xl text-[#100d0d]">
        {name}
      </h3>
      <p className="mt-2 text-sm text-[#7d7d7d]">{duration}</p>
      <ul className="mt-5 space-y-2 flex-1">
        {top3.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#514f4f]">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#002329]" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex justify-center bg-[var(--color-cta)] text-white rounded px-6 py-2.5 text-sm font-medium hover:bg-[#002329] transition-colors"
      >
        {cta}
      </Link>
    </div>
  );
}
