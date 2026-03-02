import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  className?: string;
}

export default function ProcessStep({
  number,
  title,
  description,
  image,
  imageAlt,
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
        <span className="absolute -top-6 -left-2 text-[#EBEBEB] font-bold text-8xl leading-none select-none pointer-events-none">
          {number}
        </span>
        <div className="relative">
          <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#0F0F0F]">
            {title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-[#3D3D3D]">
            {description}
          </p>
        </div>
      </div>

      {/* Optional image */}
      {image && (
        <div className="rounded-2xl overflow-hidden bg-[#F2F0EB]">
          <Image
            src={image}
            alt={imageAlt || title}
            width={560}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </div>
  );
}
