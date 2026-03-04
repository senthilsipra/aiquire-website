import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardServiceProps {
  code: string;
  name: string;
  duration: string;
  deliverables?: string[] | null;
  tools?: string[] | null;
  pricingTier?: string | null;
  icon?: ReactNode;
  className?: string;
}

export default function CardService({
  code,
  name,
  duration,
  deliverables,
  tools,
  pricingTier,
  icon,
  className,
}: CardServiceProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-[#e6e4e2] shadow-sm p-8",
        className
      )}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <span className="inline-block bg-[#fff8e8] text-[#002329] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest">
        {code}
      </span>
      <h3 className="mt-4 font-display font-bold text-xl text-[#100d0d]">
        {name}
      </h3>
      <p className="mt-2 text-sm text-[#7d7d7d]">{duration}</p>

      {deliverables && deliverables.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-widest text-[#7d7d7d] mb-2">
            Deliverables
          </p>
          <ul className="space-y-1.5">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#514f4f]">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#002329]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tools && tools.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-widest text-[#7d7d7d] mb-2">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-[#f0eeec] text-[#514f4f] px-2.5 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {pricingTier && (
        <p className="mt-4 text-sm text-[#7d7d7d]">
          Best for: {pricingTier}
        </p>
      )}
    </div>
  );
}
