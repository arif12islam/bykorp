export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bykorp",
    url: "https://www.bykorp.com",
    logo: "https://www.bykorp.com/bykorp_logo.png",
    description:
      "Bykorp is a full-service digital agency specializing in web development, AI automation, SEO, and digital marketing.",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@bykorp.com",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: [],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bykorp",
    url: "https://www.bykorp.com",
    logo: "https://www.bykorp.com/bykorp_logo.png",
    description:
      "Bykorp is a full-service digital agency offering web development, AI automation, web design, digital marketing, SEO, social media management, local SEO, and content strategy.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "Custom web applications built with Next.js for maximum performance and SEO." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation", description: "Intelligent automation systems including chatbots, lead scoring, and workflow optimization." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design", description: "Pixel-perfect, conversion-optimized UI/UX design for modern businesses." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing", description: "Data-driven marketing campaigns across search, social, and display channels." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Optimization", description: "Technical and content SEO strategies that improve Google rankings and organic traffic." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management", description: "Strategic social media content, community management, and paid social campaigns." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO", description: "Google Maps optimization, local citations, and review management for local businesses." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Strategy", description: "Authority-building content marketing that converts readers into customers." } },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bykorp",
    url: "https://www.bykorp.com",
    description:
      "Bykorp is a full-service digital agency delivering web development, AI automation, SEO, and digital marketing solutions.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.bykorp.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
