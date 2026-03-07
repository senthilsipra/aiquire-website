import type { Metadata } from "next";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";

export const metadata: Metadata = {
    title: "Terms of Service — AIQUIRE",
    description: "Our terms and conditions of service.",
    alternates: { canonical: "/terms" },
};

export default function TermsOfServicePage() {
    return (
        <SectionWrapper>
            <ScrollAnimation>
                <div className="pt-12 md:pt-20 pb-8 max-w-4xl mx-auto">
                    <Eyebrow>Legal</Eyebrow>
                    <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#100d0d] tracking-tight">
                        Terms of Service
                    </h1>
                    <p className="mt-6 text-sm text-[#7d7d7d]">
                        Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>

                    <div className="mt-12 space-y-8 prose prose-gray max-w-none text-[#514f4f] leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the AIQUIRE website and engaging our consulting services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">2. Description of Services</h2>
                            <p>
                                AIQUIRE provides AI adoption consulting, strategy, implementation, and training services. The specific deliverables, timelines, and costs of our services (such as "AI Starter Sprint" or "AI Transformation Packages") will be outlined in separate, mutual statements of work (SOWs) or proposals agreed upon by both parties prior to commencement of work.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">3. Intellectual Property</h2>
                            <p>
                                All content, trademarks, methodologies, and training materials presented on this website are the intellectual property of AIQUIRE and Siprahub, unless otherwise noted. Our AI implementation deliverables and custom code transfers will be governed by the specific terms laid out in individual service agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">4. Limitation of Liability</h2>
                            <p>
                                While we strive to ensure the successful implementation of AI technologies, AIQUIRE is not liable for indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our services or website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">5. Governing Law</h2>
                            <p>
                                These Terms shall be governed and construed in accordance with applicable corporate law, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">6. Changes to Terms</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">7. Contact Information</h2>
                            <p>
                                Questions about the Terms of Service should be sent to us via our <a href="/contact" className="text-[#002329] underline hover:text-[#001a1f]">contact page</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </ScrollAnimation>
        </SectionWrapper>
    );
}
