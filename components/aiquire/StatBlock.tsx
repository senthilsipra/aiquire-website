import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatBlock({ value, label, className }: StatBlockProps) {
  return (
    <div className={cn("text-left", className)}>
      <p className="font-serif font-bold text-5xl md:text-7xl text-[#0F0F0F] leading-none">
        {value}
      </p>
      <p className="mt-2 text-base text-[#3D3D3D]">{label}</p>
    </div>
  );
}
