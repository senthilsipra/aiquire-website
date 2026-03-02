import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CardInverted from "@/components/aiquire/CardInverted";
import CTASection from "@/components/aiquire/CTASection";
import programmes from "@/content/programmes.json";

export const metadata: Metadata = {
  title: "Claude Training Practice — AIQUIRE",
  description:
    "AIQUIRE's Claude Training Practice is the fastest, most structured way to ensure your business teams and engineering teams don't just use Claude — they master it.",
};

export default function ClaudeTrainingPage() {
  const btProgrammes = programmes.filter((p) => p.track === "business");
  const ccProgrammes = programmes.filter((p) => p.track === "engineering");

  return (
    <>
      {/* 1. Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            <Eyebrow>Claude Training Practice</Eyebrow>
            <h1 className="mt-6 font-serif font-bold text-4xl sm:text-5xl md:text-7xl text-[#0F0F0F] tracking-tight">
              Claude Is Your Most Powerful
              <br />
              Tool. Are You Using It Properly?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#3D3D3D] max-w-2xl">
              Claude is no longer just a chatbot. In 2025 it transformed how
              developers work. In 2026 it&rsquo;s doing the same for every
              knowledge worker in your organisation. AIQUIRE&rsquo;s Claude
              Training Practice is the fastest, most structured way to ensure
              your business teams and engineering teams don&rsquo;t just use
              Claude &mdash; they master it.
            </p>
            <blockquote className="mt-6 pl-6 border-l-4 border-[#1B4D3E]">
              <p className="font-serif font-bold text-xl text-[#0F0F0F]">
                Most teams are using 20% of what Claude can do. We fix that.
              </p>
            </blockquote>
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

      {/* 2. Why This Matters Now */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Why This Matters Now</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            The gap between using Claude and mastering Claude is costing you.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-base leading-relaxed text-[#3D3D3D]">
              Teams that use Claude casually get casual results. Teams that
              understand how Claude thinks, how to prompt effectively, how to
              build workflows around it, and how to govern it safely &mdash;
              those teams operate at a different level entirely.
            </p>
            <p className="text-base leading-relaxed text-[#3D3D3D]">
              Anthropic&rsquo;s own enterprise data shows organisations that
              formally train their teams on Claude see dramatically better
              adoption, measurably higher output quality, and faster
              time-to-value from their Claude investment compared to those that
              simply hand out subscriptions and hope for the best.
            </p>
            <p className="text-base leading-relaxed text-[#3D3D3D]">
              The same pattern holds for development teams on Claude Code.
              Engineers who understand the tool&rsquo;s agentic architecture,
              know how to configure CLAUDE.md files, set permission boundaries,
              and integrate Claude Code into CI/CD pipelines outperform those
              who use it as a simple autocomplete by an order of magnitude.
            </p>
          </div>
          <blockquote className="mt-8 pl-6 border-l-4 border-[#1B4D3E]">
            <p className="font-serif font-bold text-lg md:text-xl text-[#0F0F0F] leading-snug max-w-3xl">
              Claude Cowork launched in January 2026. Claude Code has been
              transforming engineering teams since 2025. The window to establish
              internal capability is now &mdash; before your competitors do.
            </p>
          </blockquote>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 3. Two Tracks */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Two Tracks. One Practice.</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Business Teams. Engineering Teams. Both Covered.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3D3D3D] max-w-3xl">
            The AIQUIRE Claude Training Practice operates across two distinct
            tracks &mdash; designed for the realities of each audience, not
            generic AI training dressed up in Claude branding.
          </p>
        </ScrollAnimation>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <ScrollAnimation className="h-full">
            <CardInverted
              eyebrow="Track 1"
              title="Claude for Business Teams"
              description="For knowledge workers, managers, analysts, marketers, operations teams, finance, HR, and anyone whose daily work involves documents, communication, analysis, or decisions. This track covers Claude.ai, Claude Cowork, and the productivity layer of the Claude ecosystem."
              list={[
                "5 structured programmes",
                "Half-day to full-day formats",
                "Claude.ai + Claude Cowork",
              ]}
              ctaLabel="Explore Business Track"
              ctaHref="/claude-training/business-track"
              className="h-full"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.1} className="h-full">
            <CardInverted
              eyebrow="Track 2"
              title="Claude Code for Engineering & Dev Teams"
              description="For developers, engineers, DevOps, technical leads, and CTOs who want to move from using Claude Code as a coding assistant to deploying it as a full agentic development environment. This track covers installation, configuration, CLAUDE.md architecture, MCP integration, security guardrails, and CI/CD practices."
              list={[
                "6 technical programmes",
                "Beginner to advanced levels",
                "Setup through CI/CD integration",
              ]}
              ctaLabel="Explore Engineering Track"
              ctaHref="/claude-training/engineering-track"
              className="h-full"
            />
          </ScrollAnimation>
        </div>
      </SectionWrapper>

      {/* 4. Stats Strip */}
      <section className="bg-[#1B4D3E] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-left">
                <p className="font-serif font-bold text-5xl md:text-7xl text-white leading-none">
                  20%
                </p>
                <p className="mt-2 text-base text-white/70">
                  of Claude&rsquo;s capability used by most teams
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif font-bold text-5xl md:text-7xl text-white leading-none">
                  11
                </p>
                <p className="mt-2 text-base text-white/70">
                  structured training programmes across both tracks
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif font-bold text-5xl md:text-7xl text-white leading-none">
                  90%
                </p>
                <p className="mt-2 text-base text-white/70">
                  reduction in migration time with Claude Code
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif font-bold text-5xl md:text-7xl text-white leading-none">
                  3x
                </p>
                <p className="mt-2 text-base text-white/70">
                  higher adoption with trained internal champions
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 5. The AIQUIRE Difference */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>The AIQUIRE Difference</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            We&rsquo;re consultants who use Claude daily. Not instructors who
            read the docs.
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 h-full">
              <h3 className="font-serif font-bold text-xl text-[#0F0F0F]">
                Real-World Practitioners
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#3D3D3D]">
                Every trainer in the AIQUIRE Claude Training Practice uses
                Claude and Claude Code in live client engagements. They know
                where the pitfalls are, what prompting patterns actually work in
                business contexts, how to handle hallucination risk in
                professional settings, and what the most common adoption
                failures look like.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 h-full">
              <h3 className="font-serif font-bold text-xl text-[#0F0F0F]">
                Design Thinking Delivery
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#3D3D3D]">
                Training is delivered using Design Thinking principles &mdash;
                experiential, iterative, and anchored in your actual workflows.
                Participants don&rsquo;t learn Claude in the abstract. They
                learn Claude on your real use cases, your real documents, your
                real development environment.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 h-full">
              <h3 className="font-serif font-bold text-xl text-[#0F0F0F]">
                SentienzBay Security
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#3D3D3D]">
                We also have the security depth of SentienzBay behind us. Every
                training programme includes governance and security content
                appropriate for your industry &mdash; not as an afterthought,
                but as a core module.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </SectionWrapper>

      {/* 6. Programmes at a Glance */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Programmes</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Programmes at a Glance
          </h2>
        </ScrollAnimation>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Business Track */}
          <ScrollAnimation>
            <div>
              <h3 className="font-serif font-bold text-xl text-[#0F0F0F] mb-6">
                Business Track
              </h3>
              <div className="space-y-4">
                {btProgrammes.map((prog) => (
                  <div
                    key={prog.code}
                    className="flex items-start gap-4 pb-4 border-b border-[#EBEBEB] last:border-b-0"
                  >
                    <span className="shrink-0 inline-flex items-center justify-center bg-[#EBF2EF] text-[#1B4D3E] text-xs font-medium px-2.5 py-1 rounded-full">
                      {prog.code}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-[#0F0F0F]">{prog.name}</p>
                      <p className="mt-0.5 text-sm text-[#888888]">
                        {prog.duration} &middot; {prog.audience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Engineering Track */}
          <ScrollAnimation delay={0.1}>
            <div>
              <h3 className="font-serif font-bold text-xl text-[#0F0F0F] mb-6">
                Engineering Track
              </h3>
              <div className="space-y-4">
                {ccProgrammes.map((prog) => (
                  <div
                    key={prog.code}
                    className="flex items-start gap-4 pb-4 border-b border-[#EBEBEB] last:border-b-0"
                  >
                    <span className="shrink-0 inline-flex items-center justify-center bg-[#EBF2EF] text-[#1B4D3E] text-xs font-medium px-2.5 py-1 rounded-full">
                      {prog.code}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-[#0F0F0F]">{prog.name}</p>
                      <p className="mt-0.5 text-sm text-[#888888]">
                        {prog.duration} &middot; {prog.audience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </SectionWrapper>

      {/* 7. Pathways */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Recommended Pathways</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            How to Sequence Your Training.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3D3D3D] max-w-3xl">
            Every programme can be taken standalone, but structured pathways
            deliver compounding returns. Here are the recommended sequences for
            different audiences and goals.
          </p>
        </ScrollAnimation>
        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {/* Pathway 1 */}
          <ScrollAnimation className="h-full">
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 h-full flex flex-col">
              <span className="text-[#EBEBEB] font-bold text-4xl leading-none">
                01
              </span>
              <h3 className="mt-3 font-serif font-bold text-xl text-[#0F0F0F]">
                Business Team Complete Adoption
              </h3>
              <p className="mt-1 text-sm text-[#888888]">
                All knowledge workers &middot; 4&ndash;6 weeks
              </p>
              <ul className="mt-4 space-y-2 flex-1">
                <li className="text-sm text-[#3D3D3D]">
                  BT-01: Claude Foundations (all staff &mdash; week 1)
                </li>
                <li className="text-sm text-[#3D3D3D]">
                  BT-04: Function-specific workshops (weeks 2&ndash;3)
                </li>
                <li className="text-sm text-[#3D3D3D]">
                  BT-02: Claude Cowork Deep Dive (week 4)
                </li>
                <li className="text-sm text-[#3D3D3D]">
                  BT-05: Governance &amp; Policy (week 5)
                </li>
                <li className="text-sm text-[#3D3D3D]">
                  BT-03: Advanced Prompt Engineering (week 6)
                </li>
              </ul>
              <p className="mt-4 text-sm text-[#1B4D3E] font-medium">
                Outcome: Every member of the business team operating with Claude
                as a daily work tool.
              </p>
            </div>
          </ScrollAnimation>

          {/* Pathway 2 */}
          <ScrollAnimation delay={0.1} className="h-full">
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 h-full flex flex-col">
              <span className="text-[#EBEBEB] font-bold text-4xl leading-none">
                02
              </span>
              <h3 className="mt-3 font-serif font-bold text-xl text-[#0F0F0F]">
                Engineering Team Full Deployment
              </h3>
              <p className="mt-1 text-sm text-[#888888]">
                Development and engineering teams &middot; 4&ndash;5 weeks
              </p>
              <ul className="mt-4 space-y-2 flex-1">
                <li className="text-sm text-[#3D3D3D]">
                  CC-01: Setup &amp; Foundations (week 1)
                </li>
                <li className="text-sm text-[#3D3D3D]">
                  CC-02: CLAUDE.md Mastery (week 2)
                </li>
                <li className="text-sm text-[#3D3D3D]">
                  CC-05: Security &amp; Governance (week 2, parallel)
                </li>
                <li className="text-sm text-[#3D3D3D]">
                  CC-03: Agentic Development Workflows (week 3)
                </li>
                <li className="text-sm text-[#3D3D3D]">
                  CC-04: MCP Integration (week 4)
                </li>
                <li className="text-sm text-[#3D3D3D]">
                  CC-06: CI/CD Integration (week 5)
                </li>
              </ul>
              <p className="mt-4 text-sm text-[#1B4D3E] font-medium">
                Outcome: Engineering team fully onboarded with security-first
                configuration and CI/CD integration.
              </p>
            </div>
          </ScrollAnimation>

          {/* Pathway 3 */}
          <ScrollAnimation className="h-full">
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8 h-full flex flex-col">
              <span className="text-[#EBEBEB] font-bold text-4xl leading-none">
                03
              </span>
              <h3 className="mt-3 font-serif font-bold text-xl text-[#0F0F0F]">
                Leadership Fast Track
              </h3>
              <p className="mt-1 text-sm text-[#888888]">
                C-suite, VPs, and senior leadership &middot; 1 day
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#3D3D3D] flex-1">
                A bespoke, condensed session for senior leadership that covers:
                the strategic implications of Claude and Claude Code, what
                competitive advantage looks like in an organisation that masters
                these tools, the governance obligations of leaders, and how to
                evaluate and sponsor their team&rsquo;s Claude adoption
                programme. Combines elements of BT-01, BT-05, and CC-05 with
                executive-level framing.
              </p>
              <p className="mt-4 text-sm text-[#1B4D3E] font-medium">
                Outcome: Leadership aligned on Claude strategy, governance, and
                sponsorship.
              </p>
            </div>
          </ScrollAnimation>

          {/* Pathway 4 */}
          <ScrollAnimation delay={0.1} className="h-full">
            <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 h-full flex flex-col">
              <span className="text-white/20 font-bold text-4xl leading-none">
                04
              </span>
              <h3 className="mt-3 font-serif font-bold text-xl">
                Full Organisation Rollout
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Entire organisation &middot; 8&ndash;12 weeks
              </p>
              <ul className="mt-4 space-y-2 flex-1">
                <li className="text-sm text-white/80">
                  Week 1&ndash;2: Leadership fast track + governance framework
                </li>
                <li className="text-sm text-white/80">
                  Weeks 3&ndash;6: Business team track (all programmes)
                </li>
                <li className="text-sm text-white/80">
                  Weeks 3&ndash;7: Engineering track (parallel stream)
                </li>
                <li className="text-sm text-white/80">
                  Weeks 8&ndash;10: AI Champions Program for both tracks
                </li>
                <li className="text-sm text-white/80">
                  Weeks 11&ndash;12: Internal showcase, retrospective, and
                  90-day optimisation plan
                </li>
              </ul>
              <p className="mt-4 text-sm text-white/90 font-medium">
                Outcome: Claude adopted across every function, with internal
                champions and a clear 90-day plan.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </SectionWrapper>

      {/* 8. CTA */}
      <ScrollAnimation>
        <CTASection
          headline="Start With a 30-Minute Conversation."
          subtext="Tell us about your team — how many people, which tools they're using today, what Claude products you're already subscribed to, and what you're trying to achieve. We'll recommend the right pathway and build a programme schedule that fits around your business."
          ctaLabel="Talk to an AI Consultant"
        />
      </ScrollAnimation>
    </>
  );
}
