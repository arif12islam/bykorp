import fs from "fs"
import path from "path"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  content: string
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog")

function parseFrontmatter(raw: string): { metadata: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { metadata: {}, content: raw }

  const metaBlock = match[1]
  const content = match[2].trim()
  const metadata: Record<string, string | string[]> = {}

  for (const line of metaBlock.split("\n")) {
    const colonIndex = line.indexOf(":")
    if (colonIndex === -1) continue
    const key = line.slice(0, colonIndex).trim()
    let value = line.slice(colonIndex + 1).trim()

    // Handle arrays like [tag1, tag2]
    if (value.startsWith("[") && value.endsWith("]")) {
      metadata[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
    } else {
      metadata[key] = value.replace(/^["']|["']$/g, "")
    }
  }

  return { metadata, content }
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8")
      const { metadata, content } = parseFrontmatter(raw)
      const slug = file.replace(/\.md$/, "")

      return {
        slug,
        title: (metadata.title as string) || slug,
        description: (metadata.description as string) || "",
        date: (metadata.date as string) || new Date().toISOString(),
        author: (metadata.author as string) || "Bykorp Team",
        tags: (metadata.tags as string[]) || [],
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const posts = getBlogPosts()
  return posts.find((p) => p.slug === slug)
}
