import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[#100d0d] text-white text-xs font-medium px-3 py-1 rounded uppercase tracking-widest",
        className
      )}
    >
      {children}
    </span>
  );
}
