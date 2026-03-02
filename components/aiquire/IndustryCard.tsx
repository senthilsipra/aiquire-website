import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  name: string;
  slug: string;
  tagline: string;
  useCases: string[];
  startingPackage: string;
  className?: string;
}

export default function IndustryCard({
  name,
  slug,
  tagline,
  useCases,
  startingPackage,
  className,
}: IndustryCardProps) {
  const preview = useCases.slice(0, 3);

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 flex flex-col",
        className
      )}
    >
      <h3 className="font-serif font-bold text-xl text-[#0F0F0F]">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#3D3D3D] line-clamp-3">
        {tagline}
      </p>

      <ul className="mt-4 space-y-1.5 flex-1">
        {preview.map((uc) => (
          <li key={uc} className="flex items-start gap-2 text-sm text-[#3D3D3D]">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B4D3E]" />
            {uc}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-[#888888]">
        Starting package: {startingPackage}
      </p>

      <Link
        href={`/industries/${slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#1B4D3E] hover:text-[#163D30] transition-colors"
      >
        Learn more
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
