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
  title: "Claude for Business Teams — AIQUIRE",
  description:
    "Knowledge workers who truly understand Claude don't just save time — they produce better work, make better decisions, and operate with a confidence that compounds over time.",
  alternates: { canonical: "/claude-training/business-track" },
  openGraph: {
    title: "Claude for Business Teams — AIQUIRE",
    description:
      "From occasional Claude users to daily power users. 5 structured programmes for knowledge workers, analysts, and managers.",
    url: "/claude-training/business-track",
  },
};

export default function BusinessTrackPage() {
  const btProgrammes = programmes.filter((p) => p.track === "business");
  const bt01 = btProgrammes.find((p) => p.code === "BT-01")!;
  const bt02 = btProgrammes.find((p) => p.code === "BT-02")!;
  const bt03 = btProgrammes.find((p) => p.code === "BT-03")!;
  const bt04 = btProgrammes.find((p) => p.code === "BT-04")!;
  const bt05 = btProgrammes.find((p) => p.code === "BT-05")!;

  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            <Eyebrow>Track 1 &mdash; Claude for Business Teams</Eyebrow>
            <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-7xl text-[#0d0d0d] tracking-tight">
              Claude for Business Teams
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#404040] max-w-2xl">
              Knowledge workers who truly understand Claude don&rsquo;t just
              save time &mdash; they produce better work, make better decisions,
              and operate with a confidence that compounds over time. This track
              takes your business teams from occasional Claude users to daily
              power users who treat it as a core professional tool.
            </p>
            <blockquote className="mt-6 pl-6 border-l-4 border-[#002329]">
              <p className="font-display font-bold text-lg text-[#0d0d0d] leading-snug max-w-2xl">
                &ldquo;In 2026, every knowledge worker will feel about Cowork
                the way engineers feel about Claude Code &mdash; that they just
                couldn&rsquo;t live without it.&rdquo; &mdash; Anthropic Head of
                Americas, February 2026
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

      {/* BT-01: Claude Foundations */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <CardProgramme
            code={bt01.code}
            track={bt01.track}
            name={bt01.name}
            format={bt01.format}
            duration={bt01.duration}
            audience={bt01.audience}
            whatYouLearn={bt01.what_you_learn}
            deliverables={bt01.deliverables}
          />
        </ScrollAnimation>
      </SectionWrapper>

      {/* BT-02: Claude Cowork Deep Dive — Featured */}
      <SectionWrapper>
        <ScrollAnimation>
          <CardInverted
            eyebrow="Most Time-Sensitive"
            title="BT-02 — Claude Cowork Deep Dive"
            description="Claude Cowork — launched in January 2026 — is Anthropic's most significant enterprise product release since Claude Code. It brings the agentic power of Claude Code to knowledge workers: direct file access, multi-step task execution, scheduled automation, and the ability to produce polished, professional deliverables without manual back-and-forth."
            list={[
              "Full-day intensive, in-person or virtual",
              "Audience: Knowledge workers, analysts, managers, operations teams",
              "Prerequisite: BT-01 or equivalent familiarity with Claude",
              "4 practical labs built around your workflows",
              "30-day post-workshop support access",
            ]}
            ctaLabel="Talk to an AI Consultant"
            ctaHref="/contact"
          />
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-[#737373] mb-3">
                What You&rsquo;ll Learn
              </p>
              <ul className="space-y-1.5">
                {bt02.what_you_learn.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#404040]"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#002329]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-[#737373] mb-3">
                Practical Labs
              </p>
              <ul className="space-y-1.5">
                {bt02.labs.map((lab, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#404040]"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#002329]" />
                    {lab}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-medium uppercase tracking-widest text-[#737373] mt-6 mb-3">
                Deliverables
              </p>
              <ul className="space-y-1.5">
                {bt02.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#404040]"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#002329]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* BT-03: Advanced Prompt Engineering */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <CardProgramme
            code={bt03.code}
            track={bt03.track}
            name={bt03.name}
            format={bt03.format}
            duration={bt03.duration}
            audience={bt03.audience}
            whatYouLearn={bt03.what_you_learn}
            deliverables={bt03.deliverables}
          />
        </ScrollAnimation>
      </SectionWrapper>

      {/* BT-04: Claude for Specific Business Functions */}
      <SectionWrapper>
        <ScrollAnimation>
          <CardProgramme
            code={bt04.code}
            track={bt04.track}
            name={bt04.name}
            format={bt04.format}
            duration={bt04.duration}
            audience={bt04.audience}
            whatYouLearn={bt04.what_you_learn}
            deliverables={bt04.deliverables}
          />
        </ScrollAnimation>
      </SectionWrapper>

      {/* BT-05: AI Governance, Policy & Safe Use */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <CardProgramme
            code={bt05.code}
            track={bt05.track}
            name={bt05.name}
            format={bt05.format}
            duration={bt05.duration}
            audience={bt05.audience}
            whatYouLearn={bt05.what_you_learn}
            deliverables={bt05.deliverables}
          />
        </ScrollAnimation>
      </SectionWrapper>

      {/* Champions Program */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>AI Champions</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            Build the Internal Champions Who Keep Claude Adoption Alive.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#404040] max-w-3xl">
            External training delivers the initial capability. Internal AI
            Champions sustain and grow it. The AIQUIRE Claude Champions Program
            develops a cohort of power users who become your organisation&rsquo;s
            permanent Claude expertise centre.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mt-8 bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-8">
            <h3 className="font-display font-bold text-xl text-[#0d0d0d]">
              Claude Business Champions
            </h3>
            <p className="mt-2 text-sm text-[#737373]">
              4 weeks post core training &middot; 4&ndash;8 champions per
              organisation
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#404040]">
              Business champions are the colleagues others turn to when they get
              stuck with Claude, when they want to know if Cowork can handle a
              new type of task, or when they need help building a better prompt.
              They are not technically trained &mdash; they are deeply
              experienced and highly motivated users who can coach, demonstrate,
              and advocate.
            </p>
            <ul className="mt-4 space-y-1.5">
              {[
                "Extended Cowork deep dive: advanced plugin building and workflow design",
                "Advanced prompt engineering: going beyond BT-03 into system prompt architecture",
                "Change management basics: how to encourage adoption in reluctant colleagues",
                "Monthly AIQUIRE office hours for ongoing questions and new feature updates",
                "Access to AIQUIRE's Claude prompt library and update service",
                "Champion playbook: how to run internal lunch-and-learns and demos",
                "Direct Slack/Teams community with other AIQUIRE-trained Claude champions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#404040]"
                >
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#002329]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <blockquote className="mt-8 pl-6 border-l-4 border-[#002329]">
            <p className="font-display font-bold text-lg text-[#0d0d0d] leading-snug">
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
