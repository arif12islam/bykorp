# AGENT INSTRUCTIONS: PROJECT BYKORP SITE
# ROLE: Senior Full-Stack Next.js Developer
# GOAL: Build a high-conversion, single-page agency site for Bykorp.

## 1. ARCHITECTURE & STACK
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS (Mobile-first)
- Animation: Framer Motion (Scroll reveals, staggered children)
- Form: React Hook Form + Zod (Validation)
- Icons: Lucide-React (Stroke: 1.5px)

## 2. COLOR TOKENS (STRICT ENFORCEMENT)
- Background/Surface: #F1F6F9
- Primary/Headings: #14274E 
- Secondary/Body: #394867
- Accent/Borders/Stars: #9BA4B4

## 3. PAGE STRUCTURE (SINGLE PAGE)
- [NAV]: Sticky, backdrop-blur, links: Home, Story, Services, Reviews, Contact.
- [HERO]: H1 (Bold, #14274E), Subtext (#394867), Primary Button (#14274E).
- [OUR STORY]: Two-column layout (Text left, Placeholder Image right).
- [SERVICES]: 8-card grid (1px border #9BA4B4). 
  - Items: Web Dev, AI Automation, Web Design, Digital Marketing, SEO, Social Media, Local SEO, Content.
- [REVIEWS]: Horizontal marquee/slider. Cards feature 5-star ratings (#9BA4B4), client quote (#14274E), name/role (#394867).
- [ABOUT US]: Values/Mission summary.
- [CONTACT]: Form with fields: Name, Email, Service (Select), Message.

## 4. NON-NEGOTIABLES
- Performance: Use next/image for all assets.
- Responsive: Mobile menu is a slide-out drawer.
- Typography: Sans-serif (Inter/Montserrat). H1: 4rem (Desktop).
- Done Criteria: Smooth scroll functional, Form validates email/required fields, All brand colors applied.