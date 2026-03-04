import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  illustration?: ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function ProcessStep({
  number,
  title,
  description,
  image,
  imageAlt,
  illustration,
  reverse = false,
  className,
}: ProcessStepProps) {
  return (
    <div
      className={cn(
        "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
        reverse && "md:[&>*:first-child]:order-2",
        className
      )}
    >
      {/* Text */}
      <div className="relative">
        <span className="absolute -top-6 -left-2 text-[#e6e4e2] font-bold text-8xl leading-none select-none pointer-events-none">
          {number}
        </span>
        <div className="relative">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-[#100d0d]">
            {title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-[#514f4f]">
            {description}
          </p>
        </div>
      </div>

      {/* Optional illustration or image */}
      {illustration ? (
        <div className="rounded-lg overflow-hidden bg-[#f0eeec] p-8">
          {illustration}
        </div>
      ) : image ? (
        <div className="rounded-lg overflow-hidden bg-[#f0eeec]">
          <Image
            src={image}
            alt={imageAlt || title}
            width={560}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      ) : null}
    </div>
  );
}
