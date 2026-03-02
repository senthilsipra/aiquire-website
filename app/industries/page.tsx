import type { Metadata } from "next";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import IndustryCard from "@/components/aiquire/IndustryCard";
import CTASection from "@/components/aiquire/CTASection";
import industries from "@/content/industries.json";

export const metadata: Metadata = {
  title: "Industries — AIQUIRE",
  description:
    "Generic AI implementation fails because it ignores industry context. AIQUIRE brings pre-built playbooks, sector-specific use case libraries, and consultants who understand your regulatory environment.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries — AIQUIRE",
    description:
      "AI playbooks for 7 industries: Professional Services, Financial Services, Healthcare, E-Commerce, Technology, Real Estate, and Agencies.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            <Eyebrow>Industries</Eyebrow>
            <h1 className="mt-6 font-serif font-bold text-4xl sm:text-5xl md:text-7xl text-[#0F0F0F] tracking-tight">
              We Know Your Industry.
              <br />
              We Know AI.
              <br />
              The Combination is Powerful.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#3D3D3D] max-w-2xl">
              Generic AI implementation fails because it ignores industry
              context. AIQUIRE brings pre-built playbooks, sector-specific use
              case libraries, and consultants who understand your regulatory
              environment, your customer expectations, and your competitive
              landscape.
            </p>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* Industry Cards */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Sector Playbooks</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            We speak your industry&rsquo;s language.
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <ScrollAnimation key={ind.slug} delay={i * 0.05} className="h-full">
              <IndustryCard
                name={ind.name}
                slug={ind.slug}
                tagline={ind.tagline}
                useCases={ind.use_cases}
                startingPackage={ind.starting_package}
                className="h-full"
              />
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
