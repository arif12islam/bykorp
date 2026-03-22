import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { getBlogPost, getBlogPosts } from "@/lib/blog"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.bykorp.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.bykorp.com/blog/${post.slug}`,
      siteName: "Bykorp",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

function markdownToHtml(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-montserrat font-bold text-brand-primary mt-10 mb-4">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-montserrat font-bold text-brand-primary mt-12 mb-5">$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-primary font-semibold">$1</strong>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline font-medium">$1</a>')
    // Unordered lists
    .replace(/^- (.*$)/gm, '<li class="flex gap-3 text-brand-secondary leading-relaxed"><span class="text-brand-accent mt-1.5 shrink-0">•</span><span>$1</span></li>')
    // Paragraphs (lines that aren't already HTML)
    .split('\n\n')
    .map(block => {
      const trimmed = block.trim()
      if (!trimmed) return ''
      if (trimmed.startsWith('<h') || trimmed.startsWith('<li') || trimmed.startsWith('<ul') || trimmed.startsWith('<a')) return trimmed
      // Wrap consecutive <li> elements in <ul>
      if (trimmed.includes('<li')) return `<ul class="space-y-3 my-6">${trimmed}</ul>`
      return `<p class="text-brand-secondary leading-relaxed mb-4">${trimmed}</p>`
    })
    .join('\n')
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const htmlContent = markdownToHtml(post.content)

  // JSON-LD BlogPosting schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.bykorp.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Bykorp",
      url: "https://www.bykorp.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.bykorp.com/bykorp_logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.bykorp.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <main className="min-h-screen bg-brand-bg">
        {/* Hero Header */}
        <div className="bg-brand-primary text-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-bold uppercase tracking-wider text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

          {/* CTA Footer */}
          <div className="mt-16 p-8 bg-brand-primary rounded-2xl text-center">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-3">
              Ready to grow with Bykorp?
            </h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Let's discuss how Bykorp can help your business thrive in the digital age.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-colors"
            >
              Contact Bykorp
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
