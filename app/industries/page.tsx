import type { Metadata } from "next";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import IndustryCard from "@/components/aiquire/IndustryCard";
import CTASection from "@/components/aiquire/CTASection";
import IconProfessionalServices from "@/components/aiquire/illustrations/IconProfessionalServices";
import IconFinancialServices from "@/components/aiquire/illustrations/IconFinancialServices";
import IconHealthcare from "@/components/aiquire/illustrations/IconHealthcare";
import IconRetail from "@/components/aiquire/illustrations/IconRetail";
import IconCustomDev from "@/components/aiquire/illustrations/IconCustomDev";
import IconManufacturing from "@/components/aiquire/illustrations/IconManufacturing";
import IconGovernment from "@/components/aiquire/illustrations/IconGovernment";
import industries from "@/content/industries.json";
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

const industryIcons: Record<string, React.ReactNode> = {
  "professional-services": <IconProfessionalServices />,
  "financial-services": <IconFinancialServices />,
  "healthcare-medical": <IconHealthcare />,
  "e-commerce-retail": <IconRetail />,
  "technology-saas": <IconCustomDev />,
  "real-estate": <IconManufacturing />,
  "agencies-marketing": <IconGovernment />,
};

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
      <section className="bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side: Text Content */}
            <ScrollAnimation>
              <div>
                <Eyebrow>Industries</Eyebrow>
                <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-7xl text-[#0d0d0d] tracking-tight">
                  We Know Your Industry.
                  <br />
                  We Know AI.
                  <br />
                  The Combination is Powerful.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#404040] max-w-2xl">
                  Generic AI implementation fails because it ignores industry
                  context. AIQUIRE brings pre-built playbooks, sector-specific use
                  case libraries, and consultants who understand your regulatory
                  environment, your customer expectations, and your competitive
                  landscape.
                </p>
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

      {/* Industry Cards */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Sector Playbooks</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
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
                icon={industryIcons[ind.slug]}
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
