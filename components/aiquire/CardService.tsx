import { cn } from "@/lib/utils";

interface CardServiceProps {
  code: string;
  name: string;
  duration: string;
  deliverables?: string[] | null;
  tools?: string[] | null;
  pricingTier?: string | null;
  className?: string;
}

export default function CardService({
  code,
  name,
  duration,
  deliverables,
  tools,
  pricingTier,
  className,
}: CardServiceProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8",
        className
      )}
    >
      <span className="inline-block bg-[#EBF2EF] text-[#1B4D3E] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest">
        {code}
      </span>
      <h3 className="mt-4 font-serif font-bold text-xl text-[#0F0F0F]">
        {name}
      </h3>
      <p className="mt-2 text-sm text-[#888888]">{duration}</p>

      {deliverables && deliverables.length > 0 && (
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

      {tools && tools.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-widest text-[#888888] mb-2">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-[#F2F0EB] text-[#3D3D3D] px-2.5 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {pricingTier && (
        <p className="mt-4 text-sm text-[#888888]">
          Best for: {pricingTier}
        </p>
      )}
    </div>
  );
}
