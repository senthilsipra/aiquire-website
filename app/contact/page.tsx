import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CTASection from "@/components/aiquire/CTASection";
import packages from "@/content/packages.json";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";

const accordionItems = [
  {
    id: 1,
    title: "Industries",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI Academy",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Claude Training",
    imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "About AIQUIRE",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "AI Innovation",
    imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop"
  }
];

export const metadata: Metadata = {
  title: "Get Started — AIQUIRE",
  description:
    "Talk to an AI Consultant. Not a chatbot. Not a sales rep reading from a script. A consultant who will listen to your business challenge and recommend the right starting point.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Get Started — AIQUIRE",
    description:
      "Talk to an AI Consultant. A consultant who will listen to your business challenge and recommend the right starting point.",
    url: "/contact",
  },
};

function formatPrice(value: number): string {
  if (value >= 1000) {
    return `$${Math.round(value / 1000)}K`;
  }
  return `$${value}`;
}

const packageDescriptions: Record<string, string> = {
  "ai-starter-sprint": "Paid discovery",
  "ai-jumpstart": "Strategy & roadmap",
  "ai-quick-win": "One implementation",
  "ai-copilot-bundle": "Productivity AI",
  "ai-customer-service-kit": "Support AI",
  "ai-sales-accelerator": "Revenue AI",
  "ai-transformation-starter": "Full transformation",
  "ai-with-guardrails": "Secure AI",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens when you reach out to AIQUIRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We respond within one business day. Every initial conversation is with an experienced AI consultant — not a business development function. The goal of that first conversation is to understand your business, not to sell you a package.",
      },
    },
    {
      "@type": "Question",
      name: "What is the AI Starter Sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A $4K–$6K, one-week paid discovery sprint. No commitment beyond it. You'll walk away with a concrete AI action plan regardless of what you decide next.",
      },
    },
    {
      "@type": "Question",
      name: "How much do AIQUIRE packages cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AIQUIRE packages range from $4K for an AI Starter Sprint to $60K for an AI Transformation Starter. Every package is fixed-scope with defined deliverables.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* 1. Hero */}
      <section className="bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side: Text Content */}
            <ScrollAnimation>
              <div>
                <Eyebrow>Get Started</Eyebrow>
                <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-7xl text-[#100d0d] tracking-tight">
                  Talk to an AI Consultant.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#514f4f] max-w-2xl">
                  Not a chatbot. Not a sales rep reading from a script. A consultant
                  who will listen to your business challenge, tell you honestly where
                  AI can help, and recommend the right starting point &mdash; even if
                  it&rsquo;s smaller than you expected.
                </p>
                <div className="mt-6 max-w-2xl space-y-4">
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-[#100d0d]">
                    What Happens When You Reach Out
                  </h2>
                  <p className="text-base leading-relaxed text-[#514f4f]">
                    We respond within one business day. Every initial conversation is
                    with an experienced AI consultant &mdash; not a business
                    development function. The goal of that first conversation is to
                    understand your business, not to sell you a package.
                  </p>
                  <p className="text-base leading-relaxed text-[#514f4f]">
                    If there&rsquo;s a fit, we&rsquo;ll recommend the right starting
                    point. If there isn&rsquo;t, we&rsquo;ll tell you that too.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Side: Illustration / Image Accordion */}
            <ScrollAnimation delay={0.1}>
              <div className="relative flex justify-center lg:justify-end h-full min-h-[400px]">
                <InteractiveImageAccordion items={accordionItems} />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 2. Three Engagement Paths */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#100d0d] mb-12">
            Choose your entry point.
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollAnimation className="h-full">
            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8 flex flex-col h-full">
              <h3 className="font-display font-bold text-2xl text-[#100d0d]">
                Book a 30-Minute Discovery Call
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#514f4f] flex-1">
                Tell us about your business, your current AI situation, and what
                you&rsquo;re trying to achieve. We&rsquo;ll tell you what
                we&rsquo;d recommend and why.
              </p>
              <Link
                href="#contact-form"
                className="mt-6 inline-flex justify-center bg-[var(--color-cta)] text-white rounded px-6 py-2.5 text-sm font-medium hover:bg-[#002329] transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1} className="h-full">
            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8 flex flex-col h-full">
              <h3 className="font-display font-bold text-2xl text-[#100d0d]">
                Request a Proposal
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#514f4f] flex-1">
                Know what you want? Tell us your requirements and we&rsquo;ll
                prepare a scoped proposal with clear deliverables, timeline, and
                investment.
              </p>
              <Link
                href="#contact-form"
                className="mt-6 inline-flex justify-center bg-[var(--color-cta)] text-white rounded px-6 py-2.5 text-sm font-medium hover:bg-[#002329] transition-colors"
              >
                Request a Proposal
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} className="h-full">
            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8 flex flex-col h-full">
              <h3 className="font-display font-bold text-2xl text-[#100d0d]">
                AI Starter Sprint
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#514f4f] flex-1">
                Not sure if you&rsquo;re ready? Start with a $4K&ndash;$6K,
                one-week paid discovery sprint. No commitment beyond it.
                You&rsquo;ll walk away with a concrete AI action plan regardless
                of what you decide next.
              </p>
              <Link
                href="#contact-form"
                className="mt-6 inline-flex justify-center bg-[var(--color-cta)] text-white rounded px-6 py-2.5 text-sm font-medium hover:bg-[#002329] transition-colors"
              >
                Start a Sprint
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </SectionWrapper>

      {/* 3. Pricing at a Glance */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Packages</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            Our Packages at a Glance
          </h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#7d7d7d]">
                    Package
                  </th>
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#7d7d7d]">
                    Investment
                  </th>
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#7d7d7d]">
                    Duration
                  </th>
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#7d7d7d] hidden sm:table-cell">
                    Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr
                    key={pkg.slug}
                    className="border-b border-[#e5e5e5] last:border-b-0"
                  >
                    <td className="py-4 pr-4">
                      <p className="font-medium text-[#100d0d]">{pkg.name}</p>
                    </td>
                    <td className="py-4 pr-4 text-sm text-[#514f4f] whitespace-nowrap">
                      {formatPrice(pkg.price_min)}&ndash;
                      {formatPrice(pkg.price_max)}
                    </td>
                    <td className="py-4 pr-4 text-sm text-[#514f4f] whitespace-nowrap">
                      {pkg.duration}
                    </td>
                    <td className="py-4 text-sm text-[#7d7d7d] hidden sm:table-cell">
                      {packageDescriptions[pkg.slug]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Link
              href="/packages"
              className="text-sm font-medium text-[#002329] hover:text-[#001a1f] transition-colors"
            >
              See full package details &rarr;
            </Link>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 4. Contact Form */}
      <SectionWrapper alt id="contact-form">
        <ScrollAnimation>
          <Eyebrow>Get in Touch</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            Start the Conversation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#514f4f] max-w-2xl">
            Tell us about your business, your current AI situation, and what
            you&rsquo;re trying to achieve. We&rsquo;ll respond within one
            business day.
          </p>
          <div className="mt-8 rounded-2xl bg-white border border-[#e5e5e5] shadow-sm overflow-hidden">
            {/* TODO: Replace src with Tally form URL
               from tally.so after creating form */}
            <iframe
              src="about:blank"
              width="100%"
              height="600"
              title="Contact Form"
              className="border-0"
            />
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 5. CTA */}
      <ScrollAnimation>
        <CTASection
          headline="Don't Just Adopt AI. AIQUIRE It."
          ctaLabel="Talk to an AI Consultant"
          ctaHref="#contact-form"
        />
      </ScrollAnimation>
    </>
  );
}

