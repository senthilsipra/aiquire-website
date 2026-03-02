import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQ({ items, className }: FAQProps) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="border-b border-[#EBEBEB] last:border-b-0"
        >
          <AccordionTrigger className="py-5 text-left text-base font-medium text-[#0F0F0F] hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-[#3D3D3D]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
