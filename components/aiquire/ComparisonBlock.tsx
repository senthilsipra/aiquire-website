import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonBlockProps {
  othersItems: string[];
  aiquireItems: string[];
  className?: string;
}

export default function ComparisonBlock({
  othersItems,
  aiquireItems,
  className,
}: ComparisonBlockProps) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-8", className)}>
      {/* Others */}
      <div className="bg-white rounded-lg border border-[#e6e4e2] shadow-sm p-8">
        <h3 className="font-display font-bold text-xl text-[#100d0d] mb-6">
          Others
        </h3>
        <ul className="space-y-4">
          {othersItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#514f4f]">
              <X size={18} className="shrink-0 mt-0.5 text-red-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* AIQUIRE */}
      <div className="bg-white rounded-lg border border-[#e6e4e2] shadow-sm p-8">
        <h3 className="font-display font-bold text-xl text-[#100d0d] mb-6">AIQUIRE</h3>
        <ul className="space-y-4">
          {aiquireItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#514f4f]">
              <Check size={18} className="shrink-0 mt-0.5 text-green-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

