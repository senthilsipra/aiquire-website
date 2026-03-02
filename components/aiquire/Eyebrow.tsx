import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[#EBF2EF] text-[#1B4D3E] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest",
        className
      )}
    >
      {children}
    </span>
  );
}
