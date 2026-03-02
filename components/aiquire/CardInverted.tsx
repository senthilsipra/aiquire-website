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
    <div className={cn("bg-[#1B4D3E] text-white rounded-2xl p-8", className)}>
      {eyebrow && (
        <span className="inline-block bg-white/15 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          {eyebrow}
        </span>
      )}
      <h3 className="font-serif font-bold text-2xl md:text-3xl">{title}</h3>
      {description && (
        <p className="mt-3 text-white/80 text-base leading-relaxed">
          {description}
        </p>
      )}
      {list && list.length > 0 && (
        <ul className="mt-4 space-y-2">
          {list.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/80">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-white/60" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="mt-6 inline-flex bg-white text-[#1B4D3E] rounded-full px-6 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}
