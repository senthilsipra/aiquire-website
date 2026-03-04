import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  className?: string;
}

export default function Testimonial({
  quote,
  author,
  title,
  className,
}: TestimonialProps) {
  return (
    <section className={cn("bg-[#f0eeec] py-16 md:py-24", className)}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <blockquote className="font-display font-bold text-2xl md:text-4xl text-[#100d0d] leading-snug">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-6">
          <p className="text-base font-medium text-[#100d0d]">{author}</p>
          <p className="text-sm text-[#7d7d7d]">{title}</p>
        </div>
      </div>
    </section>
  );
}
