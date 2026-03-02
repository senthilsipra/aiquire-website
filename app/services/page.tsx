import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CTASection from "@/components/aiquire/CTASection";
import services from "@/content/services.json";

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
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 font-serif font-bold text-4xl sm:text-5xl md:text-7xl text-[#0F0F0F] tracking-tight">
              Five Practices.
              <br />
              One AI Journey.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#3D3D3D] max-w-2xl">
              AIQUIRE&rsquo;s five service practices cover the full AI adoption
              journey &mdash; from initial strategy through to custom AI
              development. Each practice is anchored in Design Thinking and
              delivered with SentienzBay security review as standard.
            </p>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

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
                className="block bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 h-full hover:border-[#1B4D3E] transition-colors"
              >
                <span className="text-[#EBEBEB] font-bold text-4xl leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-serif font-bold text-xl text-[#0F0F0F]">
                  {practice.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#3D3D3D]">
                  {practice.tagline} {practice.overview}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[#1B4D3E]">
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
