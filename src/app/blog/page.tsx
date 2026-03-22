import Link from "next/link"
import type { Metadata } from "next"
import { getBlogPosts } from "@/lib/blog"
import { ArrowRight, Calendar, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, guides, and updates from Bykorp — your trusted digital agency for web development, AI automation, and marketing.",
  alternates: {
    canonical: "https://www.bykorp.com/blog",
  },
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <main className="min-h-screen bg-brand-bg">
      {/* Hero Header */}
      <div className="bg-brand-primary text-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold tracking-tight mb-4">
            Bykorp Blog
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Insights on web development, AI automation, and digital marketing from the Bykorp team.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {posts.length === 0 ? (
          <p className="text-brand-secondary text-center text-lg">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-brand-accent/20 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-montserrat font-bold text-brand-primary mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-brand-secondary text-sm leading-relaxed mb-6 flex-1">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-brand-accent/10">
                    <div className="flex items-center gap-1.5 text-xs text-brand-accent">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <span className="text-xs font-bold text-brand-primary group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
