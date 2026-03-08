import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardInvertedProps {
  eyebrow?: string;
  title: string;
  description?: string;
  list?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function CardInverted({
  eyebrow,
  title,
  description,
  list,
  ctaLabel,
  ctaHref,
  className,
}: CardInvertedProps) {
  return (
    <div className={cn("bg-white text-[#100d0d] rounded-lg border border-[#e6e4e2] shadow-sm p-8", className)}>
      {eyebrow && (
        <span className="inline-block bg-[#fff8e8] text-[#002329] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          {eyebrow}
        </span>
      )}
      <h3 className="font-display font-bold text-2xl md:text-3xl">{title}</h3>
      {description && (
        <p className="mt-3 text-[#514f4f] text-base leading-relaxed">
          {description}
        </p>
      )}
      {list && list.length > 0 && (
        <ul className="mt-4 space-y-2">
          {list.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#514f4f]">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#002329]" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="mt-6 inline-flex h-11 items-center justify-center whitespace-nowrap rounded bg-[var(--color-cta)] px-6 text-sm font-medium text-white hover:bg-[#002329] transition-colors"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}


