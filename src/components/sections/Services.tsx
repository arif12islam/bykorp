"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Code, Bot, Palette, TrendingUp, Search, Share2, MapPin, PenTool } from "lucide-react"
import { useState } from "react"

const SERVICES = [
    {
        id: 1, title: "Web Dev", icon: Code, description: "Scalable, high-performance web applications built on modern frameworks.",
        theme: {
            light: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30",
            shadow: "shadow-blue-500/20", gradient: "from-blue-500 to-cyan-400", bgIcon: "text-blue-500"
        }
    },
    {
        id: 2, title: "AI Automation", icon: Bot, description: "Intelligent workflows that save hours and reduce operational overhead.",
        theme: {
            light: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30",
            shadow: "shadow-violet-500/20", gradient: "from-violet-500 to-purple-500", bgIcon: "text-violet-500"
        }
    },
    {
        id: 3, title: "Web Design", icon: Palette, description: "Premium, conversion-focused user interfaces and experiences.",
        theme: {
            light: "bg-fuchsia-500/10", text: "text-fuchsia-500", border: "border-fuchsia-500/30",
            shadow: "shadow-fuchsia-500/20", gradient: "from-fuchsia-500 to-pink-500", bgIcon: "text-fuchsia-500"
        }
    },
    {
        id: 4, title: "Digital Marketing", icon: TrendingUp, description: "Data-driven campaigns that maximize ROI and accelerate enterprise growth.",
        theme: {
            light: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30",
            shadow: "shadow-rose-500/20", gradient: "from-rose-500 to-orange-500", bgIcon: "text-rose-500"
        }
    },
    {
        id: 5, title: "SEO", icon: Search, description: "Technical and on-page optimization for long-term organic visibility.",
        theme: {
            light: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30",
            shadow: "shadow-emerald-500/20", gradient: "from-emerald-500 to-teal-400", bgIcon: "text-emerald-500"
        }
    },
    {
        id: 6, title: "Social Media", icon: Share2, description: "Strategic content distribution to build authority and community.",
        theme: {
            light: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30",
            shadow: "shadow-amber-500/20", gradient: "from-amber-500 to-yellow-400", bgIcon: "text-amber-500"
        }
    },
    {
        id: 7, title: "Local SEO", icon: MapPin, description: "Dominate local search results and capture high-intent geographic traffic.",
        theme: {
            light: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/30",
            shadow: "shadow-indigo-500/20", gradient: "from-indigo-500 to-blue-500", bgIcon: "text-indigo-500"
        }
    },
    {
        id: 8, title: "Content", icon: PenTool, description: "Authoritative, industry-leading copy that converts readers into clients.",
        theme: {
            light: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/30",
            shadow: "shadow-orange-500/20", gradient: "from-orange-500 to-amber-500", bgIcon: "text-orange-500"
        }
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as any } }
}

// Mobile Service Card (sticky stacking effect)
function MobileServiceCard({ service, index }: { service: typeof SERVICES[0], index: number }) {
    const Icon = service.icon
    const { theme } = service
    const mobileTop = `calc(6rem + ${index * 1.5}rem)`

    return (
        <motion.div
            variants={itemVariants}
            style={{
                top: mobileTop,
                zIndex: index,
            }}
            className={`sticky w-full bg-white p-8 rounded-3xl border ${theme.border} shadow-sm overflow-hidden flex flex-col justify-between mb-8`}
        >
            <div className={`shrink-0 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${theme.light} ${theme.text}`}>
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <div>
                <h3 className="mb-2 font-montserrat text-xl font-bold text-brand-primary">
                    {service.title}
                </h3>
                <p className="text-sm text-brand-secondary/80 leading-relaxed font-medium">
                    {service.description}
                </p>
            </div>
            <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${theme.gradient}`} />
        </motion.div>
    )
}

export function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section id="services" className="bg-brand-bg border-y border-brand-accent/20 relative">

            {/* ==== MOBILE VERSION (PRESERVED) ==== */}
            <div className="md:hidden pt-24 pb-24 mx-auto max-w-7xl px-6 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-montserrat font-bold text-brand-primary mb-6 tracking-tighter">
                        Our Services
                    </h2>
                    <div className="w-16 h-1 bg-brand-accent mx-auto mb-6" />
                    <p className="text-brand-secondary text-lg">
                        Comprehensive digital infrastructure designed to scale your operations.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col relative"
                >
                    {SERVICES.map((service, index) => (
                        <MobileServiceCard
                            key={`mob-srv-${service.id}`}
                            service={service}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>

            {/* ==== DESKTOP VERSION (SMOOTH INTERACTIVE BENTO GRID) ==== */}
            <div className="hidden md:flex flex-col w-full max-w-[1400px] mx-auto px-12 pt-32 pb-32 relative">
                <div className="text-center mb-20">
                    <span className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm block">Capabilities</span>
                    <h2 className="text-5xl lg:text-6xl font-montserrat font-bold text-brand-primary tracking-tighter mb-6 relative inline-block">
                        Ecosystem of Growth
                        <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-brand-primary via-brand-accent to-transparent rounded-full opacity-30" />
                    </h2>
                    <p className="text-xl text-brand-secondary mt-8 max-w-2xl mx-auto font-medium">
                        Hover to explore our specialized capabilities that power your digital growth engine.
                    </p>
                </div>

                {/* The Smooth Bento Grid - Cards stay in place, scale on hover */}
                <div className="grid grid-cols-4 grid-rows-2 gap-6 w-full h-[75vh]" style={{ perspective: "1200px" }}>
                    {SERVICES.map((service, index) => {
                        const isHovered = hoveredIndex === index
                        const isAnyHovered = hoveredIndex !== null
                        const Icon = service.icon

                        return (
                            <motion.div
                                key={`desk-bento-${service.id}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                animate={{
                                    scale: isHovered ? 1.12 : isAnyHovered ? 0.95 : 1,
                                    zIndex: isHovered ? 30 : 10,
                                    opacity: isAnyHovered && !isHovered ? 0.5 : 1,
                                    filter: isAnyHovered && !isHovered ? "blur(3px) grayscale(40%)" : "blur(0px) grayscale(0%)",
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.8 }}
                                className={`relative rounded-[32px] cursor-pointer overflow-hidden border ${service.theme.border} bg-white flex flex-col shadow-lg hover:shadow-2xl origin-center`}
                            >
                                {/* Gradient wash */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.theme.gradient} transition-opacity duration-500 ease-out pointer-events-none`}
                                    style={{ opacity: isHovered ? 0.1 : 0 }}
                                />

                                {/* Watermark Icon */}
                                <div
                                    className={`absolute -bottom-10 -right-10 ${service.theme.bgIcon} pointer-events-none transition-all duration-700 ease-out`}
                                    style={{
                                        opacity: isHovered ? 0.12 : 0.03,
                                        transform: isHovered ? "scale(1.3) rotate(-12deg)" : "scale(1) rotate(0deg)",
                                    }}
                                >
                                    <Icon size={200} strokeWidth={1} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 xl:p-10">
                                    <div className="flex justify-between items-start w-full">
                                        <div className={`shrink-0 inline-flex items-center justify-center rounded-2xl transition-all duration-500 ease-out ${service.theme.light} ${service.theme.text} ${isHovered ? 'h-20 w-20' : 'h-14 w-14'}`}>
                                            <Icon size={isHovered ? 40 : 28} strokeWidth={1.5} />
                                        </div>
                                        <span className={`font-black transition-all duration-500 ease-out ${service.theme.text} ${isHovered ? 'text-6xl opacity-15' : 'text-2xl opacity-[0.07]'}`}>
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className={`font-montserrat font-bold text-brand-primary tracking-tight transition-all duration-500 ease-out ${isHovered ? 'text-2xl xl:text-3xl mb-4' : 'text-lg mb-2'}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`font-medium transition-all duration-500 ease-out ${isHovered ? 'text-brand-secondary/90 text-base leading-relaxed' : 'text-brand-secondary/60 text-xs leading-snug line-clamp-2'}`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom accent */}
                                <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${service.theme.gradient} transition-all duration-700 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
