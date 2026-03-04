import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CardService from "@/components/aiquire/CardService";
import ProcessStep from "@/components/aiquire/ProcessStep";
import CardPackage from "@/components/aiquire/CardPackage";
import CTASection from "@/components/aiquire/CTASection";
import IconStrategy from "@/components/aiquire/illustrations/IconStrategy";
import IconProductivity from "@/components/aiquire/illustrations/IconProductivity";
import IconCustomerRevenue from "@/components/aiquire/illustrations/IconCustomerRevenue";
import IconOperations from "@/components/aiquire/illustrations/IconOperations";
import IconCustomDev from "@/components/aiquire/illustrations/IconCustomDev";
import services from "@/content/services.json";
import packages from "@/content/packages.json";

const serviceIcons: Record<string, React.ReactNode> = {
  "ai-strategy": <IconStrategy />,
  "ai-productivity": <IconProductivity />,
  "customer-revenue-ai": <IconCustomerRevenue />,
  "operations-intelligence": <IconOperations />,
  "custom-ai-development": <IconCustomDev />,
};

/* ── Per-practice content not in services.json ── */

const practiceExtras: Record<
  string,
  {
    blockquote: string;
    steps: { number: string; title: string; description: string }[];
    relatedPackageSlugs: string[];
  }
> = {
  "ai-strategy": {
    blockquote: "Most AI failures are strategy failures. We fix that first.",
    steps: [
      {
        number: "01",
        title: "Assess & Evaluate",
        description:
          "A comprehensive evaluation of your tech stack, data maturity, team capabilities, and existing processes. We identify your highest-impact AI opportunities and the gaps you need to close before pursuing them.",
      },
      {
        number: "02",
        title: "Map & Prioritise",
        description:
          "A facilitated Design Thinking workshop where we surface, challenge, and prioritise 3–5 AI use cases ranked by ROI, feasibility, and risk. This isn't a presentation — it's a working session with your leadership team.",
      },
      {
        number: "03",
        title: "Plan & Roadmap",
        description:
          "Your 90-day action plan. Prioritised initiatives, specific tool recommendations, budget estimates, resource requirements, and a risk assessment — all in a format your board can read and your team can execute.",
      },
    ],
    relatedPackageSlugs: ["ai-starter-sprint", "ai-jumpstart"],
  },
  "ai-productivity": {
    blockquote:
      "Quick wins build the internal momentum that drives transformation.",
    steps: [
      {
        number: "01",
        title: "Configure & Deploy",
        description:
          "Full configuration and deployment of your chosen AI productivity tools — security settings, data governance policies, and admin controls set up correctly from day one.",
      },
      {
        number: "02",
        title: "Train & Onboard",
        description:
          "Structured onboarding with prompt libraries, best practice guides, and hands-on training sessions. We invest as much effort in change management as we do in technical setup.",
      },
      {
        number: "03",
        title: "Support & Adopt",
        description:
          "Every deployment includes 30 days of post-deployment support. Because an AI tool nobody uses is a sunk cost, not an asset.",
      },
    ],
    relatedPackageSlugs: ["ai-copilot-bundle", "ai-quick-win"],
  },
  "customer-revenue-ai": {
    blockquote:
      "Every implementation in this practice directly impacts revenue, retention, or customer experience.",
    steps: [
      {
        number: "01",
        title: "Map the Customer Journey",
        description:
          "Before we configure any tool, we run a customer journey mapping session with your team. We identify the moments where AI creates genuine value — and the moments where it would feel robotic and damage trust.",
      },
      {
        number: "02",
        title: "Implement & Integrate",
        description:
          "Deploy and configure your chosen customer or revenue AI tools with full integration into your existing systems, knowledge bases, and workflows.",
      },
      {
        number: "03",
        title: "Measure & Optimise",
        description:
          "Analytics dashboards, trend reports, and continuous monitoring so you can see the impact on revenue, retention, and customer satisfaction from day one.",
      },
    ],
    relatedPackageSlugs: ["ai-customer-service-kit", "ai-sales-accelerator"],
  },
  "operations-intelligence": {
    blockquote:
      "Time your team spends on manual work is time they're not spending on your customers.",
    steps: [
      {
        number: "01",
        title: "Discover & Map",
        description:
          "A process discovery workshop using Design Thinking methodology. We map your current workflows, identify friction points, and surface the manual processes that are costing you the most.",
      },
      {
        number: "02",
        title: "Prioritise & Plan",
        description:
          "Automation candidates ranked by effort, impact, and risk. The result: a targeted implementation plan with a clear ROI case — not a wish list.",
      },
      {
        number: "03",
        title: "Automate & Deploy",
        description:
          "Implement targeted automations with documentation, training, and ROI tracking so the value is measurable. Every automation comes with exception handling for edge cases.",
      },
    ],
    relatedPackageSlugs: ["ai-quick-win", "ai-transformation-starter"],
  },
  "custom-ai-development": {
    blockquote:
      "This is where AI becomes a genuine competitive moat, not a commodity.",
    steps: [
      {
        number: "01",
        title: "Design Sprint",
        description:
          "A structured design sprint where we define the problem, prototype the solution, and validate it with real users before we write production code. This Design Thinking-first approach means fewer pivots and faster delivery.",
      },
      {
        number: "02",
        title: "Build & Integrate",
        description:
          "Custom AI agents and workflows built to your exact specifications — with API integrations, admin interfaces, monitoring, error handling, and full documentation.",
      },
      {
        number: "03",
        title: "Security Review & Deploy",
        description:
          "We apply SentienzBay's security review process to every custom build — because custom AI agents with tool access and API integrations require rigorous testing before they go near production systems.",
      },
    ],
    relatedPackageSlugs: ["ai-transformation-starter", "ai-with-guardrails"],
  },
};

/* ── Static params ── */

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* ── Metadata ── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const practice = services.find((s) => s.slug === slug);
  if (!practice) return {};
  const url = `/services/${slug}`;
  return {
    title: `${practice.name} — AIQUIRE`,
    description: `${practice.tagline} ${practice.overview}`,
    alternates: { canonical: url },
    openGraph: {
      title: `${practice.name} — AIQUIRE`,
      description: `${practice.tagline} ${practice.overview}`,
      url,
    },
  };
}

/* ── Page ── */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const practice = services.find((s) => s.slug === slug);
  if (!practice) notFound();

  const extras = practiceExtras[practice.slug];
  if (!extras) notFound();

  const relatedPkgs = extras.relatedPackageSlugs
    .map((s) => packages.find((p) => p.slug === s))
    .filter(Boolean) as (typeof packages)[number][];

  const practiceNumber = services.findIndex((s) => s.slug === slug) + 1;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: practice.name,
    description: `${practice.tagline} ${practice.overview}`,
    provider: {
      "@type": "Organization",
      name: "AIQUIRE",
      url: "https://aiquire.siprahub.com",
    },
    url: `https://aiquire.siprahub.com/services/${practice.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* 1. Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            {serviceIcons[practice.slug] && (
              <div className="mb-6">{serviceIcons[practice.slug]}</div>
            )}
            <Eyebrow>
              Practice {practiceNumber} of {services.length}
            </Eyebrow>
            <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-7xl text-[#0d0d0d] tracking-tight">
              {practice.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#404040] max-w-2xl">
              {practice.tagline} {practice.overview}
            </p>
            <blockquote className="mt-6 pl-6 border-l-4 border-[#002329]">
              <p className="font-display font-bold text-xl text-[#0d0d0d]">
                {extras.blockquote}
              </p>
            </blockquote>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex bg-[var(--color-cta)] text-white rounded px-8 py-3 text-sm font-medium hover:bg-[#002329] transition-colors"
              >
                Talk to an AI Consultant
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 2. Practice Overview — Design Thinking */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>The Design Thinking Difference</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            How we approach {practice.name.toLowerCase()}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#404040] max-w-3xl">
            {practice.design_thinking_note}
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 3. Services List */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>What&rsquo;s Included</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            Services
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {practice.services.map((svc, i) => (
            <ScrollAnimation key={svc.code} delay={i * 0.05} className="h-full">
              <CardService
                code={svc.code}
                name={svc.name}
                duration={svc.duration}
                deliverables={svc.deliverables}
                tools={svc.tools}
                pricingTier={svc.pricing_tier}
                className="h-full"
              />
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Process Steps */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>How We Deliver</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            Our process
          </h2>
        </ScrollAnimation>
        <div className="mt-16 space-y-16">
          {extras.steps.map((step, i) => (
            <ScrollAnimation key={step.number} delay={i * 0.1}>
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                reverse={i % 2 === 1}
              />
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. Related Packages */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Packages</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            Recommended starting points
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {relatedPkgs.map((pkg, i) => (
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
        <ScrollAnimation>
          <div className="mt-8">
            <Link
              href="/packages"
              className="text-sm font-medium text-[#002329] hover:text-[#001a1f] transition-colors"
            >
              See all packages &rarr;
            </Link>
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
