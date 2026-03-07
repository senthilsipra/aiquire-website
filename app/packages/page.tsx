import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CardPackage from "@/components/aiquire/CardPackage";
import CardInverted from "@/components/aiquire/CardInverted";
import CTASection from "@/components/aiquire/CTASection";
import packages from "@/content/packages.json";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";

const accordionItems = [
  {
    id: 1,
    title: "Starter Package",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Growth Package",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Business Package",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Enterprise Package",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Custom AI Package",
    imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop"
  }
];

export const metadata: Metadata = {
  title: "Packages — AIQUIRE",
  description:
    "Clear Scope. Fixed Price. Real Outcomes. Every AIQUIRE package is a fixed-scope engagement with defined deliverables.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Packages — AIQUIRE",
    description:
      "Fixed-scope AI consulting packages. Strategy, implementation, training, and governance.",
    url: "/packages",
  },
};

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
      <section className="bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side: Text Content */}
            <ScrollAnimation>
              <div>
                <Eyebrow>Packages</Eyebrow>
                <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-7xl text-[#0d0d0d] tracking-tight">
                  Clear Scope. Fixed Price.
                  <br />
                  Real Outcomes.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#404040] max-w-2xl">
                  Every AIQUIRE package is a fixed-scope engagement with defined
                  deliverables. You know what you&rsquo;re getting, what it costs,
                  and when it will be done. No retainers that run forever. No scope
                  creep that inflates invoices.
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

      {/* 2. Entry Tier */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Entry Packages</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            Start here.
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {entry.map((pkg, i) => (
            <ScrollAnimation key={pkg.slug} delay={i * 0.1} className="h-full">
              <CardPackage
                name={pkg.name}
                tier={pkg.tier}
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
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            Deploy with confidence.
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {implementation.map((pkg, i) => (
            <ScrollAnimation key={pkg.slug} delay={i * 0.1} className="h-full">
              <CardPackage
                name={pkg.name}
                tier={pkg.tier}
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
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
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
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            Our Packages at a Glance
          </h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mt-12 -mx-6 md:mx-0 overflow-x-auto">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="pb-4 pr-4 text-xs font-medium uppercase tracking-widest text-[#737373]">
                    Package
                  </th>
                  <th className="pb-4 pr-4 text-xs font-medium uppercase tracking-widest text-[#737373]">
                    Tier
                  </th>
                  <th className="pb-4 pr-4 text-xs font-medium uppercase tracking-widest text-[#737373]">
                    Duration
                  </th>
                  <th className="pb-4 pr-4 text-xs font-medium uppercase tracking-widest text-[#737373]">
                    Key Inclusions
                  </th>
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#737373]">
                    &nbsp;
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
                      <p className="font-medium text-[#0d0d0d]">{pkg.name}</p>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="inline-block bg-[#e6faf0] text-[#002329] text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
                        {pkg.tier}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-sm text-[#404040] whitespace-nowrap">
                      {pkg.duration}
                    </td>
                    <td className="py-4 pr-4">
                      <ul className="space-y-1">
                        {pkg.inclusions.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-1.5 text-sm text-[#404040]"
                          >
                            <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#002329]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4">
                      <Link
                        href="/contact"
                        className="text-sm font-medium text-[#002329] hover:text-[#001a1f] transition-colors whitespace-nowrap"
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
