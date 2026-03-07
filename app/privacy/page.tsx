import type { Metadata } from "next";
import SectionWrapper from "@/components/aiquire/SectionWrapper";
import ScrollAnimation from "@/components/aiquire/ScrollAnimation";
import Eyebrow from "@/components/aiquire/Eyebrow";

export const metadata: Metadata = {
    title: "Privacy Policy — AIQUIRE",
    description: "Our commitment to your privacy and data security.",
    alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
    return (
        <SectionWrapper>
            <ScrollAnimation>
                <div className="pt-12 md:pt-20 pb-8 max-w-4xl mx-auto">
                    <Eyebrow>Legal</Eyebrow>
                    <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#100d0d] tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="mt-6 text-sm text-[#7d7d7d]">
                        Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>

                    <div className="mt-12 space-y-8 prose prose-gray max-w-none text-[#514f4f] leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">1. Introduction</h2>
                            <p>
                                AIQUIRE ("we," "our," or "us") is committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information we collect through our website and consulting services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">2. Information We Collect</h2>
                            <p>We may collect the following types of information:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and company details when you fill out contact forms or engage our services.</li>
                                <li><strong>Usage Data:</strong> Information on how you interact with our website, including IP addresses, browser types, and pages visited.</li>
                                <li><strong>Service Data:</strong> Information provided during consulting engagements, subject strictly to our Non-Disclosure Agreements (NDAs).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">3. How We Use Your Information</h2>
                            <p>Your information is used to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>Provide, operate, and maintain our consulting services.</li>
                                <li>Respond to inquiries, provide proposals, and communicate with you about your projects.</li>
                                <li>Improve our website functionality and user experience.</li>
                                <li>Send administrative information, such as changes to our terms, conditions, and policies.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">4. Data Security</h2>
                            <p>
                                As part of Siprahub, we take data security very seriously. We implement enterprise-grade security measures designed to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet-based service can be completely 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">5. Third-Party Disclosures</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except for trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-[#100d0d] mb-4">6. Contact Us</h2>
                            <p>
                                If you have any questions regarding this Privacy Policy, you may contact us via our <a href="/contact" className="text-[#002329] underline hover:text-[#001a1f]">contact page</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </ScrollAnimation>
        </SectionWrapper>
    );
}
