import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { SERVICES, getService } from "@/lib/services"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.bykorp.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.bykorp.com/services/${service.slug}`,
      siteName: "Bykorp",
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  // JSON-LD Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "Bykorp",
      url: "https://www.bykorp.com",
    },
    areaServed: {
      "@type": "City",
      name: "Dhaka",
      containedInPlace: {
        "@type": "Country",
        name: "Bangladesh",
      },
    },
    description: service.metaDescription,
    url: `https://www.bykorp.com/services/${service.slug}`,
  }

  // JSON-LD FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-brand-bg">
        {/* Hero */}
        <div className="bg-brand-primary text-white py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold tracking-tight mb-6 leading-tight">
              {service.heroHeadline}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
              {service.heroSubtext}
            </p>
            <div className="mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                {service.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 space-y-16">
          {service.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-brand-primary mb-6">
                {section.heading}
              </h2>
              <p className="text-brand-secondary leading-relaxed mb-6 text-lg">
                {section.content}
              </p>
              {section.bullets && (
                <ul className="space-y-4">
                  {section.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-brand-secondary leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-brand-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-brand-accent/15 overflow-hidden shadow-sm"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-base font-bold text-brand-primary pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-brand-accent shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-brand-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="p-8 md:p-12 bg-brand-primary rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Let Bykorp help your business grow with expert {service.title.toLowerCase()} services.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-colors"
            >
              {service.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
