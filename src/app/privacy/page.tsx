import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Bykorp",
    description: "Privacy Policy for Bykorp — how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
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
                        Privacy Policy
                    </h1>
                    <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
                <div className="prose-container space-y-12">

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">1. Information We Collect</h2>
                        <p className="text-brand-secondary leading-relaxed mb-4">
                            We collect information you provide directly to us when using our services or website. This includes:
                        </p>
                        <ul className="space-y-3 text-brand-secondary leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span><strong className="text-brand-primary">Contact Information:</strong> Name, email address, phone number, and company name submitted through our contact form.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span><strong className="text-brand-primary">Project Details:</strong> Information about your business and project requirements shared during consultations.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span><strong className="text-brand-primary">Usage Data:</strong> Anonymous analytics data about how visitors interact with our website, including pages visited and time spent.</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">2. How We Use Your Information</h2>
                        <ul className="space-y-3 text-brand-secondary leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>To respond to your inquiries and provide the services you request.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>To communicate with you about project updates, deliverables, and relevant information.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>To improve our website and services based on usage patterns.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>To send occasional updates about our services (you can opt out at any time).</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">3. Data Protection</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. All contact form submissions are processed through encrypted channels. We do not store sensitive payment information on our servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">4. Third-Party Services</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            Our website may use third-party services for analytics, form processing, and hosting. These services have their own privacy policies governing data handling. We use Web3Forms for contact form submissions, which processes data securely without storing it on third-party servers beyond delivery.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">5. Cookies</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            Our website uses essential cookies required for basic functionality. We do not use tracking cookies or sell data to advertisers. Any analytics we collect are anonymized and used solely to improve user experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">6. Your Rights</h2>
                        <p className="text-brand-secondary leading-relaxed mb-4">You have the right to:</p>
                        <ul className="space-y-3 text-brand-secondary leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>Request access to the personal data we hold about you.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>Request correction or deletion of your personal data.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>Opt out of any marketing communications at any time.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                                <span>Request a copy of your data in a portable format.</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">7. Data Retention</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            We retain client data for the duration of our business relationship and for a reasonable period afterward for legal and business purposes. Contact form submissions are retained for up to 12 months unless you request earlier deletion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">8. Changes to This Policy</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            We may update this Privacy Policy from time to time. Any significant changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-bold text-brand-primary mb-4">9. Contact Us</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            If you have any questions or concerns about this Privacy Policy or how we handle your data, reach out to us at{" "}
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
