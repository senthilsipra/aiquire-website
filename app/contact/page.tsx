import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CTASection from "@/components/aiquire/CTASection";
import packages from "@/content/packages.json";

export const metadata: Metadata = {
  title: "Get Started — AIQUIRE",
  description:
    "Talk to an AI Consultant. Not a chatbot. Not a sales rep reading from a script. A consultant who will listen to your business challenge and recommend the right starting point.",
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

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            <Eyebrow>Get Started</Eyebrow>
            <h1 className="mt-6 font-serif font-bold text-4xl sm:text-5xl md:text-7xl text-[#0F0F0F] tracking-tight">
              Talk to an AI Consultant.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#3D3D3D] max-w-2xl">
              Not a chatbot. Not a sales rep reading from a script. A consultant
              who will listen to your business challenge, tell you honestly where
              AI can help, and recommend the right starting point &mdash; even if
              it&rsquo;s smaller than you expected.
            </p>
            <div className="mt-6 max-w-2xl space-y-4">
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#0F0F0F]">
                What Happens When You Reach Out
              </h2>
              <p className="text-base leading-relaxed text-[#3D3D3D]">
                We respond within one business day. Every initial conversation is
                with an experienced AI consultant &mdash; not a business
                development function. The goal of that first conversation is to
                understand your business, not to sell you a package.
              </p>
              <p className="text-base leading-relaxed text-[#3D3D3D]">
                If there&rsquo;s a fit, we&rsquo;ll recommend the right starting
                point. If there isn&rsquo;t, we&rsquo;ll tell you that too.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 2. Three Engagement Paths */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F] mb-12">
            Choose your entry point.
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollAnimation className="h-full">
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 flex flex-col h-full">
              <h3 className="font-serif font-bold text-2xl text-[#0F0F0F]">
                Book a 30-Minute Discovery Call
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#3D3D3D] flex-1">
                Tell us about your business, your current AI situation, and what
                you&rsquo;re trying to achieve. We&rsquo;ll tell you what
                we&rsquo;d recommend and why.
              </p>
              <Link
                href="#contact-form"
                className="mt-6 inline-flex justify-center bg-[#0F0F0F] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#1B4D3E] transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1} className="h-full">
            <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 flex flex-col h-full">
              <h3 className="font-serif font-bold text-2xl">
                Request a Proposal
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/80 flex-1">
                Know what you want? Tell us your requirements and we&rsquo;ll
                prepare a scoped proposal with clear deliverables, timeline, and
                investment.
              </p>
              <Link
                href="#contact-form"
                className="mt-6 inline-flex justify-center bg-white text-[#1B4D3E] rounded-full px-6 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Request a Proposal
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} className="h-full">
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 flex flex-col h-full">
              <h3 className="font-serif font-bold text-2xl text-[#0F0F0F]">
                AI Starter Sprint
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#3D3D3D] flex-1">
                Not sure if you&rsquo;re ready? Start with a $4K&ndash;$6K,
                one-week paid discovery sprint. No commitment beyond it.
                You&rsquo;ll walk away with a concrete AI action plan regardless
                of what you decide next.
              </p>
              <Link
                href="#contact-form"
                className="mt-6 inline-flex justify-center bg-[#0F0F0F] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#1B4D3E] transition-colors"
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
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Our Packages at a Glance
          </h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#EBEBEB]">
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#888888]">
                    Package
                  </th>
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#888888]">
                    Investment
                  </th>
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#888888]">
                    Duration
                  </th>
                  <th className="pb-4 text-xs font-medium uppercase tracking-widest text-[#888888] hidden sm:table-cell">
                    Focus
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
                    <td className="py-4 pr-4 text-sm text-[#3D3D3D] whitespace-nowrap">
                      {formatPrice(pkg.price_min)}&ndash;
                      {formatPrice(pkg.price_max)}
                    </td>
                    <td className="py-4 pr-4 text-sm text-[#3D3D3D] whitespace-nowrap">
                      {pkg.duration}
                    </td>
                    <td className="py-4 text-sm text-[#888888] hidden sm:table-cell">
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
              className="text-sm font-medium text-[#1B4D3E] hover:text-[#163D30] transition-colors"
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
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Start the Conversation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3D3D3D] max-w-2xl">
            Tell us about your business, your current AI situation, and what
            you&rsquo;re trying to achieve. We&rsquo;ll respond within one
            business day.
          </p>
          <div className="mt-8 rounded-2xl bg-white border border-[#EBEBEB] shadow-sm overflow-hidden">
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
