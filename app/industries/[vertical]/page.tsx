import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CardPackage from "@/components/aiquire/CardPackage";
import CTASection from "@/components/aiquire/CTASection";
import industries from "@/content/industries.json";
import packages from "@/content/packages.json";
import services from "@/content/services.json";

/* ── Per-industry extras not in industries.json ── */

const industryExtras: Record<
  string,
  { packageSlug: string; relatedServiceSlugs: string[] }
> = {
  "professional-services": {
    packageSlug: "ai-jumpstart",
    relatedServiceSlugs: ["ai-strategy", "ai-productivity", "operations-intelligence"],
  },
  "financial-services": {
    packageSlug: "ai-with-guardrails",
    relatedServiceSlugs: ["ai-strategy", "customer-revenue-ai", "operations-intelligence"],
  },
  "healthcare-medical": {
    packageSlug: "ai-jumpstart",
    relatedServiceSlugs: ["ai-strategy", "ai-productivity", "operations-intelligence"],
  },
  "e-commerce-retail": {
    packageSlug: "ai-customer-service-kit",
    relatedServiceSlugs: ["customer-revenue-ai", "ai-productivity", "operations-intelligence"],
  },
  "technology-saas": {
    packageSlug: "ai-quick-win",
    relatedServiceSlugs: ["custom-ai-development", "ai-productivity", "customer-revenue-ai"],
  },
  "real-estate": {
    packageSlug: "ai-sales-accelerator",
    relatedServiceSlugs: ["customer-revenue-ai", "ai-productivity", "ai-strategy"],
  },
  "agencies-marketing": {
    packageSlug: "ai-copilot-bundle",
    relatedServiceSlugs: ["ai-productivity", "operations-intelligence", "customer-revenue-ai"],
  },
};

/* ── Static params ── */

export function generateStaticParams() {
  return industries.map((ind) => ({ vertical: ind.slug }));
}

/* ── Metadata ── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>;
}): Promise<Metadata> {
  const { vertical } = await params;
  const industry = industries.find((ind) => ind.slug === vertical);
  if (!industry) return {};
  const url = `/industries/${vertical}`;
  return {
    title: `${industry.name} — AIQUIRE`,
    description: industry.tagline,
    alternates: { canonical: url },
    openGraph: {
      title: `${industry.name} — AIQUIRE`,
      description: industry.tagline,
      url,
    },
  };
}

/* ── Page ── */

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;
  const industry = industries.find((ind) => ind.slug === vertical);
  if (!industry) notFound();

  const extras = industryExtras[industry.slug];
  if (!extras) notFound();

  const recommendedPkg = packages.find((p) => p.slug === extras.packageSlug);

  const relatedServices = extras.relatedServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as (typeof services)[number][];

  const industryNumber =
    industries.findIndex((ind) => ind.slug === vertical) + 1;

  return (
    <>
      {/* 1. Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            <Eyebrow>
              Industry {industryNumber} of {industries.length}
            </Eyebrow>
            <h1 className="mt-6 font-serif font-bold text-4xl sm:text-5xl md:text-7xl text-[#0F0F0F] tracking-tight">
              {industry.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#3D3D3D] max-w-2xl">
              {industry.tagline}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex bg-[#0F0F0F] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#1B4D3E] transition-colors"
              >
                Talk to an AI Consultant
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 2. Use Cases */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>AI Use Cases</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Where AI creates value in {industry.name.toLowerCase()}
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {industry.use_cases.map((uc, i) => (
            <ScrollAnimation key={uc} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-6 flex items-start gap-4">
                <span className="shrink-0 font-serif font-bold text-3xl text-[#EBEBEB] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base text-[#3D3D3D] pt-1">{uc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. Starting Package */}
      {recommendedPkg && (
        <SectionWrapper>
          <ScrollAnimation>
            <Eyebrow>Recommended Starting Point</Eyebrow>
            <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
              {industry.starting_package}
            </h2>
          </ScrollAnimation>
          <div className="mt-12 max-w-xl">
            <ScrollAnimation>
              <CardPackage
                name={recommendedPkg.name}
                tier={recommendedPkg.tier}
                priceMin={recommendedPkg.price_min}
                priceMax={recommendedPkg.price_max}
                currency={recommendedPkg.currency}
                duration={recommendedPkg.duration}
                inclusions={recommendedPkg.inclusions}
                cta={recommendedPkg.cta}
              />
            </ScrollAnimation>
          </div>
          <ScrollAnimation>
            <div className="mt-8">
              <Link
                href="/packages"
                className="text-sm font-medium text-[#1B4D3E] hover:text-[#163D30] transition-colors"
              >
                See all packages &rarr;
              </Link>
            </div>
          </ScrollAnimation>
        </SectionWrapper>
      )}

      {/* 4. Compliance Notes */}
      {industry.compliance_notes && (
        <SectionWrapper alt>
          <ScrollAnimation>
            <Eyebrow>Key Considerations</Eyebrow>
            <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
              Compliance &amp; governance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3D3D3D] max-w-3xl">
              {industry.compliance_notes}
            </p>
            <blockquote className="mt-6 pl-6 border-l-4 border-[#1B4D3E]">
              <p className="font-serif font-bold text-lg text-[#0F0F0F] leading-snug max-w-2xl">
                Every AIQUIRE implementation is reviewed through a security lens
                by SentienzBay &mdash; data governance, access controls, and
                compliance requirements included as standard.
              </p>
            </blockquote>
          </ScrollAnimation>
        </SectionWrapper>
      )}

      {/* 5. Related Services */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Related Services</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            How we help {industry.name.toLowerCase()} organisations
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {relatedServices.map((svc, i) => (
            <ScrollAnimation key={svc.slug} delay={i * 0.1} className="h-full">
              <Link
                href={`/services/${svc.slug}`}
                className="block bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-6 h-full hover:border-[#1B4D3E] transition-colors"
              >
                <h3 className="font-serif font-bold text-lg text-[#0F0F0F]">
                  {svc.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3D3D3D]">
                  {svc.tagline} {svc.overview}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[#1B4D3E]">
                  Learn more &rarr;
                </span>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. CTA */}
      <ScrollAnimation>
        <CTASection
          headline="Don't Just Adopt AI. AIQUIRE It."
          ctaLabel="Talk to an AI Consultant"
        />
      </ScrollAnimation>
    </>
  );
}
