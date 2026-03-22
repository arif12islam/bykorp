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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
