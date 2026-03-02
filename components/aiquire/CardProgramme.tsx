"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProgrammeProps {
  code: string;
  track: string;
  name: string;
  format: string;
  duration: string;
  audience: string;
  whatYouLearn: string[];
  deliverables: string[];
  className?: string;
}

export default function CardProgramme({
  code,
  track,
  name,
  format,
  duration,
  audience,
  whatYouLearn,
  deliverables,
  className,
}: CardProgrammeProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8",
        className
      )}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-block bg-[#EBF2EF] text-[#1B4D3E] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest">
          {code}
        </span>
        <span className="inline-block bg-[#F2F0EB] text-[#3D3D3D] text-xs font-medium px-3 py-1 rounded-full capitalize">
          {track} Track
        </span>
      </div>

      <h3 className="font-serif font-bold text-xl text-[#0F0F0F]">{name}</h3>

      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#888888]">
        <span>{format}</span>
        <span>{duration}</span>
      </div>
      <p className="mt-1 text-sm text-[#3D3D3D]">{audience}</p>

      {/* Expandable what you learn */}
      {whatYouLearn.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-medium text-[#1B4D3E] hover:text-[#163D30] transition-colors"
          >
            What you&apos;ll learn
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-200",
                expanded && "rotate-180"
              )}
            />
          </button>
          {expanded && (
            <ul className="mt-3 space-y-1.5">
              {whatYouLearn.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#3D3D3D]">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B4D3E]" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Deliverables */}
      {deliverables.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-widest text-[#888888] mb-2">
            Deliverables
          </p>
          <ul className="space-y-1.5">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#3D3D3D]">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B4D3E]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
