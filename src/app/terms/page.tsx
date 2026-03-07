import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Bykorp",
    description: "Terms of Service for Bykorp digital agency services.",
}

export default function TermsPage() {
    const lastUpdated = "March 7, 2026"

    return (
        <main className="min-h-screen bg-brand-bg">
            {/* Header */}
            <div className="bg-brand-primary text-white py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
                    >
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-montserrat font-bold tracking-tight mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
                <div className="prose-container space-y-12">

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">1. Agreement to Terms</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            By accessing or using Bykorp&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of Bykorp.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">2. Services</h2>
                        <p className="text-brand-secondary leading-relaxed mb-4">
                            Bykorp provides digital infrastructure services including but not limited to web development, AI automation, web design, digital marketing, SEO, social media management, local SEO, and content creation. The specific scope of services will be outlined in individual project agreements.
                        </p>
                        <p className="text-brand-secondary leading-relaxed">
                            We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice to active clients.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">3. Client Responsibilities</h2>
                        <ul className="space-y-3 text-brand-secondary leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>Provide accurate and complete information necessary for service delivery.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>Review and provide timely feedback on deliverables within agreed timelines.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>Ensure that any content or materials provided to Bykorp do not infringe on third-party intellectual property rights.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>Maintain the confidentiality of any account credentials provided.</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">4. Intellectual Property</h2>
                        <p className="text-brand-secondary leading-relaxed mb-4">
                            Upon full payment, clients receive ownership of the final deliverables as outlined in their project agreement. Bykorp retains the right to showcase completed work in our portfolio unless otherwise agreed in writing.
                        </p>
                        <p className="text-brand-secondary leading-relaxed">
                            All proprietary tools, frameworks, and methodologies developed by Bykorp remain our intellectual property and are licensed, not sold, to clients as part of the service delivery.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">5. Payment Terms</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            Payment terms, including amounts, milestones, and schedules, will be defined in individual project proposals. Unless otherwise stated, invoices are due within 14 days of issuance. Late payments may result in suspension of services until the outstanding balance is cleared.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">6. Limitation of Liability</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            Bykorp shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client for the specific service in question. We do not guarantee specific results from marketing, SEO, or advertising campaigns.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">7. Termination</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            Either party may terminate a service agreement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date. Bykorp will provide all completed deliverables and any necessary transition support.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">8. Changes to Terms</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            We reserve the right to update these terms at any time. Material changes will be communicated to active clients via email. Continued use of our services after changes constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">9. Contact</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            For questions about these Terms of Service, please contact us at{" "}
                            <Link href="mailto:info@bykorp.com" className="text-brand-primary font-semibold hover:underline">
                                info@bykorp.com
                            </Link>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
