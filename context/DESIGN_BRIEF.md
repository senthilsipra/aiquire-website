# AIQUIRE Design Brief

## Style reference
Visual and layout reference: https://claura.framer.ai/
Screenshot references in /context/claura-*.png

## Colour palette
Background (page base):     #FAF9F6   warm off-white
Surface (cards, panels):    #FFFFFF
Foreground (headings):      #0F0F0F   near-black
Body text:                  #3D3D3D
Muted text:                 #888888
Border:                     #EBEBEB
Primary accent:             #1B4D3E   deep forest green (dark teal)
Primary hover:              #163D30
Primary text on accent:     #FFFFFF
Accent light (tint bg):     #EBF2EF   soft green tint for callout blocks
Secondary surface:          #F2F0EB   warm grey for alternating sections
Stats / large numbers:      #0F0F0F   bold, large, left-aligned

DO NOT use:
- Bright or fluorescent green
- Pure white (#FFFFFF) as page background — use #FAF9F6
- Blue or purple anywhere
- Gradient backgrounds

## Typography
Headline font:  Playfair Display — font-bold, used for all h1 and h2
Body font:      Inter — used for all body text, labels, nav, buttons
Load both via next/font/google

Hero headline:      Playfair Display, font-bold, text-6xl md:text-8xl,
                    tracking-tight, text-[#0F0F0F]
Section headline:   Playfair Display, font-bold, text-4xl md:text-5xl
Subheading:         Inter, font-semibold, text-xl text-[#3D3D3D]
Body:               Inter, font-normal, text-base leading-relaxed text-[#3D3D3D]
Eyebrow label:      Inter, font-medium, uppercase, tracking-widest,
                    text-xs, text-[#1B4D3E]
Stat number:        Playfair Display or Inter, font-bold, text-5xl md:text-7xl
Nav links:          Inter, font-medium, text-sm text-[#0F0F0F]

## Layout
Max content width:    max-w-6xl mx-auto px-6 md:px-10
Section padding:      py-24 desktop / py-16 mobile
Grid gap:             gap-8 or gap-12 — generous, never tight
Text alignment:       Left-aligned throughout — never center-align body text
                      Hero subtext is the only exception (centered on mobile only)

## Sections and patterns
Page background:      bg-[#FAF9F6] — warm off-white, applied to html/body
Hero section:         Light bg (#FAF9F6), NOT dark. Large serif headline,
                      one-line sub, pill CTA button, social proof tag above headline
                      ("Helped 100+ businesses" style tag)
Alternating sections: Alternate between #FAF9F6 and #F2F0EB — no dark sections
Stats section:        Large bold numbers (Playfair Display), left-aligned,
                      inline with short label below each stat
Process steps:        Numbered 01 02 03 04, step title in serif,
                      description in body text, image beside each step
Comparison block:     Two-column — "Others" vs "AIQUIRE" checklist cards
Testimonial:          Large serif pull quote, author name + title below,
                      full-width or 2/3 width layout
FAQ section:          Accordion style, clean, no borders on items
CTA section:          Warm bg (#F2F0EB), large serif headline, pill button,
                      optional inline form with checkbox options

## Components
Card:                 bg-white rounded-2xl shadow-sm border border-[#EBEBEB] p-8
Featured card:        bg-[#1B4D3E] text-white rounded-2xl p-8
                      (inverted — dark card for emphasis)
Primary button:       bg-[#0F0F0F] text-white rounded-full px-6 py-3
                      font-medium hover:bg-[#1B4D3E] transition-colors
                      (Claura uses dark pill buttons, not coloured ones)
Ghost button:         border border-[#0F0F0F] text-[#0F0F0F] rounded-full
                      px-6 py-3 hover:bg-[#0F0F0F] hover:text-white
Eyebrow tag:          Small rounded-full pill — bg-[#EBF2EF] text-[#1B4D3E]
                      text-xs font-medium px-3 py-1 — sits above headlines
Icons:                Lucide, stroke style, size 20–24, color #3D3D3D
                      On dark cards: color white
Accordion (FAQ):      No border, bottom divider only, chevron icon right-aligned
Number badge:         text-[#EBEBEB] font-bold text-8xl — large faded
                      background number for process steps (Claura style)

## Rounded corners
Cards:      rounded-2xl
Buttons:    rounded-full
Images:     rounded-2xl or rounded-3xl
Tags/pills: rounded-full

## Animation (subtle — Claura style)
Use framer-motion for:
- Sections fade up on scroll (opacity 0→1, y 20→0, duration 0.5s)
- Stats count up on scroll into view
- No aggressive animations — everything is subtle and editorial

## Do NOT
- Use dark hero sections
- Use gradients anywhere
- Use blue or purple
- Use bright/fluorescent green
- Use square corners on cards or buttons
- Use centered body text
- Load any font other than Playfair Display + Inter
- Invent or rewrite any copy from content files