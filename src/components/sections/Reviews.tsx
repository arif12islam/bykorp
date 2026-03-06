"use client"

import { Section } from "@/components/ui/Section"

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
        rating: 4.8,
    },
    {
        id: 3,
        quote: "Our local SEO traffic went through the roof within 3 months of working with Bykorp's team.",
        name: "Elena Rodriguez",
        role: "Founder, Nova Services",
        rating: 4.5,
    },
    {
        id: 4,
        quote: "The only agency I've worked with that actually understands both marketing and complex tech infrastructure.",
        name: "David Chen",
        role: "CTO, Vanguard Logic",
        rating: 5,
    },
]

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, index) => {
                // Calculate how filled this specific star should be (0% to 100%)
                const fillPercentage = Math.max(0, Math.min(100, (rating - index) * 100))

                // Create a unique ID for the linear gradient to avoid conflicts
                const gradientId = `star-gradient-${rating}-${index}`

                return (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                    >
                        <defs>
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset={`${fillPercentage}%`} stopColor="#14274E" /> {/* brand-primary */}
                                <stop offset={`${fillPercentage}%`} stopColor="#9BA4B4" /> {/* brand-accent */}
                            </linearGradient>
                        </defs>
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                            fill={`url(#${gradientId})`}
                            stroke="none"
                        />
                    </svg>
                )
            })}
        </div>
    )
}

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
                                <StarRating rating={review.rating} />
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
