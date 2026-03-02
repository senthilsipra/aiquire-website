import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CardProgramme from "@/components/aiquire/CardProgramme";
import CardInverted from "@/components/aiquire/CardInverted";
import CTASection from "@/components/aiquire/CTASection";
import programmes from "@/content/programmes.json";

export const metadata: Metadata = {
  title: "Claude Code for Engineering Teams — AIQUIRE",
  description:
    "Claude Code is not a better autocomplete. It is an agentic coding environment that understands your entire codebase. This track teaches your engineering team to work with it as a collaborator.",
};

export default function EngineeringTrackPage() {
  const ccProgrammes = programmes.filter((p) => p.track === "engineering");
  const cc01 = ccProgrammes.find((p) => p.code === "CC-01")!;
  const cc02 = ccProgrammes.find((p) => p.code === "CC-02")!;
  const cc03 = ccProgrammes.find((p) => p.code === "CC-03")!;
  const cc04 = ccProgrammes.find((p) => p.code === "CC-04")!;
  const cc05 = ccProgrammes.find((p) => p.code === "CC-05")!;
  const cc06 = ccProgrammes.find((p) => p.code === "CC-06")!;

  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            <Eyebrow>Track 2 &mdash; Claude Code for Engineering Teams</Eyebrow>
            <h1 className="mt-6 font-serif font-bold text-4xl sm:text-5xl md:text-7xl text-[#0F0F0F] tracking-tight">
              Claude Code for Engineering
              <br />
              &amp; Dev Teams
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#3D3D3D] max-w-2xl">
              Claude Code is not a better autocomplete. It is an agentic coding
              environment that understands your entire codebase, executes
              multi-step tasks, manages git workflows, and can write
              production-ready code from natural language. The teams extracting
              the most value from it have learned to work with it as a
              collaborator &mdash; not a tool. This track teaches exactly that.
            </p>
            <blockquote className="mt-6 pl-6 border-l-4 border-[#1B4D3E]">
              <p className="font-serif font-bold text-lg text-[#0F0F0F] leading-snug max-w-2xl">
                Spotify reduced engineering time on code migrations by up to 90%
                with Claude Code. Novo Nordisk cut documentation creation from
                10+ weeks to 10 minutes. The gap between teams that know Claude
                Code and teams that don&rsquo;t is widening fast.
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

      {/* CC-01: Setup & Foundations */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <CardProgramme
            code={cc01.code}
            track={cc01.track}
            name={cc01.name}
            format={cc01.format}
            duration={cc01.duration}
            audience={cc01.audience}
            whatYouLearn={cc01.what_you_learn}
            deliverables={cc01.deliverables}
          />
        </ScrollAnimation>
      </SectionWrapper>

      {/* CC-02: CLAUDE.md Mastery */}
      <SectionWrapper>
        <ScrollAnimation>
          <CardProgramme
            code={cc02.code}
            track={cc02.track}
            name={cc02.name}
            format={cc02.format}
            duration={cc02.duration}
            audience={cc02.audience}
            whatYouLearn={cc02.what_you_learn}
            deliverables={cc02.deliverables}
          />
        </ScrollAnimation>
      </SectionWrapper>

      {/* CC-03: Agentic Development Workflows — Featured */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <CardInverted
            eyebrow="Highest Impact"
            title="CC-03 — Agentic Development Workflows"
            description="This is where Claude Code stops being a productivity booster and becomes a genuine multiplier. Agentic workflows — where Claude Code handles complex, multi-step engineering tasks with minimal human interruption — are the capability that separates the teams getting 10x returns from those getting 1.5x."
            list={[
              "Full-day intensive workshop",
              "Audience: Mid to senior developers, tech leads",
              "Level: Intermediate to advanced",
              "Prerequisite: CC-01 and CC-02 or equivalent",
              "4 hands-on labs including parallel agents and CI automation",
            ]}
            ctaLabel="Talk to an AI Consultant"
            ctaHref="/contact"
          />
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-[#888888] mb-3">
                What You&rsquo;ll Learn
              </p>
              <ul className="space-y-1.5">
                {cc03.what_you_learn.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#3D3D3D]"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B4D3E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-[#888888] mb-3">
                Labs
              </p>
              <ul className="space-y-1.5">
                {cc03.labs.map((lab, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#3D3D3D]"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B4D3E]" />
                    {lab}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-medium uppercase tracking-widest text-[#888888] mt-6 mb-3">
                Deliverables
              </p>
              <ul className="space-y-1.5">
                {cc03.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#3D3D3D]"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B4D3E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* CC-04: MCP Integration */}
      <SectionWrapper>
        <ScrollAnimation>
          <CardProgramme
            code={cc04.code}
            track={cc04.track}
            name={cc04.name}
            format={cc04.format}
            duration={cc04.duration}
            audience={cc04.audience}
            whatYouLearn={cc04.what_you_learn}
            deliverables={cc04.deliverables}
          />
        </ScrollAnimation>
      </SectionWrapper>

      {/* CC-05: Security — with SentienzBay note */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-[#EBF2EF] text-[#1B4D3E] text-xs font-medium px-3 py-1.5 rounded-full">
              Delivered with SentienzBay
            </span>
          </div>
          <CardProgramme
            code={cc05.code}
            track={cc05.track}
            name={cc05.name}
            format={cc05.format}
            duration={cc05.duration}
            audience={cc05.audience}
            whatYouLearn={cc05.what_you_learn}
            deliverables={cc05.deliverables}
          />
          <p className="mt-4 text-sm leading-relaxed text-[#3D3D3D] max-w-3xl">
            Delivered jointly by AIQUIRE engineering consultants and SentienzBay
            security specialists. This is the workshop that ensures Claude Code
            is deployed with appropriate controls from day one &mdash; not
            retrofitted with governance after an incident.
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* CC-06: CI/CD Integration */}
      <SectionWrapper>
        <ScrollAnimation>
          <CardProgramme
            code={cc06.code}
            track={cc06.track}
            name={cc06.name}
            format={cc06.format}
            duration={cc06.duration}
            audience={cc06.audience}
            whatYouLearn={cc06.what_you_learn}
            deliverables={cc06.deliverables}
          />
        </ScrollAnimation>
      </SectionWrapper>

      {/* Champions Program */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>AI Champions</Eyebrow>
          <h2 className="mt-6 font-serif font-bold text-3xl md:text-5xl text-[#0F0F0F]">
            Build the Internal Champions Who Keep Claude Code Adoption Alive.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3D3D3D] max-w-3xl">
            External training delivers the initial capability. Internal AI
            Champions sustain and grow it. The AIQUIRE Claude Champions Program
            develops a cohort of power users who become your organisation&rsquo;s
            permanent Claude Code expertise centre.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mt-8 bg-white rounded-2xl border border-[#EBEBEB] shadow-sm p-8">
            <h3 className="font-serif font-bold text-xl text-[#0F0F0F]">
              Claude Code Champions
            </h3>
            <p className="mt-2 text-sm text-[#888888]">
              4 weeks post core training &middot; 2&ndash;4 champions per
              engineering team
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#3D3D3D]">
              Claude Code champions are typically senior engineers or tech leads
              who become the internal authority on Claude Code configuration,
              best practices, and agentic workflow design. They own the
              team&rsquo;s CLAUDE.md files, review AI-generated code, and are
              responsible for keeping the team&rsquo;s Claude Code practices
              current as the tool evolves.
            </p>
            <ul className="mt-4 space-y-1.5">
              {[
                "Advanced MCP server development: building custom servers for your specific internal tools",
                "Agentic architecture design: designing complex multi-agent workflows for your engineering challenges",
                "Security deep dive with SentienzBay: extended session on Claude Code in enterprise security contexts",
                "CLAUDE.md governance: owning and maintaining the team's configuration as the codebase evolves",
                "Monthly AIQUIRE technical office hours covering new Claude Code releases and features",
                "Early access to AIQUIRE's Claude Code best practices library",
                "Technical Slack/Teams community with other AIQUIRE-trained Claude Code champions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#3D3D3D]"
                >
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B4D3E]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <blockquote className="mt-8 pl-6 border-l-4 border-[#1B4D3E]">
            <p className="font-serif font-bold text-lg text-[#0F0F0F] leading-snug">
              Organisations with internal AI champions show 3x higher long-term
              AI adoption rates than those relying solely on external training.
            </p>
          </blockquote>
        </ScrollAnimation>
      </SectionWrapper>

      {/* CTA */}
      <ScrollAnimation>
        <CTASection
          headline="Start With a 30-Minute Conversation."
          subtext="Tell us about your team — how many people, which tools they're using today, what Claude products you're already subscribed to, and what you're trying to achieve."
          ctaLabel="Talk to an AI Consultant"
        />
      </ScrollAnimation>
    </>
  );
}
