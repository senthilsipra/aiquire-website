import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CTASection from "@/components/aiquire/CTASection";
import {
  Activity,
  ArrowDown,
  Layers3,
  RefreshCcw,
  Search,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const partners = [
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Anthropic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/512px-Anthropic_logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Mistral", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mistral_AI_logo.svg" },
] as const;

const stats = [
  {
    value: "70%",
    title: "of enterprise AI projects stall",
    body: "Technology selected before the business problem was understood or defined.",
  },
  {
    value: "3×",
    title: "higher long-term AI adoption",
    body: "In organisations with structured methodology vs. ad hoc rollouts.",
  },
  {
    value: "90%",
    title: "reduction in engineering time",
    body: "What properly deployed, properly configured teams achieve versus those who simply install and hope.",
  },
] as const;

const phaseTabs = [
  {
    number: "Phase 01",
    name: "Discover",
    mode: "↗ Diverging · Research",
    desc: "Understand the challenge. Primary and secondary research. Talk to real people. Output: unstructured findings and a clear picture of the territory.",
  },
  {
    number: "Phase 02",
    name: "Define",
    mode: "↘ Converging · Synthesis",
    desc: 'Make sense of the research. Build themes, find insights, form "How Might We" questions. Output: a refined brief and a prioritised opportunity strategy.',
  },
  {
    number: "Phase 03",
    name: "Develop",
    mode: "↗ Diverging · Ideation",
    desc: "Generate solutions. Evaluate the best ideas. Set hypotheses you can make tangible. Output: a design vision, vendor shortlist, and first concepts.",
  },
  {
    number: "Phase 04",
    name: "Deliver",
    mode: "↘ Converging · Implementation",
    desc: "Prototype. Test. Iterate. Release. Then start the loop again at a higher level. Output: deployed solution, trained teams, and sustained adoption.",
  },
] as const;

const principles = [
  {
    title: "It Is A Framework, Not The Framework",
    body: "We apply what works for your business. The structure gives us rigour. The flexibility gives us results. We adapt the process to your context — not your context to the process.",
    icon: Shield,
  },
  {
    title: "Be Prepared to Restart",
    body: "New learning can send us back to Discover. We embrace that. A week of iteration early saves months of failed implementation later. The process is never truly finished — it restarts at a higher level.",
    icon: RefreshCcw,
  },
  {
    title: "Design With, Not For",
    body: "Real-world problems are solved by collaborating with the people affected — not by presenting slide decks to them. Your team is an active participant in every workshop, not an audience for our conclusions.",
    icon: Users,
  },
] as const;

const divergeConverge = [
  {
    subtitle: "Opening Up",
    title: "Diverging Phases",
    bodyOne:
      "Open up. Take everything into account. Generate as many ideas as possible without filtering. The goal is breadth, not commitment. You cannot solve a problem you haven't fully explored — and you will always discover something unexpected if you look properly.",
    bodyTwo:
      "In AIQUIRE engagements, diverging phases are where we conduct research, run stakeholder interviews, explore your data landscape, and generate AI use case hypotheses before applying any judgment. The unexpected ideas are often where the real opportunity lives.",
    tags: ["Discover", "Develop"],
    icon: RefreshCcw,
    modeClass:
      "text-[#ce2124] bg-white border border-[#ce2124]/30",
  },
  {
    subtitle: "Narrowing Down",
    title: "Converging Phases",
    bodyOne:
      "Narrow down. Make sense of what you've gathered. Make decisions. Choose a direction. Converging phases require analytical rigour — you have explored everything, now you must commit. This is where strategy becomes concrete and actionable.",
    bodyTwo:
      "In AIQUIRE engagements, converging phases are where we synthesise research into an opportunity matrix, select the highest-ROI AI use cases, define success metrics, test assumptions, cut what doesn't work, and commit to what does.",
    tags: ["Define", "Deliver"],
    icon: ArrowDown,
    modeClass:
      "text-[#ce2124] bg-white border border-[#ce2124]/30",
  },
] as const;

const quickReference = [
  ["1", "Discover", "Research Phase · Diverge"],
  ["2", "Define", "Synthesis Phase · Converge"],
  ["3", "Develop", "Ideation Phase · Diverge"],
  ["4", "Deliver", "Implementation Phase · Converge"],
] as const;

const phases = [
  {
    number: "01",
    phase: "Phase One",
    mode: "↗ Diverging",
    name: "Discover",
    subtitle: "Research Phase — Understanding the Real Situation",
    bodyOne:
      "Before we recommend anything, we listen. The Discover phase is where we understand your initial situation — ripping the brief, questioning assumptions, and going out to talk to the people actually affected by the challenge. This is where primary research (stakeholder interviews, workflow observation, shadow AI scans) meets secondary research (tech stack audit, data maturity review, competitive context).",
    bodyTwo:
      "The output of this phase is deliberately unstructured — raw findings, documented observations, and things we didn't expect to find. That unexpected material is often where the real opportunity lives. We apply structure early enough to be useful, but not so early that it prevents discovery.",
    steps: [
      "Rip the brief — analyse the initial situation, challenge every assumption",
      "Define the research scope: who to talk to, what to observe, what to audit",
      "Conduct primary research: stakeholder interviews across all levels, workflow observation",
      "Conduct secondary research: tech stack, data maturity, shadow AI footprint",
      "Document everything — structured early, even when the findings aren't",
    ],
    output:
      "AI Readiness Assessment · Stakeholder map · Unstructured research findings",
    icon: Search,
  },
  {
    number: "02",
    phase: "Phase Two",
    mode: "↘ Converging",
    name: "Define",
    subtitle: "Synthesis Phase — Solving the Right Problem",
    bodyOne:
      "The Define phase is where raw research gets structured. We lay out all findings, build themes and clusters, and look for the insights — the dormant truths behind the facts, the words between the lines. We challenge the original brief. We ask whether we are solving the right problem. Often, the answer is: not quite.",
    bodyTwo:
      'This phase ends with a set of "How Might We" questions — precise prompts that reframe the opportunity areas into actionable design challenges. These questions become the foundation of every AIQUIRE roadmap and every Opportunity Mapping workshop. They are the bridge between understanding the problem and generating solutions.',
    steps: [
      "Lay out all research findings and build themes and clusters",
      "Find the insights: the dormant truth behind the facts",
      "Deduce opportunity areas and potential fields of action",
      'Form "How Might We" questions based on the opportunity areas',
      "Define success metrics: what does Point B actually look like for you?",
    ],
    output:
      "90-Day AI Roadmap · Opportunity matrix · Prioritised HMW questions · Refined strategy brief",
    icon: Layers3,
  },
  {
    number: "03",
    phase: "Phase Three",
    mode: "↗ Diverging",
    name: "Develop",
    subtitle: "Ideation Phase — Getting Into Solution Mode",
    bodyOne:
      "Now we generate solutions. The Develop phase is deliberately expansive — ideate first, evaluate second. We use our Opportunity Mapping workshop to produce as many AI use case candidates as possible, then apply rigour: feasibility scoring, ROI estimation, effort-to-impact ranking, risk weighting.",
    bodyTwo:
      'This is where Design Thinking is most visible. We do not arrive with answers. We facilitate structured ideation alongside your leadership team — using "How Might We" questions, analogical thinking, and NABC analysis — and emerge with a design vision and set of hypotheses your organisation can commit to.',
    steps: [
      "Ideate: generate as many AI use case ideas as possible without filtering",
      "Evaluate: score each idea on ROI, feasibility, risk, and time-to-value",
      "Set the design vision: a clear statement of what success looks like",
      "Form testable hypotheses that can be validated quickly and cheaply",
      "Select the highest-priority initiatives for prototyping and delivery",
    ],
    output:
      "Opportunity Mapping workshop output · Vendor-agnostic tool recommendations · Strategic thesis and design vision",
    icon: Zap,
  },
  {
    number: "04",
    phase: "Phase Four",
    mode: "↘ Converging",
    name: "Deliver",
    subtitle: "Implementation Phase — Build, Test, Learn, Release",
    bodyOne:
      "Deliver is where ideas become working solutions — but it is not a single event. It is a loop. Prototype and test. Learn from what you find. Iterate. Build toward a stable, production-ready result. Release. Then assess and start the loop again with the next initiative.",
    bodyTwo:
      "AIQUIRE stays engaged through the full Deliver phase: configuration, integration, team training, governance, and 30–60 days of post-deployment support. We also build the internal AI Champions who sustain adoption after we leave. The framework never truly ends. It restarts at a higher level with every successful delivery.",
    steps: [
      "Prototype and test: make the best ideas tangible and observe what users actually do",
      "Learn and iterate: bring in the learnings, rethink what needs rethinking",
      "Build, iterate, and repeat until the solution is stable and production-ready",
      "Release: configure, integrate, train your team, go live with governance in place",
      "Review and restart: 90-day retrospective, adoption metrics, next initiative",
    ],
    output:
      "Deployed AI solution · Trained teams · AI Champions Program · Governance framework · 90-day review",
    icon: Activity,
  },
] as const;

const mapping = [
  {
    mode: "↗ Diverge",
    modeClass: "bg-white border border-[#ce2124]/30 text-[#ce2124]",
    phase: "Discover",
    service: "AI Readiness Assessment",
    desc: "Stakeholder interviews, tech stack audit, workflow observation, shadow AI scan. We understand your business before we mention a single tool. Duration: 1–2 weeks.",
  },
  {
    mode: "↘ Converge",
    modeClass: "bg-white border border-[#ce2124]/30 text-[#ce2124]",
    phase: "Define",
    service: "Opportunity Matrix & 90-Day Roadmap",
    desc: "Research synthesis, assumption challenge, opportunity scoring, success metrics. A strategy your board can read and your team can execute. Duration: 2–3 weeks.",
  },
  {
    mode: "↗ Diverge",
    modeClass: "bg-white border border-[#ce2124]/30 text-[#ce2124]",
    phase: "Develop",
    service: "Opportunity Mapping Workshop",
    desc: "Facilitated Design Thinking session with your leadership team. Structured ideation, vendor-agnostic tool evaluation, ROI and feasibility scoring. Duration: 1–2 days.",
  },
  {
    mode: "↘ Converge",
    modeClass: "bg-white border border-[#ce2124]/30 text-[#ce2124]",
    phase: "Deliver",
    service: "Implementation, Training & Champions",
    desc: "Configuration, integration, team training, governance, 30–60 day support, AI Champions Program, and a 90-day adoption review. Then the loop begins again.",
  },
] as const;

const goals = [
  {
    number: "01",
    subtitle: "First Diamond",
    title: "Doing the Right Thing",
    bodyOne:
      "Discover and Define — the experience strategy. Finding the right question before attempting any answer. Most AI projects skip this entirely. They jump to implementation with a solution in search of a problem. The result: tools deployed, teams unmotivated, ROI unrealised.",
    bodyTwo:
      "AIQUIRE will not let that happen. We challenge your brief. We interview the people leadership rarely speaks to. We surface the real opportunity — which is frequently different from the one you started with. The extra days invested here save months of failed implementation.",
    tags: ["Discover", "Define"],
    tagClass:
      "text-[#ce2124] bg-white border border-[#ce2124]/30",
  },
  {
    number: "02",
    subtitle: "Second Diamond",
    title: "Doing Things Right",
    bodyOne:
      "Develop and Deliver — the experience design. Finding the right answer to a problem you have now precisely defined. With the first diamond complete, this phase is dramatically more effective. The tools get configured correctly. The training sticks. The teams adopt.",
    bodyTwo:
      "This is where the implementations happen. But they land faster, better, and longer because they are built on a foundation of genuine understanding. Teams adopt the AI because the AI solves a problem they recognise as real — because they helped define it.",
    tags: ["Develop", "Deliver"],
    tagClass:
      "text-[#ce2124] bg-white border border-[#ce2124]/30",
  },
] as const;

const diagramLabels = {
  pointA: ["A", "Don't know", "Could be"],
  pointB: ["B", "Do know", "Should be"],
  motions: ["DIVERGING", "CONVERGING", "DIVERGING", "CONVERGING"],
  names: ["DISCOVER", "DEFINE", "DEVELOP", "DELIVER"],
  micro: [
    "Primary Research",
    "Secondary Research",
    "Build Themes",
    "Find Insights",
    "HMW Questions",
    "Ideate",
    "Evaluate Ideas",
    "Prototype & Test",
    "Learn & Iterate",
    "Build & Release",
    "Research Phase",
    "↓ Synthesis",
    "Ideation Phase",
  ],
} as const;

export const metadata: Metadata = {
  title: "Our Methodology — AIQUIRE",
  description:
    "Most AI projects fail in the first meeting — when someone says \"let's implement AI\" before anyone has defined the problem.",
  alternates: { canonical: "/our-methodology" },
};

export default function MethodologyPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <Eyebrow>Our Methodology</Eyebrow>
              <h1 className="mt-6 font-display font-bold text-5xl sm:text-6xl md:text-8xl text-[#100d0d] leading-[0.95] tracking-tight">
                Think Before You <span className="text-[#ce2124]">Build.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[#514f4f]">
                Most AI projects fail in the first meeting — when someone says
                &quot;let&apos;s implement AI&quot; before anyone has defined the
                problem. AIQUIRE starts differently. Every engagement is anchored in
                a structured Design Thinking process: four phases, two diamonds, one
                direction of travel.
              </p>
              <div className="mx-auto mt-10 inline-block rounded-r-md border-l-4 border-[#ce2124] bg-[#ce2124]/5 px-6 py-5 text-left text-lg font-medium leading-relaxed text-[#100d0d] shadow-sm">
                70% of enterprise AI projects stall. Not because AI fails.
                <br />
                <span className="text-[#ce2124]">Because implementation ignored how the business actually works.</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 2. Failure Mode Section */}
      <SectionWrapper alt>
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollAnimation>
            <div>
              <Eyebrow>Why Method Matters</Eyebrow>
              <h2 className="mt-6 font-display font-bold text-4xl md:text-5xl text-[#100d0d] leading-tight tracking-tight">
                The Classic Failure Mode
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-[#514f4f]">
                The pattern is always the same. Tools get selected before problems
                are defined. Teams go live before they&apos;re trained. Governance
                arrives after the incident. The consultant leaves. Adoption
                collapses. This isn&apos;t a technology failure. It&apos;s a
                methodology failure — and it&apos;s entirely preventable.
              </p>
            </div>
          </ScrollAnimation>
          <div className="space-y-8">
            {stats.map((s, i) => (
              <ScrollAnimation key={s.title} delay={i * 0.1}>
                <div className="flex gap-6 bg-white p-6 rounded-xl border border-[#e6e4e2] shadow-sm">
                  <p className="w-24 shrink-0 font-display text-5xl font-bold text-[#ce2124]">
                    {s.value}
                  </p>
                  <div className="pt-1">
                    <h3 className="font-bold text-[#100d0d] text-lg mb-1">
                      {s.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#514f4f]">
                      {s.body}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3. The Framework Section */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="mx-auto max-w-4xl text-center mb-16">
            <Eyebrow>The Framework</Eyebrow>
            <h2 className="mt-6 font-display font-bold text-4xl md:text-5xl text-[#100d0d] leading-tight tracking-tight">
              The Double Diamond.
              <br />
              Applied to AI Adoption.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[#514f4f]">
              AIQUIRE&apos;s methodology is built on the Revamped Double Diamond
              — adapted from the British Design Council&apos;s model by Dan
              Nessler and refined through years of practice. One clear goal: get
              your organisation from Point A to Point B by doing the right things before doing things
              right.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="mt-14 rounded-2xl border border-[#e6e4e2] bg-white p-8 md:p-12 shadow-sm">
            {/* Visual Diagram as Hero of this section */}
            <div className="mb-12">
              <div className="rounded-xl overflow-hidden border border-[#e6e4e2] bg-white shadow-lg">
                <div className="p-4 border-b border-[#e6e4e2] bg-white flex justify-between items-center">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7d7d7d]">Reference · Revamped Double Diamond</p>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ce2124] bg-[#ce2124]/10 px-2 py-0.5 rounded">Dan Nessler Model</span>
                </div>
                <img
                  src="/images/methodology-dd-nessler.jpg"
                  alt="The Revamped Double Diamond by Dan Nessler"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#e6e4e2] p-8 shadow-inner">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4">
                {phaseTabs.map((p, i) => (
                  <div key={p.number} className="px-2">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7d7d7d] mb-1">
                      {p.number}
                    </p>
                    <p className="font-display text-2xl font-bold text-[#100d0d]">
                      {p.name}
                    </p>
                    <p
                      className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#ce2124] bg-white border border-[#ce2124]/30 rounded px-2 py-0.5 inline-block"
                    >
                      {p.mode}
                    </p>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-[#514f4f]">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollAnimation key={item.title} delay={i * 0.1}>
                <article
                  className="rounded-xl border border-[#e6e4e2] bg-white p-8 shadow-sm h-full hover:shadow-md transition-shadow"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-[#e6e4e2] text-[#ce2124] shadow-sm">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#100d0d] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#514f4f]">
                    {item.body}
                  </p>
                </article>
              </ScrollAnimation>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 4. Motion Section */}
      <SectionWrapper alt>
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <Eyebrow>How the Motion Works</Eyebrow>
              <h2 className="mt-6 font-display font-bold text-4xl md:text-5xl text-[#100d0d] leading-tight tracking-tight">
                Every Phase Either Opens Up
                <br />
                or Narrows Down
              </h2>
              <p className="mt-8 mx-auto max-w-3xl text-lg leading-relaxed text-[#514f4f]">
                The Double Diamond alternates between two modes of thinking.
                Getting these phases in the right sequence is what separates a
                workshop that generates noise from one that generates decisions.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-8 lg:grid-cols-2">
            {divergeConverge.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollAnimation key={card.title} delay={i * 0.1}>
                  <article
                    className="rounded-xl border border-[#e6e4e2] bg-white p-8 shadow-sm h-full hover:shadow-md transition-shadow"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-[#e6e4e2] text-[#ce2124] shadow-sm">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#7d7d7d]">
                          {card.subtitle}
                        </p>
                        <h3 className="font-display text-3xl font-bold text-[#100d0d] tracking-tight">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-[#514f4f]">
                        {card.bodyOne}
                      </p>
                      <p className="text-base leading-relaxed text-[#514f4f]">
                        {card.bodyTwo}
                      </p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded px-3 py-1 text-xs font-bold uppercase tracking-widest ${card.modeClass}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Step by Step Phases */}
      <SectionWrapper>
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 grid gap-16 lg:grid-cols-2 lg:items-start">
            <ScrollAnimation>
              <div>
                <Eyebrow>Step by Step</Eyebrow>
                <h2 className="mt-6 font-display font-bold text-4xl md:text-5xl text-[#100d0d] leading-tight tracking-tight">
                  The Four Phases in
                  <br />
                  an AIQUIRE Engagement
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-[#514f4f]">
                  The framework maps directly onto every activity in a real
                  AIQUIRE engagement. Here is what each phase looks like in
                  practice — from the first discovery call to post-deployment
                  optimisation and the 90-day review.
                </p>
                <div className="mt-12 grid grid-cols-[1fr_auto_1fr] items-center rounded-xl border border-[#e6e4e2] bg-white p-8 text-center shadow-sm">
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#7d7d7d] mb-2">
                      Starting Point
                    </p>
                    <p className="font-display text-3xl font-bold text-[#ce2124]">
                      Point A
                    </p>
                    <p className="text-sm font-medium text-[#514f4f] mt-1">Don&apos;t know · Could be</p>
                  </div>
                  <div className="text-3xl text-[#e6e4e2] px-4">→</div>
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#7d7d7d] mb-2">
                      Destination
                    </p>
                    <p className="font-display text-3xl font-bold text-[#ce2124]">
                      Point B
                    </p>
                    <p className="text-sm font-medium text-[#514f4f] mt-1">Do know · Should be</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <div className="rounded-xl border border-[#e6e4e2] bg-white p-8 shadow-sm">
                <p className="mb-8 font-mono text-xs font-bold uppercase tracking-widest text-[#7d7d7d]">
                  Quick Reference
                </p>
                <div className="space-y-6">
                  {quickReference.map(([n, name, desc]) => (
                    <div key={n} className="flex items-center gap-4">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full font-display font-bold text-lg border-2 text-[#ce2124] border-[#ce2124]/30 bg-white"
                      >
                        {n}
                      </div>
                      <div>
                        <p
                          className="text-xs font-bold uppercase tracking-widest leading-none mb-1 text-[#ce2124]"
                        >
                          {name}
                        </p>
                        <p className="text-sm font-medium text-[#100d0d]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="space-y-12">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              const converging = phase.mode.includes("Converging");
              return (
                <ScrollAnimation key={phase.name} delay={i * 0.05}>
                  <article
                    className="rounded-2xl border border-[#e6e4e2] bg-white p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="mb-8 flex flex-wrap items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white border border-[#e6e4e2] text-[#ce2124] shadow-sm">
                        <Icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-sm font-bold text-[#ce2124]">
                            {phase.number}
                          </span>
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#7d7d7d]">
                            {phase.phase}
                          </span>
                        </div>
                        <h3 className="font-display text-4xl font-bold text-[#100d0d] tracking-tight">
                          {phase.name}
                        </h3>
                      </div>
                      <div className="ml-auto">
                        <span
                          className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ce2124] bg-white border border-[#ce2124]/30"
                        >
                          {phase.mode}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm font-bold uppercase tracking-widest text-[#ce2124]/80 mb-6">
                      {phase.subtitle}
                    </p>

                    <div className="grid lg:grid-cols-5 gap-12">
                      <div className="lg:col-span-3 space-y-6">
                        <p className="text-lg leading-relaxed text-[#514f4f]">
                          {phase.bodyOne}
                        </p>
                        <p className="text-base leading-relaxed text-[#514f4f]">
                          {phase.bodyTwo}
                        </p>
                        <div className="pt-6 border-t border-[#e6e4e2]">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7d7d7d] mb-4">
                            Key Steps & Activities
                          </p>
                          <ul className="space-y-4">
                            {phase.steps.map((step) => (
                              <li key={step} className="flex gap-4 text-base leading-relaxed text-[#514f4f]">
                                <span className="text-[#ce2124] font-bold">→</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl border border-[#e6e4e2] p-8 h-full">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7d7d7d] mb-6">
                            Phase Output
                          </p>
                          <div className="space-y-4">
                            {phase.output.split(' · ').map((out, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-[#100d0d] font-semibold">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ce2124]" />
                                {out}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. In Practice Mapping */}
      <SectionWrapper alt>
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <Eyebrow>In Practice</Eyebrow>
              <h2 className="mt-6 font-display font-bold text-4xl md:text-5xl text-[#100d0d] leading-tight tracking-tight">
                How Each Phase Maps to
                <br />
                a Real AIQUIRE Engagement
              </h2>
              <p className="mt-8 mx-auto max-w-3xl text-lg leading-relaxed text-[#514f4f]">
                The framework is not abstract. Every AIQUIRE service is anchored in
                a specific phase. Here is what you can expect at each stage.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid overflow-hidden rounded-2xl border border-[#e6e4e2] bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {mapping.map((m, i) => (
              <ScrollAnimation key={m.phase} delay={i * 0.05} className="h-full">
                <article
                  className={`p-10 h-full flex flex-col ${i < mapping.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-[#e6e4e2]"
                    : ""
                    } hover:bg-white transition-colors`}
                >
                  <div className="mb-6">
                    <span
                      className={`inline-block rounded px-3 py-1 text-xs font-bold uppercase tracking-widest ${m.modeClass}`}
                    >
                      {m.mode}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[#100d0d] tracking-tight">{m.phase}</h3>
                  <div className="my-6 h-1 w-10 bg-[#ce2124]" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#7d7d7d] mb-2">
                    AIQUIRE Activity
                  </p>
                  <p className="text-base font-bold text-[#100d0d] leading-tight mb-4">{m.service}</p>
                  <p className="mt-auto text-sm leading-relaxed text-[#514f4f]">
                    {m.desc}
                  </p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Macro Goals */}
      <SectionWrapper>
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <Eyebrow>The Two Macro Goals</Eyebrow>
              <h2 className="mt-6 font-display font-bold text-4xl md:text-5xl text-[#100d0d] leading-tight tracking-tight">
                Strategy First. Execution Second.
                <br />
                In That Order. Always.
              </h2>
              <p className="mt-8 mx-auto max-w-3xl text-lg leading-relaxed text-[#514f4f]">
                The Double Diamond splits into two macro goals. Getting this
                sequence right is the single most important thing AIQUIRE does
                differently from consultancies that skip straight to implementation.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-8 lg:grid-cols-2">
            {goals.map((g, i) => (
              <ScrollAnimation key={g.title} delay={i * 0.1}>
                <article
                  className="rounded-2xl border border-[#e6e4e2] bg-white p-10 shadow-sm h-full hover:shadow-md transition-shadow"
                >
                  <div className="mb-8">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#7d7d7d] mb-2">{g.subtitle}</p>
                    <h3 className="font-display text-4xl font-bold text-[#100d0d] tracking-tight">{g.title}</h3>
                  </div>
                  <div className="space-y-6 mb-8">
                    <p className="text-base leading-relaxed text-[#514f4f] font-medium">
                      {g.bodyOne}
                    </p>
                    <p className="text-base leading-relaxed text-[#514f4f]">
                      {g.bodyTwo}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded px-3 py-1 text-xs font-bold uppercase tracking-widest ${g.tagClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. Quote Section */}
      <section className="bg-[#ce2124] px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <ScrollAnimation>
            <blockquote className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              &quot;We don&apos;t arrive with the answer. We surface it with you —
              then we build it fast.&quot;
            </blockquote>
            <cite className="mt-8 block text-sm font-medium not-italic text-white/80 uppercase tracking-widest">
              AIQUIRE Consulting Principle
              <br />
              <span className="text-xs opacity-70 mt-2 block lowercase font-normal">Applied to every engagement, from a one-week AI Starter Sprint to a twelve-week Transformation</span>
            </cite>
          </ScrollAnimation>
        </div>
      </section>

      {/* 9. Final CTA */}
      <ScrollAnimation>
        <div className="bg-white border-t border-[#e6e4e2]">
          <CTASection
            headline="See the Methodology in Action"
            description="Every AIQUIRE engagement begins with a 30-minute discovery call — not a sales pitch, but a structured conversation to understand your business and recommend the right starting point."
            ctaLabel="Talk to an AI Consultant"
          />
        </div>
      </ScrollAnimation>
    </>
  );
}
