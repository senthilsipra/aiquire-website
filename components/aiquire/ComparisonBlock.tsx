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
      <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8">
        <h3 className="font-serif font-bold text-xl text-[#0F0F0F] mb-6">
          Others
        </h3>
        <ul className="space-y-4">
          {othersItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#3D3D3D]">
              <X size={18} className="shrink-0 mt-0.5 text-red-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* AIQUIRE */}
      <div className="bg-[#1B4D3E] text-white rounded-2xl p-8">
        <h3 className="font-serif font-bold text-xl mb-6">AIQUIRE</h3>
        <ul className="space-y-4">
          {aiquireItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-white/90">
              <Check size={18} className="shrink-0 mt-0.5 text-green-300" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
