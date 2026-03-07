import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import ProcessStep from "@/components/aiquire/ProcessStep";
import CTASection from "@/components/aiquire/CTASection";
import StepEmpathise from "@/components/aiquire/illustrations/StepEmpathise";
import StepDefine from "@/components/aiquire/illustrations/StepDefine";
import StepIdeate from "@/components/aiquire/illustrations/StepIdeate";
import StepPrototype from "@/components/aiquire/illustrations/StepPrototype";
import StepTest from "@/components/aiquire/illustrations/StepTest";
import PatternDark from "@/components/aiquire/illustrations/PatternDark";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";

const accordionItems = [

  {
    id: 1,
    title: "About AIQUIRE",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI Innovation",
    imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Industries",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "AI Academy",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Claude Training",
    imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop"
  }
];

export const metadata: Metadata = {
  title: "About-AIQUIRE",
  description:
    "AIQUIRE was built because the market had a problem: AI expertise without business consulting depth, or business consulting without AI implementation capability. Rarely both. We exist to be both.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About-AIQUIRE",
    description:
      "The bridge between business and AI. Design Thinking methodology meets hands-on AI expertise.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side: Text Content */}
            <ScrollAnimation>
              <div>
                <Eyebrow>About AIQUIRE</Eyebrow>
                <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-7xl text-[#100d0d] tracking-tight">
                  The Bridge Between
                  <br />
                  Business and AI.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#514f4f] max-w-2xl">
                  AIQUIRE was built because the market had a problem: AI expertise
                  without business consulting depth, or business consulting without
                  AI implementation capability. Rarely both. We exist to be both
                  &mdash; and to be the partner that closes the gap.
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

      {/* 2. Founding Narrative */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Why AIQUIRE Exists</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            The gap we were built to close.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-base leading-relaxed text-[#514f4f]">
              Every week, another business announces it&rsquo;s
              &lsquo;implementing AI.&rsquo; Most of these initiatives share a
              common failure mode: they start with the technology rather than the
              business problem. Tools get deployed, adoption is poor, ROI never
              materialises, and the organisation concludes that AI is overhyped.
            </p>
            <blockquote className="pl-6 border-l-4 border-[#002329]">
              <p className="font-display font-bold text-xl text-[#100d0d]">
                It is not overhyped. It is underimplemented.
              </p>
            </blockquote>
            <p className="text-base leading-relaxed text-[#514f4f]">
              AIQUIRE was founded by consultants who spent years watching this
              pattern repeat &mdash; in management consulting, in technology
              consulting, across industries and geographies. We knew there was a
              better way. It starts with Design Thinking. It ends with
              measurable business outcomes.
            </p>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 3. Design Thinking Methodology */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Our Methodology</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            Design Thinking Meets AI
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#514f4f] max-w-3xl">
            Design Thinking is the discipline of solving the right problem
            before you solve any problem. It is human-centred, iterative, and
            empirical. In the context of AI adoption, it means:
          </p>
        </ScrollAnimation>
        <div className="mt-16 space-y-16">
          <ScrollAnimation>
            <ProcessStep
              number="01"
              title="Empathise"
              description="Starting with your business challenge, not with AI capabilities."
              illustration={<StepEmpathise />}
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <ProcessStep
              number="02"
              title="Define"
              description="The discipline of solving the right problem before you solve any problem."
              illustration={<StepDefine />}
              reverse
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.15}>
            <ProcessStep
              number="03"
              title="Ideate"
              description="Engaging your team in facilitated discovery â€” workshops, ideastorms, and brainstorms â€” to surface real opportunities."
              illustration={<StepIdeate />}
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <ProcessStep
              number="04"
              title="Prototype"
              description="Prototyping and testing assumptions before committing to full implementation."
              illustration={<StepPrototype />}
              reverse
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.25}>
            <ProcessStep
              number="05"
              title="Test"
              description="Measuring success by business outcomes, not by tools deployed."
              illustration={<StepTest />}
            />
          </ScrollAnimation>
        </div>
        <ScrollAnimation>
          <p className="mt-12 text-base leading-relaxed text-[#514f4f] max-w-3xl">
            Every AIQUIRE engagement &mdash; from a one-week AI Starter Sprint
            to a twelve-week AI Transformation &mdash; is anchored in this
            methodology. It is not a phase. It is how we work.
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 4. Stats Strip */}
      <section className="relative bg-[#ce2124] py-16 md:py-24 overflow-hidden">
        <PatternDark />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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
                  8
                </p>
                <p className="mt-2 text-base text-white/70">
                  fixed-scope packages
                </p>
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-5xl md:text-7xl text-white leading-none">
                  <span className="whitespace-nowrap">2&ndash;6wk</span>
                </p>
                <p className="mt-2 text-base text-white/70">
                  typical implementation timeline
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 5. Our Consultants */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#100d0d]">
            Our Consultants
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#514f4f] max-w-3xl">
            AIQUIRE consultants bring experience from top-tier management
            consulting and technology consulting firms. They have led AI
            transformations at scale, managed enterprise procurement, navigated
            complex stakeholder landscapes, and built the change management
            programmes that make new technology actually stick.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#514f4f] max-w-3xl">
            They are not AI evangelists. They are business problem-solvers who
            know how to use AI to solve them.
          </p>
        </ScrollAnimation>
        {/* TODO: Replace with real team member cards when bios and photos are available */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Consultant 1", role: "AI Strategy" },
            { name: "Consultant 2", role: "AI Implementation" },
            { name: "Consultant 3", role: "Change Management" },
            { name: "Consultant 4", role: "Security & Governance" },
          ].map((member) => (
            <ScrollAnimation key={member.name}>
              <div className="bg-white rounded-lg border border-[#e6e4e2] shadow-sm p-6 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#fff8e8] flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-[#ce2124]">
                    {member.name.slice(-1)}
                  </span>
                </div>
                <h3 className="mt-4 font-display font-bold text-lg text-[#100d0d]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[#7d7d7d]">{member.role}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. Siprahub + SentienzBay */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollAnimation>
            <Eyebrow>Security Built In</Eyebrow>
            <h2 className="mt-6 font-display font-bold text-3xl md:text-4xl text-[#100d0d]">
              SentienzBay
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#514f4f]">
              As the AI adoption practice of Siprahub, AIQUIRE has direct access
              to SentienzBay&rsquo;s cybersecurity expertise. Every
              implementation we deliver is reviewed through a security lens
              &mdash; data governance, access controls, prompt injection risks,
              and compliance requirements. For clients in regulated industries,
              this isn&rsquo;t optional. For all clients, it is the standard.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <Eyebrow>Part of Siprahub</Eyebrow>
            <h2 className="mt-6 font-display font-bold text-3xl md:text-4xl text-[#100d0d]">
              Siprahub
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#514f4f]">
              AIQUIRE is the AI adoption division of Siprahub &mdash; a
              technology services group bringing together AI adoption,
              cybersecurity, and business consulting under one roof. Our clients
              benefit from the full Siprahub capability stack, with AIQUIRE as
              their front door to AI transformation.
            </p>
            <p className="mt-4">
              <Link
                href="https://siprahub.com"
                className="text-sm font-medium text-[#002329] hover:text-[#001a1f] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more at siprahub.com &rarr;
              </Link>
            </p>
          </ScrollAnimation>
        </div>
      </SectionWrapper>

      {/* 7. CTA */}
      <ScrollAnimation>
        <CTASection
          headline="Don't Just Adopt AI. AIQUIRE It."
          ctaLabel="Talk to an AI Consultant"
        />
      </ScrollAnimation>
    </>
  );
}



