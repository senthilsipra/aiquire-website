import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatBlock({ value, label, className }: StatBlockProps) {
  return (
    <div className={cn("text-left", className)}>
      <p className="font-display font-bold text-5xl md:text-7xl text-[#100d0d] leading-none">
        {value}
      </p>
      <p className="mt-2 text-base text-[#514f4f]">{label}</p>
    </div>
  );
}
