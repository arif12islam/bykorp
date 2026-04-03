export interface ServicePage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  heroHeadline: string
  heroSubtext: string
  sections: {
    heading: string
    content: string
    bullets?: string[]
  }[]
  faqs: { question: string; answer: string }[]
  cta: string
}

export const SERVICES: ServicePage[] = [
  {
    slug: "web-development-dhaka",
    title: "Web Development",
    metaTitle: "Web Development Agency in Dhaka, Bangladesh — Bykorp",
    metaDescription: "Bykorp is a leading web development agency in Dhaka, Bangladesh. We build fast, SEO-optimized websites and web applications using Next.js, React, and modern frameworks.",
    heroHeadline: "Web Development Agency in Dhaka",
    heroSubtext: "Bykorp builds blazing-fast, SEO-optimized websites and custom web applications for businesses in Dhaka, Bangladesh, and worldwide.",
    sections: [
      {
        heading: "Why Choose Bykorp for Web Development in Dhaka?",
        content: "Bykorp is a Dhaka-based web development agency that engineers high-performance websites using Next.js — the same framework powering Netflix, TikTok, and Nike. Unlike traditional WordPress agencies, every site we build is custom-coded for speed, security, and search engine visibility.",
        bullets: [
          "Custom Next.js & React web applications",
          "Sub-second page load times with server-side rendering",
          "Mobile-first responsive design for every device",
          "SEO-optimized architecture baked into every page",
          "Scalable solutions from startup MVPs to enterprise platforms",
        ],
      },
      {
        heading: "Our Web Development Process",
        content: "Every Bykorp web development project follows a rigorous 4-phase workflow designed to eliminate guesswork and deliver predictable results.",
        bullets: [
          "Discovery & Strategy — understanding your business goals and target audience",
          "Design & Prototyping — pixel-perfect mockups with usability testing",
          "Development & QA — clean, tested code with CI/CD pipelines",
          "Launch & Optimization — performance monitoring and ongoing improvements",
        ],
      },
      {
        heading: "Technologies We Use",
        content: "Bykorp's engineering team works with the most in-demand technologies in modern web development.",
        bullets: [
          "Next.js 14+ with App Router and React Server Components",
          "TypeScript for type-safe, maintainable codebases",
          "Tailwind CSS for rapid, consistent styling",
          "PostgreSQL and Prisma ORM for robust data layers",
          "Vercel and AWS for reliable cloud hosting",
        ],
      },
    ],
    faqs: [
      { question: "How much does web development cost in Dhaka?", answer: "Bykorp's web development projects start from ৳50,000 BDT for landing pages and scale based on complexity. Custom web applications are quoted after a free discovery call." },
      { question: "How long does it take to build a website?", answer: "A standard business website takes 2-4 weeks. Complex web applications with custom features take 6-12 weeks depending on scope." },
      { question: "Do you provide ongoing maintenance?", answer: "Yes. Bykorp offers monthly maintenance and support plans to keep your website updated, secure, and performing at its best." },
    ],
    cta: "Get a Free Web Development Consultation",
  },
  {
    slug: "seo-agency-dhaka",
    title: "SEO Optimization",
    metaTitle: "SEO Agency in Dhaka, Bangladesh — Bykorp",
    metaDescription: "Bykorp is a results-driven SEO agency in Dhaka, Bangladesh. We help businesses rank higher on Google with technical SEO, content strategy, and link building.",
    heroHeadline: "SEO Agency in Dhaka, Bangladesh",
    heroSubtext: "Bykorp helps businesses in Dhaka and beyond rank higher on Google with data-driven SEO strategies that deliver measurable organic growth.",
    sections: [
      {
        heading: "Why Bykorp Is the SEO Agency Dhaka Businesses Trust",
        content: "Most SEO agencies sell promises. Bykorp delivers rankings. We combine technical SEO expertise with strategic content creation and ethical link building to move your website up in Google search results — and keep it there.",
        bullets: [
          "Comprehensive technical SEO audits and fixes",
          "Keyword research targeting buyer-intent search queries",
          "Content strategy and blog post creation for topical authority",
          "On-page optimization — meta tags, schema markup, internal linking",
          "Monthly ranking reports with transparent ROI tracking",
        ],
      },
      {
        heading: "Our SEO Process",
        content: "Bykorp's SEO methodology is built on data, not guesswork.",
        bullets: [
          "Audit — full crawl analysis, Core Web Vitals, indexation health",
          "Strategy — competitor gap analysis, keyword mapping, content roadmap",
          "Execution — on-page optimization, content creation, outreach",
          "Measurement — weekly ranking checks, traffic analysis, conversion tracking",
        ],
      },
      {
        heading: "SEO Results We Deliver",
        content: "Bykorp's SEO clients in Dhaka and globally see tangible improvements within the first 90 days.",
        bullets: [
          "50-100% increase in organic search traffic within 6 months",
          "Page 1 rankings for targeted long-tail keywords",
          "40% lower cost per lead compared to paid advertising",
          "Improved Core Web Vitals and Google PageSpeed scores",
        ],
      },
    ],
    faqs: [
      { question: "How long does SEO take to show results?", answer: "SEO is a long-term strategy. Most Bykorp clients see measurable ranking improvements within 3-6 months, with significant traffic growth by month 6-12." },
      { question: "Do you guarantee page 1 rankings?", answer: "No ethical SEO agency can guarantee specific rankings. What Bykorp guarantees is a data-driven process, transparent reporting, and consistent improvement in your organic visibility." },
      { question: "What's the difference between SEO and Local SEO?", answer: "SEO targets organic search results globally or nationally. Local SEO focuses on Google Maps and location-based searches like 'near me' queries. Bykorp offers both." },
    ],
    cta: "Request a Free SEO Audit",
  },
  {
    slug: "ai-automation-agency-dhaka",
    title: "AI Automation",
    metaTitle: "AI Automation Agency in Dhaka, Bangladesh — Bykorp",
    metaDescription: "Bykorp builds custom AI automation solutions for businesses in Dhaka, Bangladesh — from intelligent chatbots to automated workflows that save time and increase revenue.",
    heroHeadline: "AI Automation Agency in Dhaka",
    heroSubtext: "Bykorp makes AI accessible and profitable for businesses of every size. We build intelligent systems that automate operations, generate leads, and scale your revenue.",
    sections: [
      {
        heading: "AI Solutions Bykorp Builds for Dhaka Businesses",
        content: "Artificial intelligence isn't just for tech giants. Bykorp brings practical, ROI-focused AI automation to businesses in Dhaka and worldwide.",
        bullets: [
          "Custom AI chatbots trained on your business data",
          "Automated lead scoring and qualification systems",
          "AI-powered content generation pipelines",
          "Workflow automation to eliminate manual data entry",
          "Business intelligence dashboards with AI-driven insights",
        ],
      },
      {
        heading: "Why Choose Bykorp for AI Automation?",
        content: "What sets Bykorp apart is our focus on practical implementation. We don't just demo flashy AI — we build systems that integrate into your workflow and deliver ROI from day one.",
        bullets: [
          "Deep technical AI expertise paired with real business understanding",
          "Custom solutions — not off-the-shelf tools with monthly fees",
          "Seamless integration with your existing tech stack",
          "Ongoing support and model optimization",
        ],
      },
    ],
    faqs: [
      { question: "What types of businesses benefit from AI automation?", answer: "Any business with repetitive tasks, customer inquiries, or data processing can benefit. Bykorp has implemented AI solutions for e-commerce, healthcare, legal, and service businesses in Dhaka." },
      { question: "How much does AI automation cost?", answer: "Bykorp's AI projects are scoped individually. A simple chatbot starts from ৳80,000 BDT, while enterprise workflow automation is quoted after a discovery session." },
    ],
    cta: "Explore AI Automation for Your Business",
  },
  {
    slug: "digital-marketing-agency-dhaka",
    title: "Digital Marketing",
    metaTitle: "Digital Marketing Agency in Dhaka, Bangladesh — Bykorp",
    metaDescription: "Bykorp is a data-driven digital marketing agency in Dhaka, Bangladesh. We run SEO, PPC, social media, and content campaigns that generate leads and revenue.",
    heroHeadline: "Digital Marketing Agency in Dhaka",
    heroSubtext: "Bykorp builds data-driven marketing systems that generate qualified leads and measurable ROI for businesses in Dhaka, Bangladesh, and globally.",
    sections: [
      {
        heading: "Full-Spectrum Digital Marketing Services",
        content: "Bykorp covers every digital marketing channel your customers use — from Google search to social media feeds.",
        bullets: [
          "Search Engine Optimization (SEO) for organic traffic growth",
          "Google Ads and Facebook Ads management (PPC)",
          "Social media marketing and community management",
          "Content marketing and email campaign strategy",
          "Conversion rate optimization and A/B testing",
          "Analytics setup, tracking, and monthly reporting",
        ],
      },
      {
        heading: "Results Bykorp Delivers",
        content: "Every campaign Bykorp runs is measured against hard business metrics — not vanity numbers.",
        bullets: [
          "3-5x return on ad spend within the first 90 days",
          "50-100% organic traffic growth within 6 months",
          "40% lower cost per lead compared to industry averages",
          "Transparent monthly reports with revenue attribution",
        ],
      },
    ],
    faqs: [
      { question: "How much should I budget for digital marketing?", answer: "Bykorp recommends starting with at least ৳30,000-50,000 BDT/month for ad spend plus agency management fees. We optimize every taka for maximum ROI." },
      { question: "Which marketing channels work best?", answer: "It depends on your audience. Bykorp runs a discovery phase to identify the highest-ROI channels for your specific business before spending any budget." },
    ],
    cta: "Get Your Marketing Strategy",
  },
  {
    slug: "web-design-agency-dhaka",
    title: "Web Design",
    metaTitle: "Web Design Agency in Dhaka, Bangladesh — Bykorp",
    metaDescription: "Bykorp is a premium web design agency in Dhaka, Bangladesh. We create stunning, conversion-optimized websites with pixel-perfect UI/UX design and smooth animations.",
    heroHeadline: "Web Design Agency in Dhaka",
    heroSubtext: "Bykorp designs beautiful, conversion-focused websites that make your business unforgettable. Every pixel serves a purpose.",
    sections: [
      {
        heading: "Why Bykorp's Web Design Stands Out",
        content: "Great design isn't just about aesthetics — it's about business results. Bykorp creates interfaces that look stunning AND convert visitors into customers.",
        bullets: [
          "Custom UI/UX design — no generic templates",
          "Mobile-first responsive layouts for every screen size",
          "Micro-animations and smooth transitions with Framer Motion",
          "Conversion-centered design principles built into every page",
          "Brand identity integration — typography, colors, visual language",
        ],
      },
      {
        heading: "Our Design Process",
        content: "Bykorp follows a structured design workflow that eliminates guesswork and ensures client satisfaction.",
        bullets: [
          "Brand audit and competitor visual analysis",
          "Wireframing and information architecture",
          "High-fidelity mockups with interactive prototypes",
          "Usability testing before development begins",
          "Design handoff with pixel-perfect implementation",
        ],
      },
    ],
    faqs: [
      { question: "Do you redesign existing websites?", answer: "Yes. Bykorp specializes in both new website design and complete redesigns of existing sites that aren't performing." },
      { question: "What's the difference between web design and web development?", answer: "Web design focuses on the visual look, layout, and user experience. Web development turns those designs into functional, coded websites. Bykorp does both." },
    ],
    cta: "Start Your Website Design Project",
  },
  {
    slug: "social-media-management-dhaka",
    title: "Social Media Management",
    metaTitle: "Social Media Management Agency in Dhaka — Bykorp",
    metaDescription: "Bykorp provides strategic social media management in Dhaka, Bangladesh. We build brand presence, engage communities, and drive revenue through social channels.",
    heroHeadline: "Social Media Management in Dhaka",
    heroSubtext: "Bykorp builds social media strategies that turn followers into customers — not just vanity metrics.",
    sections: [
      {
        heading: "Strategic Social Media Services",
        content: "Bykorp manages your social media presence with a focus on business results, not just likes and shares.",
        bullets: [
          "Platform strategy — LinkedIn, Instagram, Facebook, TikTok",
          "Content calendar creation and management",
          "Community engagement and response management",
          "Paid social advertising and retargeting campaigns",
          "Monthly analytics and revenue attribution reports",
        ],
      },
    ],
    faqs: [
      { question: "Which social media platforms should my business be on?", answer: "Bykorp analyzes your target audience to recommend the platforms with the highest ROI. B2B businesses often thrive on LinkedIn, while B2C brands see results on Instagram and Facebook." },
      { question: "How often should we post on social media?", answer: "Bykorp typically recommends 3-5 posts per week per platform, plus daily community engagement. Quality and consistency matter more than frequency." },
    ],
    cta: "Build Your Social Media Presence",
  },
  {
    slug: "local-seo-services-dhaka",
    title: "Local SEO",
    metaTitle: "Local SEO Services in Dhaka, Bangladesh — Bykorp",
    metaDescription: "Bykorp provides Local SEO services in Dhaka, Bangladesh. We optimize Google Business Profiles, build local citations, and help businesses rank in Google Maps.",
    heroHeadline: "Local SEO Services in Dhaka",
    heroSubtext: "Bykorp helps local businesses in Dhaka dominate Google Maps and 'near me' searches with proven Local SEO strategies.",
    sections: [
      {
        heading: "Dominate Local Search in Dhaka",
        content: "When someone in Dhaka searches for a service you offer, Bykorp makes sure they find YOU — not your competitor.",
        bullets: [
          "Google Business Profile optimization and management",
          "Local citation building across 50+ directories",
          "Review generation and reputation management",
          "Location-specific landing pages for multi-area businesses",
          "Local link building from Dhaka-based publications",
        ],
      },
    ],
    faqs: [
      { question: "How long does Local SEO take to work?", answer: "Most Bykorp Local SEO clients see Google Maps improvements within 30-60 days and significant traffic increases within 90 days." },
      { question: "Do I need a physical office for Local SEO?", answer: "A verified Google Business Profile requires a real address. Service-area businesses can hide their address while still ranking locally. Bykorp handles the setup." },
    ],
    cta: "Get Found Locally with Bykorp",
  },
  {
    slug: "content-marketing-agency-dhaka",
    title: "Content Strategy",
    metaTitle: "Content Marketing Agency in Dhaka, Bangladesh — Bykorp",
    metaDescription: "Bykorp is a content marketing agency in Dhaka that creates authority-building blog posts, articles, and content strategies that drive organic traffic and convert readers.",
    heroHeadline: "Content Marketing Agency in Dhaka",
    heroSubtext: "Bykorp creates strategic content that builds authority, drives organic traffic, and converts readers into paying customers.",
    sections: [
      {
        heading: "Content That Drives Business Results",
        content: "Bykorp's content marketing goes beyond blogging. We create strategic content ecosystems that establish your brand as an industry authority.",
        bullets: [
          "SEO-optimized blog posts and long-form articles",
          "Content cluster strategies for topical authority",
          "Email newsletter content and automation sequences",
          "Case studies and whitepapers for B2B lead generation",
          "Content audits and gap analysis for existing sites",
        ],
      },
    ],
    faqs: [
      { question: "How many blog posts should we publish per month?", answer: "Bykorp recommends 4-8 quality posts per month for consistent organic growth. Quality and keyword targeting matter more than volume." },
      { question: "Do you write content for us or do we provide it?", answer: "Bykorp handles everything — keyword research, writing, editing, and publishing. We interview your team for expertise and turn it into SEO-optimized content." },
    ],
    cta: "Launch Your Content Strategy",
  },
]

export function getService(slug: string): ServicePage | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
