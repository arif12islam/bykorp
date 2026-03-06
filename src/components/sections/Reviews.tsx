"use client"

import { Section } from "@/components/ui/Section"
import { Star } from "lucide-react"

const REVIEWS = [
    {
        id: 1,
        quote: "Bykorp completely overhauled our digital strategy. Their AI automation saved us 20 hours a week.",
        name: "Sarah Jenkins",
        role: "CEO, TechFlow",
        rating: 5,
    },
    {
        id: 2,
        quote: "Precision and scalability. That's what they promised, and that's exactly what they delivered.",
        name: "Marcus Thorne",
        role: "Director of Marketing, BuildCo",
        rating: 5,
    },
    {
        id: 3,
        quote: "Our local SEO traffic went through the roof within 3 months of working with Bykorp's team.",
        name: "Elena Rodriguez",
        role: "Founder, Nova Services",
        rating: 5,
    },
    {
        id: 4,
        quote: "The only agency I've worked with that actually understands both marketing and complex tech infrastructure.",
        name: "David Chen",
        role: "CTO, Vanguard Logic",
        rating: 5,
    },
]

export function Reviews() {
    return (
        <Section id="reviews" className="bg-brand-bg overflow-hidden py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-primary mb-6 tracking-tighter">
                    Client Success
                </h2>
                <div className="w-16 h-1 bg-brand-accent mx-auto" />
            </div>

            <div className="relative flex w-full overflow-hidden">
                {/* Marquee Animation */}
                <div className="animate-marquee flex w-max gap-6 px-6">
                    {[...REVIEWS, ...REVIEWS].map((review, idx) => (
                        <div
                            key={`${review.id}-${idx}`}
                            className="w-[350px] md:w-[450px] shrink-0 rounded-2xl border border-brand-accent/30 shadow-sm bg-white p-8 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <Star key={i} className="text-brand-accent fill-brand-accent" size={16} />
                                    ))}
                                </div>
                                <p className="text-brand-primary font-medium text-lg leading-relaxed mb-8">
                                    "{review.quote}"
                                </p>
                            </div>
                            <div>
                                <p className="font-montserrat font-bold text-brand-primary">{review.name}</p>
                                <p className="text-sm text-brand-secondary">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
