"use client"

import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { Code, Bot, Palette, TrendingUp, Search, Share2, MapPin, PenTool } from "lucide-react"

const SERVICES = [
    {
        id: 1, title: "Web Dev", icon: Code, description: "Scalable, high-performance web applications built on modern frameworks.",
        theme: {
            light: "bg-blue-500/10", text: "text-blue-500", border: "group-hover:border-blue-500/30",
            shadow: "group-hover:shadow-blue-500/20", gradient: "from-blue-500 to-cyan-400", bgIcon: "text-blue-500"
        }
    },
    {
        id: 2, title: "AI Automation", icon: Bot, description: "Intelligent workflows that save hours and reduce operational overhead.",
        theme: {
            light: "bg-violet-500/10", text: "text-violet-500", border: "group-hover:border-violet-500/30",
            shadow: "group-hover:shadow-violet-500/20", gradient: "from-violet-500 to-purple-500", bgIcon: "text-violet-500"
        }
    },
    {
        id: 3, title: "Web Design", icon: Palette, description: "Premium, conversion-focused user interfaces and experiences.",
        theme: {
            light: "bg-fuchsia-500/10", text: "text-fuchsia-500", border: "group-hover:border-fuchsia-500/30",
            shadow: "group-hover:shadow-fuchsia-500/20", gradient: "from-fuchsia-500 to-pink-500", bgIcon: "text-fuchsia-500"
        }
    },
    {
        id: 4, title: "Digital Marketing", icon: TrendingUp, description: "Data-driven campaigns that maximize ROI and accelerate enterprise growth.",
        theme: {
            light: "bg-rose-500/10", text: "text-rose-500", border: "group-hover:border-rose-500/30",
            shadow: "group-hover:shadow-rose-500/20", gradient: "from-rose-500 to-orange-500", bgIcon: "text-rose-500"
        }
    },
    {
        id: 5, title: "SEO", icon: Search, description: "Technical and on-page optimization for long-term organic visibility.",
        theme: {
            light: "bg-emerald-500/10", text: "text-emerald-500", border: "group-hover:border-emerald-500/30",
            shadow: "group-hover:shadow-emerald-500/20", gradient: "from-emerald-500 to-teal-400", bgIcon: "text-emerald-500"
        }
    },
    {
        id: 6, title: "Social Media", icon: Share2, description: "Strategic content distribution to build authority and community.",
        theme: {
            light: "bg-amber-500/10", text: "text-amber-500", border: "group-hover:border-amber-500/30",
            shadow: "group-hover:shadow-amber-500/20", gradient: "from-amber-500 to-yellow-400", bgIcon: "text-amber-500"
        }
    },
    {
        id: 7, title: "Local SEO", icon: MapPin, description: "Dominate local search results and capture high-intent geographic traffic.",
        theme: {
            light: "bg-indigo-500/10", text: "text-indigo-500", border: "group-hover:border-indigo-500/30",
            shadow: "group-hover:shadow-indigo-500/20", gradient: "from-indigo-500 to-blue-500", bgIcon: "text-indigo-500"
        }
    },
    {
        id: 8, title: "Content", icon: PenTool, description: "Authoritative, industry-leading copy that converts readers into clients.",
        theme: {
            light: "bg-orange-500/10", text: "text-orange-500", border: "group-hover:border-orange-500/30",
            shadow: "group-hover:shadow-orange-500/20", gradient: "from-orange-500 to-amber-500", bgIcon: "text-orange-500"
        }
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Services() {
    return (
        <Section id="services" className="bg-white border-y border-brand-accent/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-primary mb-6 tracking-tighter">
                        Our Services
                    </h2>
                    <div className="w-16 h-1 bg-brand-accent mx-auto mb-6" />
                    <p className="text-brand-secondary max-w-2xl mx-auto">
                        Comprehensive digital infrastructure designed to scale your operations.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {SERVICES.map((service, idx) => {
                        const Icon = service.icon
                        const { theme } = service;

                        return (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className={`group relative bg-white p-8 rounded-2xl border border-brand-accent/30 shadow-sm transition-all duration-500 ${theme.border} hover:shadow-xl ${theme.shadow} hover:-translate-y-2 overflow-hidden z-10`}
                            >
                                {/* Relevant Abstract Graphic / Custom Background Blob */}
                                <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${theme.light} blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-brand-primary/5 z-0`} />
                                <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-brand-bg/80 blur-2xl transition-all duration-700 group-hover:translate-x-8 group-hover:-translate-y-8 z-0" />

                                {/* Huge Faint Relevant Icon Graphic */}
                                <div className={`absolute -bottom-8 -right-8 ${theme.bgIcon} opacity-[0.03] group-hover:opacity-[0.08] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-700 z-0 pointer-events-none`}>
                                    <Icon size={160} strokeWidth={1} />
                                </div>

                                <div className="relative z-10">
                                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${theme.light} ${theme.text} group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:scale-110 relative overflow-hidden`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
                                        <Icon size={26} strokeWidth={1.5} className="relative z-10" />
                                    </div>
                                    <h3 className="mb-3 font-montserrat text-xl font-bold text-brand-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-brand-secondary/80 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${theme.gradient} transition-all duration-500 group-hover:w-full`} />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </Section>
    )
}
