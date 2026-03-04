import type { Metadata } from "next";
import Link from "next/link";
import HeroSpline from "@/components/aiquire/HeroSpline";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import ProcessStep from "@/components/aiquire/ProcessStep";
import ComparisonBlock from "@/components/aiquire/ComparisonBlock";
import CardPackage from "@/components/aiquire/CardPackage";
import IndustryCard from "@/components/aiquire/IndustryCard";
import Testimonial from "@/components/aiquire/Testimonial";
import CTASection from "@/components/aiquire/CTASection";
import StepAssess from "@/components/aiquire/illustrations/StepAssess";
import StepImplement from "@/components/aiquire/illustrations/StepImplement";
import StepScale from "@/components/aiquire/illustrations/StepScale";
import PatternDark from "@/components/aiquire/illustrations/PatternDark";
import IconProfessionalServices from "@/components/aiquire/illustrations/IconProfessionalServices";
import IconFinancialServices from "@/components/aiquire/illustrations/IconFinancialServices";
import IconHealthcare from "@/components/aiquire/illustrations/IconHealthcare";
import IconRetail from "@/components/aiquire/illustrations/IconRetail";
import IconManufacturing from "@/components/aiquire/illustrations/IconManufacturing";
import IconEducation from "@/components/aiquire/illustrations/IconEducation";
import IconGovernment from "@/components/aiquire/illustrations/IconGovernment";
import IconCustomDev from "@/components/aiquire/illustrations/IconCustomDev";
import industries from "@/content/industries.json";
import packages from "@/content/packages.json";

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
  title: "AIQUIRE — Don't Just Adopt AI. AIQUIRE It.",
  description:
    "Most businesses experiment with AI. Few truly own it. AIQUIRE bridges the gap between what AI promises and what your business actually needs — combining deep business consulting, proven Design Thinking methodology, and hands-on AI expertise to deliver outcomes that last.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AIQUIRE — Don't Just Adopt AI. AIQUIRE It.",
    description:
      "AI adoption consulting powered by Design Thinking. Strategy, implementation, training, and governance for growing businesses.",
    url: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AIQUIRE",
  url: "https://aiquire.siprahub.com",
  description:
    "AI adoption consulting powered by Design Thinking. Strategy, implementation, training, and governance for growing businesses.",
  parentOrganization: {
    "@type": "Organization",
    name: "Siprahub",
    url: "https://siprahub.com",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "AI Strategy",
    "AI Implementation",
    "Design Thinking",
    "Change Management",
    "Claude Training",
  ],
};

export default function Home() {
  const jumpstart = packages.find((p) => p.slug === "ai-jumpstart")!;
  const quickWin = packages.find((p) => p.slug === "ai-quick-win")!;
  const transformationStarter = packages.find(
    (p) => p.slug === "ai-transformation-starter"
  )!;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* 1. Hero */}
      <HeroSpline />

      {/* 2. Problem Statement */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>The Reality</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            AI is everywhere. Traction is rare.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-base leading-relaxed text-[#514f4f]">
              Your competitors are talking about AI. Some have even deployed it.
              But 70% of enterprise AI projects stall &mdash; not because the
              technology fails, but because the implementation ignored how the
              business actually works.
            </p>
            <p className="text-base leading-relaxed text-[#514f4f]">
              Tools get installed. Teams don&rsquo;t adopt them. ROI never
              arrives. And leadership loses confidence.
            </p>
          </div>
          <blockquote className="mt-8 pl-6 border-l-4 border-[#002329]">
            <p className="font-display font-bold text-xl md:text-2xl text-[#100d0d] leading-snug">
              The problem isn&rsquo;t AI. It&rsquo;s the gap between tech
              deployment and business transformation.
            </p>
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-[#514f4f]">
            That&rsquo;s the gap AIQUIRE was built to close.
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 3. Three-stage Journey */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Your AI Journey</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            Assess. Implement. Scale.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#514f4f] max-w-3xl">
            Every AIQUIRE engagement follows a clear three-stage journey
            &mdash; designed to give you quick wins while building toward
            transformational scale.
          </p>
        </ScrollAnimation>
        <div className="mt-16 space-y-16">
          <ScrollAnimation>
            <ProcessStep
              number="01"
              title="Assess & Strategise"
              description="We run your AI Readiness Assessment and Opportunity Mapping workshop. You walk away with a prioritised roadmap, ROI estimates, and a clear picture of where AI will actually create value for your business. No jargon. No vendor pitch."
              illustration={<StepAssess />}
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <ProcessStep
              number="02"
              title="Implement & Deploy"
              description="Focused, fixed-scope implementations. From Microsoft Copilot deployments to custom AI chatbots to intelligent automation — we configure, integrate, train your team, and hand over with full documentation. Typical implementations take 2–6 weeks."
              illustration={<StepImplement />}
              reverse
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <ProcessStep
              number="03"
              title="Scale & Optimise"
              description="Once your foundation is in, we help you scale. More use cases, deeper automation, custom AI agents, and the internal AI Champions who will drive adoption long after we've left."
              illustration={<StepScale />}
            />
          </ScrollAnimation>
        </div>
      </SectionWrapper>

      {/* 4. Stats Strip */}
      <section className="relative bg-[#002329] py-16 md:py-24 overflow-hidden">
        <PatternDark />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-left">
                <p className="font-display font-bold text-5xl md:text-7xl text-white leading-none">
                  70%
                </p>
                <p className="mt-2 text-base text-white/70">
                  of AI projects stall before delivering ROI
                </p>
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-5xl md:text-7xl text-white leading-none">
                  5
                </p>
                <p className="mt-2 text-base text-white/70">
                  service practices covering the full AI journey
                </p>
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-5xl md:text-7xl text-white leading-none">
                  7
                </p>
                <p className="mt-2 text-base text-white/70">
                  industry playbooks built and ready
                </p>
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-5xl md:text-7xl text-white leading-none">
                  2&ndash;6wk
                </p>
                <p className="mt-2 text-base text-white/70">
                  typical implementation timeline
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 5. Design Thinking */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            Design Thinking at the Core
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#514f4f] max-w-3xl">
            Before a single line of code is written or a single tool is
            licensed, we run human-centred discovery. We map your customer
            journeys, challenge your assumptions, prototype solutions, and test
            them &mdash; all before full implementation. This is how we ensure
            the AI we deploy is the AI you actually need.
          </p>
        </ScrollAnimation>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            {
              step: "01",
              name: "Empathise",
              desc: "Understanding your business, your customers, your people",
            },
            {
              step: "02",
              name: "Define",
              desc: "Framing the right problem before solving any problem",
            },
            {
              step: "03",
              name: "Ideate",
              desc: "Structured discovery workshops, brainstorms, and ideastorms",
            },
            {
              step: "04",
              name: "Prototype",
              desc: "Testing assumptions before committing to full implementation",
            },
            {
              step: "05",
              name: "Test",
              desc: "Measuring success by business outcomes, not tools deployed",
            },
          ].map((item, i) => (
            <ScrollAnimation key={item.name} delay={i * 0.1}>
              <div className="bg-white rounded-lg border border-[#e6e4e2] shadow-sm p-6 h-full">
                <span className="text-[#e6e4e2] font-bold text-4xl leading-none">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display font-bold text-lg text-[#100d0d]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#514f4f]">
                  {item.desc}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. Comparison Block */}
      <SectionWrapper>
        <ScrollAnimation>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#100d0d] mb-12">
            The AIQUIRE Difference
          </h2>
          <ComparisonBlock
            othersItems={[
              "Start with technology, not the business problem",
              "Predetermined solutions before understanding your needs",
              "Retainers that run forever with scope creep",
              "AI expertise without business consulting depth",
              "Security bolted on after, not built in",
            ]}
            aiquireItems={[
              "Design Thinking discovery before any implementation",
              "Structured workshops to surface real opportunities",
              "Fixed scope, clear deliverables, no surprises",
              "Business consulting depth + AI implementation expertise",
              "SentienzBay security built in from day one",
            ]}
          />
        </ScrollAnimation>
      </SectionWrapper>

      {/* 7. Packages Snapshot */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>How to Start</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            Choose your entry point.
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <ScrollAnimation className="h-full">
            <CardPackage
              name={jumpstart.name}
              tier={jumpstart.tier}
              duration={jumpstart.duration}
              inclusions={jumpstart.inclusions}
              cta={jumpstart.cta}
              className="h-full"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.1} className="h-full">
            <CardPackage
              name={quickWin.name}
              tier={quickWin.tier}
              duration={quickWin.duration}
              inclusions={quickWin.inclusions}
              cta={quickWin.cta}
              featured
              className="h-full"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.2} className="h-full">
            <CardPackage
              name={transformationStarter.name}
              tier={transformationStarter.tier}
              duration={transformationStarter.duration}
              inclusions={transformationStarter.inclusions}
              cta={transformationStarter.cta}
              className="h-full"
            />
          </ScrollAnimation>
        </div>
        <ScrollAnimation>
          <div className="mt-8 text-center">
            <Link
              href="/packages"
              className="text-sm font-medium text-[#002329] hover:text-[#001a1f] transition-colors"
            >
              See all packages &rarr;
            </Link>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 8. Industries Teaser */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Industries</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            We speak your industry&rsquo;s language.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#514f4f] max-w-3xl">
            AIQUIRE has developed AI playbooks for Professional Services,
            Financial Services, Healthcare, E-Commerce, Technology &amp; SaaS,
            Real Estate, and Agencies. We understand your workflows, your
            compliance requirements, and where AI creates the most value in your
            sector.
          </p>
        </ScrollAnimation>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <ScrollAnimation key={ind.slug} delay={i * 0.05}>
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

      {/* 9. Testimonial */}
      {/* TODO: Replace placeholder with real client testimonial */}
      <ScrollAnimation>
        <Testimonial
          quote="AIQUIRE transformed how we think about AI — from a tool our team feared to a capability they now champion."
          author="Client Testimonial"
          title="Coming Soon"
        />
      </ScrollAnimation>

      {/* 10. CTA */}
      <ScrollAnimation>
        <CTASection
          headline="Don't Just Adopt AI. AIQUIRE It."
          ctaLabel="Talk to an AI Consultant"
        />
      </ScrollAnimation>
    </>
  );
}
