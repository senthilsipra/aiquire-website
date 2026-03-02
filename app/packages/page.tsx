import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CardPackage from "@/components/aiquire/CardPackage";
import CardInverted from "@/components/aiquire/CardInverted";
import CTASection from "@/components/aiquire/CTASection";
import packages from "@/content/packages.json";

export const metadata: Metadata = {
  title: "Packages — AIQUIRE",
  description:
    "Clear Scope. Fixed Price. Real Outcomes. Every AIQUIRE package is a fixed-scope engagement with defined deliverables.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Packages — AIQUIRE",
    description:
      "Fixed-scope AI consulting packages from $4K to $60K. Strategy, implementation, training, and governance.",
    url: "/packages",
  },
};

function formatPrice(value: number): string {
  if (value >= 1000) {
    return `$${Math.round(value / 1000)}K`;
  }
  return `$${value}`;
}

export default function PackagesPage() {
  const entry = packages.filter((p) => p.tier === "entry");
  const implementation = packages.filter((p) => p.tier === "implementation");
  const transformationStarter = packages.find(
    (p) => p.slug === "ai-transformation-starter"
  )!;
  const guardrails = packages.find((p) => p.slug === "ai-with-guardrails")!;

  return (
    <>
      {/* 1. Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            <Eyebrow>Packages</Eyebrow>
            <h1 className="mt-6 font-serif font-bold text-4xl sm:text-5xl md:text-7xl text-[#0F0F0F] tracking-tight">
              Clear Scope. Fixed Price.
              <br />
              Real Outcomes.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#3D3D3D] max-w-2xl">
              Every AIQUIRE package is a fixed-scope engagement with defined
              deliverables. You know what you&rsquo;re getting, what it costs,
              and when it will be done. No retainers that run forever. No scope
              creep that inflates invoices.
            </p>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 2. Entry Tier */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Entry Packages</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Start here.
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {entry.map((pkg, i) => (
            <ScrollAnimation key={pkg.slug} delay={i * 0.1} className="h-full">
              <CardPackage
                name={pkg.name}
                tier={pkg.tier}
                priceMin={pkg.price_min}
                priceMax={pkg.price_max}
                currency={pkg.currency}
                duration={pkg.duration}
                inclusions={pkg.inclusions}
                cta={pkg.cta}
                className="h-full"
              />
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. Implementation Tier */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Implementation Packages</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Deploy with confidence.
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {implementation.map((pkg, i) => (
            <ScrollAnimation key={pkg.slug} delay={i * 0.1} className="h-full">
              <CardPackage
                name={pkg.name}
                tier={pkg.tier}
                priceMin={pkg.price_min}
                priceMax={pkg.price_max}
                currency={pkg.currency}
                duration={pkg.duration}
                inclusions={pkg.inclusions}
                cta={pkg.cta}
                className="h-full"
              />
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Transformation Tier */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Transformation Packages</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Transform at scale.
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <ScrollAnimation className="h-full">
            <CardInverted
              title={transformationStarter.name}
              eyebrow={transformationStarter.tier}
              description={transformationStarter.tagline}
              list={transformationStarter.inclusions}
              ctaLabel={transformationStarter.cta}
              ctaHref="/contact"
              className="h-full"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.1} className="h-full">
            <CardInverted
              title={guardrails.name}
              eyebrow={guardrails.tier}
              description={guardrails.tagline}
              list={[
                ...guardrails.inclusions,
                "Powered by SentienzBay security expertise",
              ]}
              ctaLabel={guardrails.cta}
              ctaHref="/contact"
              className="h-full"
            />
          </ScrollAnimation>
        </div>
      </SectionWrapper>

      {/* 5. Full Comparison Table */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Compare</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Our Packages at a Glance
          </h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mt-12 -mx-6 md:mx-0 overflow-x-auto">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="border-b border-[#EBEBEB]">
                  <th className="pb-4 pr-4 text-xs font-medium uppercase tracking-widest text-[#888888]">
                    Package
                  </th>
                  <th className="pb-4 pr-4 text-xs font-medium uppercase tracking-widest text-[#888888]">
                    Tier
                  </th>
                  <th className="pb-4 pr-4 text-xs font-medium uppercase tracking-widest text-[#888888]">
                    Investment
                  </th>
                  <th className="pb-4 pr-4 text-xs font-medium uppercase tracking-widest text-[#888888]">
                    Duration
                  </th>
                  <th className="pb-4 pr-4 text-xs font-medium uppercase tracking-widest text-[#888888]">
                    Key Inclusions
                  </th>
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#888888]">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr
                    key={pkg.slug}
                    className="border-b border-[#EBEBEB] last:border-b-0"
                  >
                    <td className="py-4 pr-4">
                      <p className="font-medium text-[#0F0F0F]">{pkg.name}</p>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="inline-block bg-[#EBF2EF] text-[#1B4D3E] text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
                        {pkg.tier}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-sm text-[#3D3D3D] whitespace-nowrap">
                      {formatPrice(pkg.price_min)}&ndash;
                      {formatPrice(pkg.price_max)}
                    </td>
                    <td className="py-4 pr-4 text-sm text-[#3D3D3D] whitespace-nowrap">
                      {pkg.duration}
                    </td>
                    <td className="py-4 pr-4">
                      <ul className="space-y-1">
                        {pkg.inclusions.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-1.5 text-sm text-[#3D3D3D]"
                          >
                            <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#1B4D3E]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4">
                      <Link
                        href="/contact"
                        className="text-sm font-medium text-[#1B4D3E] hover:text-[#163D30] transition-colors whitespace-nowrap"
                      >
                        Get started &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollAnimation>
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
