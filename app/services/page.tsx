import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CTASection from "@/components/aiquire/CTASection";
import IconStrategy from "@/components/aiquire/illustrations/IconStrategy";
import IconProductivity from "@/components/aiquire/illustrations/IconProductivity";
import IconCustomerRevenue from "@/components/aiquire/illustrations/IconCustomerRevenue";
import IconOperations from "@/components/aiquire/illustrations/IconOperations";
import IconCustomDev from "@/components/aiquire/illustrations/IconCustomDev";
import services from "@/content/services.json";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";

const serviceIcons: Record<string, React.ReactNode> = {
  "ai-strategy": <IconStrategy />,
  "ai-productivity": <IconProductivity />,
  "customer-revenue-ai": <IconCustomerRevenue />,
  "operations-intelligence": <IconOperations />,
  "custom-ai-development": <IconCustomDev />,
};

export const metadata: Metadata = {
  title: "Services — AIQUIRE",
  description:
    "Five integrated service practices covering the full AI adoption journey — from strategy through to custom AI development.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — AIQUIRE",
    description:
      "Five integrated service practices covering the full AI adoption journey.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side: Text Content */}
            <ScrollAnimation>
              <div>
                <Eyebrow>Services</Eyebrow>
                <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-7xl text-[#0d0d0d] tracking-tight">
                  Five Practices.
                  <br />
                  One AI Journey.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#404040] max-w-2xl">
                  AIQUIRE&rsquo;s five service practices cover the full AI adoption
                  journey &mdash; from initial strategy through to custom AI
                  development. Each practice is anchored in Design Thinking and
                  delivered with SentienzBay security review as standard.
                </p>
              </div>
            </ScrollAnimation>

            {/* Right Side: Illustration / Image Accordion */}
            <ScrollAnimation delay={0.1}>
              <div className="relative flex justify-center lg:justify-end h-full min-h-[400px]">
                <InteractiveImageAccordion />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Practice Cards */}
      <SectionWrapper alt>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((practice, i) => (
            <ScrollAnimation
              key={practice.slug}
              delay={i * 0.05}
              className="h-full"
            >
              <Link
                href={`/services/${practice.slug}`}
                className="block bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8 h-full hover:border-[#002329] transition-colors"
              >
                {serviceIcons[practice.slug] && (
                  <div className="mb-4">{serviceIcons[practice.slug]}</div>
                )}
                <h2 className="mt-3 font-display font-bold text-xl text-[#0d0d0d]">
                  {practice.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#404040]">
                  {practice.tagline} {practice.overview}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[#002329]">
                  Learn more &rarr;
                </span>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <ScrollAnimation>
        <CTASection
          headline="Don't Just Adopt AI. AIQUIRE It."
          ctaLabel="Talk to an AI Consultant"
        />
      </ScrollAnimation>
    </>
  );
}

