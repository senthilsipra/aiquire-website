import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IndustryCardProps {
  name: string;
  slug: string;
  tagline: string;
  useCases: string[];
  startingPackage: string;
  icon?: ReactNode;
  className?: string;
}

export default function IndustryCard({
  name,
  slug,
  tagline,
  useCases,
  startingPackage,
  icon,
  className,
}: IndustryCardProps) {
  const preview = useCases.slice(0, 3);

  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-[#e6e4e2] shadow-sm p-8 flex flex-col",
        className
      )}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="font-display font-bold text-xl text-[#100d0d]">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#514f4f] line-clamp-3">
        {tagline}
      </p>

      <ul className="mt-4 space-y-1.5 flex-1">
        {preview.map((uc) => (
          <li key={uc} className="flex items-start gap-2 text-sm text-[#514f4f]">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#002329]" />
            {uc}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-[#7d7d7d]">
        Starting package: {startingPackage}
      </p>

      <Link
        href={`/industries/${slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#002329] hover:text-[#001a1f] transition-colors"
      >
        Learn more
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
