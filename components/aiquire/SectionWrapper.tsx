import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  alt = false,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        alt ? "bg-white" : "bg-transparent",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">{children}</div>
    </section>
  );
}
