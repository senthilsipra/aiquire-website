# AIQUIRE Design Brief

## Style reference
Visual and layout reference: https://renewed-mindset-656459.framer.app/
Modern, tech-forward aesthetic — geometric sans-serif headings, cool whites,
dark teal sections, and bright green accents.

## Colour palette
Background (page base):     #ffffff   clean white
Alt section bg:             #f5f5f5   light neutral grey (alternating sections)
Surface (cards, panels):    #FFFFFF
Foreground (headings):      #0d0d0d   near-black
Body text:                  #404040
Muted text:                 #737373
Border:                     #e5e5e5
Primary accent:             #002329   dark teal
Primary hover:              #001a1f
Primary text on accent:     #FFFFFF
Accent light (tint bg):     #e6faf0   soft green tint for eyebrow pills, badges
CTA button bg:              #5cf28e   bright green
CTA button text:            #0d0d0d   dark text on green
CTA button hover:           #002329   dark teal on hover, text-white
Stats / large numbers:      #0d0d0d   bold, large, left-aligned

DO NOT use:
- Warm off-whites (#FAF9F6)
- Old forest green (#1B4D3E)
- Blue or purple anywhere
- Gradient backgrounds

## Typography
Headline font:  DM Sans — font-bold, used for all h1, h2, h3, card titles,
                stat numbers, blockquotes (class: font-display)
Body font:      Inter — used for all body text, labels, nav, buttons
Load both via next/font/google

Hero headline:      DM Sans, font-bold, text-4xl sm:text-5xl md:text-7xl,
                    tracking-tight, text-[#0d0d0d]
Section headline:   DM Sans, font-bold, text-3xl md:text-5xl
Subheading:         Inter, font-semibold, text-xl text-[#404040]
Body:               Inter, font-normal, text-base leading-relaxed text-[#404040]
Eyebrow label:      Inter, font-medium, uppercase, tracking-widest,
                    text-xs, text-[#002329]
Stat number:        DM Sans, font-bold, text-5xl md:text-7xl
Nav links:          Inter, font-medium, text-sm text-[#0d0d0d]

## Layout
Max content width:    max-w-6xl mx-auto px-6 md:px-10
Section padding:      py-24 desktop / py-16 mobile
Grid gap:             gap-8 or gap-12 — generous, never tight
Text alignment:       Left-aligned throughout — never center-align body text

## Sections and patterns
Page background:      bg-white — clean white, applied to html/body
Hero section:         Light bg (white), large sans-serif headline,
                      one-line sub, green pill CTA button
Alternating sections: Alternate between white and #f5f5f5
Dark sections:        bg-[#002329] text-white — allowed for stats, featured content
Stats section:        bg-[#002329] text-white — large bold numbers (DM Sans)
Process steps:        Numbered 01 02 03 04, step title in DM Sans,
                      description in body text
Comparison block:     Two-column — "Others" vs "AIQUIRE" checklist cards
Testimonial:          Large DM Sans pull quote, author name + title below
FAQ section:          Accordion style, clean, no borders on items
CTA section:          bg-[#f5f5f5], large DM Sans headline, green pill button

## Components
Card:                 bg-white rounded-2xl shadow-sm border border-[#e5e5e5] p-8
Featured card:        bg-[#002329] text-white rounded-2xl p-8
                      (inverted — dark card for emphasis)
Primary button:       bg-[#5cf28e] text-[#0d0d0d] rounded-full px-6 py-3
                      font-medium hover:bg-[#002329] hover:text-white transition-colors
Ghost button:         border border-[#002329] text-[#0d0d0d] rounded-full
                      px-6 py-3 hover:bg-[#002329] hover:text-white
Eyebrow tag:          Small rounded-full pill — bg-[#e6faf0] text-[#002329]
                      text-xs font-medium px-3 py-1 — sits above headlines
Icons:                Lucide, stroke style, size 20–24, color #404040
                      On dark cards: color white
Accordion (FAQ):      No border, bottom divider only, chevron icon right-aligned
Number badge:         text-[#e5e5e5] font-bold text-8xl — large faded
                      background number for process steps

## Rounded corners
Cards:      rounded-2xl
Buttons:    rounded-full
Images:     rounded-2xl or rounded-3xl
Tags/pills: rounded-full

## Animation (subtle)
Use framer-motion for:
- Sections fade up on scroll (opacity 0→1, y 20→0, duration 0.5s)
- Stats count up on scroll into view
- No aggressive animations — everything is subtle and modern

## Do NOT
- Use warm off-whites (#FAF9F6, #F2F0EB)
- Use old green (#1B4D3E)
- Use gradients anywhere
- Use blue or purple
- Use square corners on cards or buttons
- Use centered body text
- Load any font other than DM Sans + Inter
- Invent or rewrite any copy from content files
