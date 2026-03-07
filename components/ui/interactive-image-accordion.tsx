"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
    id: number;
    title: string;
    imageUrl: string;
}

const accordionItems: AccordionItem[] = [
    {
        id: 1,
        title: "AI Strategy & Discovery",
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "AI Productivity & Copilots",
        imageUrl: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Customer & Revenue AI",
        imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Operations & Intelligence",
        imageUrl: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Custom AI Development",
        imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop"
    },
];

export function InteractiveImageAccordion({ items = accordionItems }: { items?: AccordionItem[] }) {
    const [activeItem, setActiveItem] = useState<number>(3); // Set default active item

    return (
        <div className="flex w-full h-[400px] md:h-[500px] gap-2 md:gap-4 overflow-hidden rounded-3xl group">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={cn(
                        "relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out",
                        activeItem === item.id
                            ? "w-[50%] md:w-[60%] flex-grow"
                            : "w-[15%] md:w-[10%] flex-grow-0 hover:w-[20%]"
                    )}
                    onClick={() => setActiveItem(item.id)}
                    onMouseEnter={() => setActiveItem(item.id)}
                >
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div
                        className={cn(
                            "absolute bottom-0 left-0 p-4 w-full flex items-end transition-opacity duration-500",
                            activeItem === item.id ? "opacity-100" : "opacity-0 md:opacity-100"
                        )}
                    >
                        <div className={cn(
                            "transform transition-all duration-500 delay-100 origin-bottom-left whitespace-nowrap overflow-hidden text-white font-display font-bold",
                            activeItem === item.id ? "translate-y-0 opacity-100 text-xl md:text-2xl" : "translate-y-4 opacity-0 md:opacity-100 md:rotate-[-90deg] md:translate-y-0 md:translate-x-full md:origin-top-left md:bottom-auto md:w-[200px] md:p-4 text-sm tracking-widest uppercase"
                        )}>
                            {item.title}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
