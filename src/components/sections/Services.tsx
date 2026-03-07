"use client"

import { motion } from "framer-motion"
import { Code, Bot, Palette, TrendingUp, Search, Share2, MapPin, PenTool } from "lucide-react"
import { useState } from "react"

const SERVICES = [
    {
        id: 1, title: "Web Dev", icon: Code, description: "Scalable, high-performance web applications built on modern frameworks.",
        theme: {
            light: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30",
            gradient: "from-blue-500 to-cyan-400", bgIcon: "text-blue-500",
            bgSolid: "bg-blue-500"
        }
    },
    {
        id: 2, title: "AI Automation", icon: Bot, description: "Intelligent workflows that save hours and reduce operational overhead.",
        theme: {
            light: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30",
            gradient: "from-violet-500 to-purple-500", bgIcon: "text-violet-500",
            bgSolid: "bg-violet-500"
        }
    },
    {
        id: 3, title: "Web Design", icon: Palette, description: "Premium, conversion-focused user interfaces and experiences.",
        theme: {
            light: "bg-fuchsia-500/10", text: "text-fuchsia-500", border: "border-fuchsia-500/30",
            gradient: "from-fuchsia-500 to-pink-500", bgIcon: "text-fuchsia-500",
            bgSolid: "bg-fuchsia-500"
        }
    },
    {
        id: 4, title: "Digital Marketing", icon: TrendingUp, description: "Data-driven campaigns that maximize ROI and accelerate enterprise growth.",
        theme: {
            light: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30",
            gradient: "from-rose-500 to-orange-500", bgIcon: "text-rose-500",
            bgSolid: "bg-rose-500"
        }
    },
    {
        id: 5, title: "SEO", icon: Search, description: "Technical and on-page optimization for long-term organic visibility.",
        theme: {
            light: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30",
            gradient: "from-emerald-500 to-teal-400", bgIcon: "text-emerald-500",
            bgSolid: "bg-emerald-500"
        }
    },
    {
        id: 6, title: "Social Media", icon: Share2, description: "Strategic content distribution to build authority and community.",
        theme: {
            light: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30",
            gradient: "from-amber-500 to-yellow-400", bgIcon: "text-amber-500",
            bgSolid: "bg-amber-500"
        }
    },
    {
        id: 7, title: "Local SEO", icon: MapPin, description: "Dominate local search results and capture high-intent geographic traffic.",
        theme: {
            light: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/30",
            gradient: "from-indigo-500 to-blue-500", bgIcon: "text-indigo-500",
            bgSolid: "bg-indigo-500"
        }
    },
    {
        id: 8, title: "Content", icon: PenTool, description: "Authoritative, industry-leading copy that converts readers into clients.",
        theme: {
            light: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/30",
            gradient: "from-orange-500 to-amber-500", bgIcon: "text-orange-500",
            bgSolid: "bg-orange-500"
        }
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as any } }
}

export function Services() {
    const [activePanel, setActivePanel] = useState<number | null>(null)

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
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon
                        const { theme } = service
                        const mobileTop = `calc(6rem + ${index * 1.5}rem)`

                        return (
                            <motion.div
                                key={`mob-srv-${service.id}`}
                                variants={itemVariants}
                                style={{ top: mobileTop, zIndex: index }}
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
                    })}
                </motion.div>
            </div>

            {/* ==== DESKTOP VERSION (EXPANDING VERTICAL PANELS) ==== */}
            <div className="hidden md:flex flex-col w-full max-w-[1500px] mx-auto px-8 pt-32 pb-32 relative">
                <div className="text-center mb-20">
                    <span className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm block">Capabilities</span>
                    <h2 className="text-5xl lg:text-6xl font-montserrat font-bold text-brand-primary tracking-tighter mb-6">
                        Ecosystem of Growth
                    </h2>
                    <p className="text-xl text-brand-secondary mt-4 max-w-2xl mx-auto font-medium">
                        Hover any panel to explore our specialized capabilities.
                    </p>
                </div>

                {/* The Expanding Panels Container */}
                <div
                    className="flex h-[70vh] gap-3 w-full"
                    onMouseLeave={() => setActivePanel(null)}
                >
                    {SERVICES.map((service, index) => {
                        const isActive = activePanel === index
                        const isAnyActive = activePanel !== null
                        const Icon = service.icon

                        return (
                            <div
                                key={`panel-${service.id}`}
                                onMouseEnter={() => setActivePanel(index)}
                                className="relative overflow-hidden rounded-[28px] cursor-pointer group"
                                style={{
                                    flex: isActive ? 4 : isAnyActive ? 0.5 : 1,
                                    transition: "flex 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            >
                                {/* Background gradient layer */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${service.theme.gradient} transition-opacity duration-700`}
                                    style={{ opacity: isActive ? 0.12 : 0.04 }}
                                />

                                {/* White overlay for non-active */}
                                <div className="absolute inset-0 bg-white transition-opacity duration-700"
                                    style={{ opacity: isActive ? 0 : 0.85 }}
                                />

                                {/* Border */}
                                <div className={`absolute inset-0 rounded-[28px] border ${service.theme.border} pointer-events-none`} />

                                {/* Large faint watermark icon */}
                                <div
                                    className={`absolute ${service.theme.bgIcon} pointer-events-none transition-all duration-700 ease-out`}
                                    style={{
                                        opacity: isActive ? 0.08 : 0.02,
                                        bottom: "-40px",
                                        right: isActive ? "20px" : "-30px",
                                        transform: isActive ? "scale(1.2) rotate(-8deg)" : "scale(0.8) rotate(0deg)",
                                    }}
                                >
                                    <Icon size={280} strokeWidth={0.8} />
                                </div>

                                {/* Content Container */}
                                <div className="relative z-10 h-full flex flex-col justify-between p-6">

                                    {/* Top: Icon + Number */}
                                    <div className="flex items-start justify-between">
                                        <div className={`inline-flex items-center justify-center rounded-2xl transition-all duration-500 ease-out ${service.theme.light} ${service.theme.text} ${isActive ? 'h-20 w-20' : 'h-12 w-12'}`}>
                                            <Icon size={isActive ? 40 : 24} strokeWidth={1.5} />
                                        </div>
                                        <span className={`font-black transition-all duration-500 ${service.theme.text} ${isActive ? 'text-5xl opacity-15' : 'text-lg opacity-10'}`}>
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Bottom: Title + Description */}
                                    <div className="mt-auto">
                                        {/* Collapsed: Vertical rotated title */}
                                        <div
                                            className="transition-all duration-500 ease-out"
                                            style={{
                                                opacity: isActive ? 0 : 1,
                                                position: isActive ? "absolute" : "relative",
                                                pointerEvents: isActive ? "none" : "auto",
                                            }}
                                        >
                                            <h3 className={`font-montserrat text-lg font-bold text-brand-primary whitespace-nowrap origin-bottom-left`}
                                                style={{
                                                    writingMode: isAnyActive && !isActive ? "vertical-rl" : "horizontal-tb",
                                                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                                }}
                                            >
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Expanded: Full title + description */}
                                        <div
                                            className="transition-all duration-500 ease-out"
                                            style={{
                                                opacity: isActive ? 1 : 0,
                                                transform: isActive ? "translateY(0)" : "translateY(24px)",
                                                pointerEvents: isActive ? "auto" : "none",
                                            }}
                                        >
                                            <h3 className="font-montserrat text-4xl xl:text-5xl font-bold text-brand-primary tracking-tight mb-6">
                                                {service.title}
                                            </h3>
                                            <p className="text-lg xl:text-xl text-brand-secondary/90 leading-relaxed font-medium max-w-md">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${service.theme.gradient} transition-all duration-700 ease-out ${isActive ? 'w-full' : 'w-0'}`} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
