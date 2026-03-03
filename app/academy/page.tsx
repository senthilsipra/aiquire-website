import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";
import CardProgramme from "@/components/aiquire/CardProgramme";
import CardInverted from "@/components/aiquire/CardInverted";
import CTASection from "@/components/aiquire/CTASection";
import HeroAcademy from "@/components/aiquire/illustrations/HeroAcademy";

export const metadata: Metadata = {
  title: "AI Academy — AIQUIRE",
  description:
    "Technology without capability is a liability. The AIQUIRE AI Academy ensures your people don't just have AI tools — they know how to use them, champion them, and govern them.",
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "AI Academy — AIQUIRE",
    description:
      "Training that sticks, delivered by practitioners who've done the work. AI Literacy, Hands-On Training, Champions Program, and Policy Development.",
    url: "/academy",
  },
};

const programmes = [
  {
    code: "ADP-070",
    name: "AI Literacy Workshop",
    description:
      "A half-day executive session on AI capabilities, risks, and strategic opportunities. Designed for leadership teams who need to make informed decisions about AI investment without becoming technologists. Practical, provocative, and grounded in real business cases.",
    format: "Half-day workshop, in-person or virtual",
    audience: "C-suite, board, senior leadership",
    deliverables: [
      "Workshop materials",
      "Recording",
      "Resource guide",
      "Q&A session",
    ],
  },
  {
    code: "ADP-071",
    name: "AI Tools Hands-On Training",
    description:
      "Practical training on prompt engineering and the AI tools your team is already using — ChatGPT, Claude, Copilot, and more. Participants leave with a personal prompt library, best practice cheat sheets, and the confidence to use AI daily.",
    format: "1–2 day intensive, in-person or virtual",
    audience: "All staff, function-specific cohorts",
    deliverables: [
      "Training sessions",
      "Prompt libraries",
      "Cheat sheets",
      "Completion certificates",
    ],
  },
  {
    code: "ADP-073",
    name: "AI Policy & Guidelines Development",
    description:
      "Before your team goes all-in on AI tools, you need the guardrails. We create your acceptable use policy, security guidelines, data handling rules, and approval workflows — practical documentation that balances governance with usability.",
    format: "2–3 weeks",
    audience: "Leadership, legal, HR, IT",
    deliverables: [
      "AI acceptable use policy",
      "Security guidelines",
      "Approval workflows",
    ],
  },
];

export default function AcademyPage() {
  return (
    <>
      {/* 1. Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="pt-12 md:pt-20 pb-8">
            <Eyebrow>AI Academy</Eyebrow>
            <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-7xl text-[#0d0d0d] tracking-tight">
              Build AI Capability Inside
              <br />
              Your Organisation.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#404040] max-w-2xl">
              Technology without capability is a liability. The AIQUIRE AI
              Academy ensures your people don&rsquo;t just have AI tools &mdash;
              they know how to use them, champion them, and govern them.
              Training that sticks, delivered by practitioners who&rsquo;ve
              done the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex bg-[#5cf28e] text-[#0d0d0d] rounded-full px-8 py-3 text-sm font-medium hover:bg-[#002329] hover:text-white transition-colors"
              >
                Talk to an AI Consultant
              </Link>
              <Link
                href="/packages"
                className="inline-flex border border-[#002329] text-[#0d0d0d] rounded-full px-8 py-3 text-sm font-medium hover:bg-[#002329] hover:text-white transition-colors"
              >
                See Our Packages
              </Link>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.15}>
          <div className="rounded-2xl overflow-hidden bg-[#f5f5f5] mt-4">
            <HeroAcademy />
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 2. Context */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>The Capability Gap</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            Tools without training are a liability.
          </h2>
          <blockquote className="mt-8 pl-6 border-l-4 border-[#002329]">
            <p className="font-display font-bold text-xl md:text-2xl text-[#0d0d0d] leading-snug">
              The organisations winning with AI have one thing in common:
              internal AI champions who drive adoption from within.
            </p>
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-[#404040] max-w-3xl">
            Most AI investments fail not because of the technology, but because
            teams are left to figure it out alone. Subscriptions get purchased.
            Licences go unused. Leadership loses confidence. The AIQUIRE AI
            Academy changes that equation by building the internal capability
            that makes every other AI investment stick.
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* 3. Featured — AI Champions Program */}
      <SectionWrapper>
        <ScrollAnimation>
          <Eyebrow>Training Programmes</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            From literacy to leadership.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#404040] max-w-3xl">
            Four structured programmes designed to build AI capability at every
            level of your organisation &mdash; from the boardroom to the
            frontline.
          </p>
        </ScrollAnimation>

        {/* Featured: AI Champions Program */}
        <ScrollAnimation delay={0.1}>
          <div className="mt-12">
            <CardInverted
              eyebrow="ADP-072 — Flagship Programme"
              title="AI Champions Program"
              description="A 4–6 week programme to develop internal AI power users who will drive adoption across your organisation. Champions get deeper training, playbooks, ongoing AIQUIRE support, and a community to learn from each other. This is your internal AI movement, not just a training exercise."
              list={[
                "Champion training and certification",
                "Custom AI playbooks per department",
                "Ongoing AIQUIRE support during and after",
                "Slack/Teams community setup",
                "Best for Mid-Market organisations scaling AI across departments",
              ]}
              ctaLabel="Enquire About Champions"
              ctaHref="/contact"
            />
          </div>
        </ScrollAnimation>

        {/* Other 3 programmes */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {programmes.map((prog, i) => (
            <ScrollAnimation key={prog.code} delay={i * 0.1}>
              <CardProgramme
                code={prog.code}
                track="Academy"
                name={prog.name}
                format={prog.format}
                duration={prog.format}
                audience={prog.audience}
                whatYouLearn={[prog.description]}
                deliverables={prog.deliverables}
                className="h-full"
              />
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. How We Train */}
      <SectionWrapper alt>
        <ScrollAnimation>
          <Eyebrow>Our Methodology</Eyebrow>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl text-[#0d0d0d]">
            How We Train
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#404040] max-w-3xl">
            AIQUIRE&rsquo;s training methodology is rooted in Design Thinking
            principles: experiential, iterative, and human-centred. We
            don&rsquo;t lecture. We facilitate. Sessions are built around your
            actual tools, your actual workflows, and real problems from your
            business. Participants leave with outputs they can use on Monday
            morning, not slides they&rsquo;ll never open again.
          </p>
        </ScrollAnimation>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              name: "Experiential",
              desc: "Every session uses real tools, real scenarios, and real outputs — not hypothetical exercises.",
            },
            {
              step: "02",
              name: "Iterative",
              desc: "We build on what participants already know and layer capability progressively across sessions.",
            },
            {
              step: "03",
              name: "Human-centred",
              desc: "Training is tailored to roles, workflows, and the specific AI tools your team uses every day.",
            },
          ].map((item, i) => (
            <ScrollAnimation key={item.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm p-6 h-full">
                <span className="text-[#e5e5e5] font-bold text-4xl leading-none">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display font-bold text-lg text-[#0d0d0d]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#404040]">
                  {item.desc}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. CTA */}
      <ScrollAnimation>
        <CTASection
          headline="Build the AI capability your organisation needs."
          ctaLabel="Talk to an AI Consultant"
        />
      </ScrollAnimation>
    </>
  );
}
