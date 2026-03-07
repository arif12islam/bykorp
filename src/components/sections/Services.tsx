"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Code, Bot, Palette, TrendingUp, Search, Share2, MapPin, PenTool } from "lucide-react"

const SERVICES = [
    {
        id: 1, title: "Web Dev", icon: Code, description: "Scalable, high-performance web applications built on modern frameworks.",
        theme: {
            light: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30",
            gradient: "from-blue-500 to-cyan-400", bgIcon: "text-blue-500"
        }
    },
    {
        id: 2, title: "AI Automation", icon: Bot, description: "Intelligent workflows that save hours and reduce operational overhead.",
        theme: {
            light: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30",
            gradient: "from-violet-500 to-purple-500", bgIcon: "text-violet-500"
        }
    },
    {
        id: 3, title: "Web Design", icon: Palette, description: "Premium, conversion-focused user interfaces and experiences.",
        theme: {
            light: "bg-fuchsia-500/10", text: "text-fuchsia-500", border: "border-fuchsia-500/30",
            gradient: "from-fuchsia-500 to-pink-500", bgIcon: "text-fuchsia-500"
        }
    },
    {
        id: 4, title: "Digital Marketing", icon: TrendingUp, description: "Data-driven campaigns that maximize ROI and accelerate enterprise growth.",
        theme: {
            light: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30",
            gradient: "from-rose-500 to-orange-500", bgIcon: "text-rose-500"
        }
    },
    {
        id: 5, title: "SEO", icon: Search, description: "Technical and on-page optimization for long-term organic visibility.",
        theme: {
            light: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30",
            gradient: "from-emerald-500 to-teal-400", bgIcon: "text-emerald-500"
        }
    },
    {
        id: 6, title: "Social Media", icon: Share2, description: "Strategic content distribution to build authority and community.",
        theme: {
            light: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30",
            gradient: "from-amber-500 to-yellow-400", bgIcon: "text-amber-500"
        }
    },
    {
        id: 7, title: "Local SEO", icon: MapPin, description: "Dominate local search results and capture high-intent geographic traffic.",
        theme: {
            light: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/30",
            gradient: "from-indigo-500 to-blue-500", bgIcon: "text-indigo-500"
        }
    },
    {
        id: 8, title: "Content", icon: PenTool, description: "Authoritative, industry-leading copy that converts readers into clients.",
        theme: {
            light: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/30",
            gradient: "from-orange-500 to-amber-500", bgIcon: "text-orange-500"
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

// Cinematic entrance directions per card index
const entranceVariants = [
    { hidden: { opacity: 0, x: -120, rotateY: 25, scale: 0.85 }, visible: { opacity: 1, x: 0, rotateY: 0, scale: 1 } },   // 0: fly from left
    { hidden: { opacity: 0, y: -100, rotateX: -20, scale: 0.9 }, visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 } },    // 1: drop from top
    { hidden: { opacity: 0, x: 120, rotateY: -25, scale: 0.85 }, visible: { opacity: 1, x: 0, rotateY: 0, scale: 1 } },    // 2: fly from right
    { hidden: { opacity: 0, y: 100, scale: 0.7, rotateZ: -5 }, visible: { opacity: 1, y: 0, scale: 1, rotateZ: 0 } },      // 3: rise from bottom
    { hidden: { opacity: 0, x: -80, y: 80, rotateZ: 8, scale: 0.8 }, visible: { opacity: 1, x: 0, y: 0, rotateZ: 0, scale: 1 } },  // 4: diagonal bottom-left
    { hidden: { opacity: 0, scale: 0.5, rotateY: 45 }, visible: { opacity: 1, scale: 1, rotateY: 0 } },                     // 5: flip in
    { hidden: { opacity: 0, x: 80, y: 80, rotateZ: -8, scale: 0.8 }, visible: { opacity: 1, x: 0, y: 0, rotateZ: 0, scale: 1 } }, // 6: diagonal bottom-right
    { hidden: { opacity: 0, y: 120, rotateX: 20, scale: 0.85 }, visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 } },     // 7: perspective rise
]

// 3D Tilt Card for Desktop
function TiltCard({ service, index }: { service: typeof SERVICES[0], index: number }) {
    const Icon = service.icon
    const { theme } = service

    // Bento grid: cards 0, 3, 5, 6 are wide
    const isWide = [0, 3, 5, 6].includes(index)
    const gridClass = isWide ? "md:col-span-2" : "col-span-1"

    // 3D tilt mouse tracking
    const mx = useMotionValue(0)
    const my = useMotionValue(0)
    const mouseXSpring = useSpring(mx, { stiffness: 200, damping: 20 })
    const mouseYSpring = useSpring(my, { stiffness: 200, damping: 20 })
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - rect.left) / rect.width - 0.5)
        my.set((e.clientY - rect.top) / rect.height - 0.5)
    }

    const handleMouseLeave = () => {
        mx.set(0)
        my.set(0)
    }

    const entrance = entranceVariants[index]
    const staggerDelay = 0.08 * index

    return (
        <motion.div
            initial={entrance.hidden}
            whileInView={entrance.visible}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.9,
                delay: staggerDelay,
                ease: [0.22, 1, 0.36, 1], // Smooth aggressive easing
            }}
            className={`${gridClass}`}
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`group relative w-full h-full bg-white p-8 lg:p-10 rounded-3xl border ${theme.border} shadow-sm overflow-hidden flex ${isWide ? 'flex-row items-center' : 'flex-col justify-between'} transition-shadow duration-500 hover:shadow-2xl`}
            >
                {/* Background Glow */}
                <div
                    className={`absolute -right-12 -top-12 w-48 h-48 rounded-full ${theme.light} blur-3xl transition-all duration-700 group-hover:scale-[2] opacity-60 group-hover:opacity-100 z-0 transform-gpu`}
                    style={{ transform: "translateZ(20px)" }}
                />

                {/* Faint Watermark Icon */}
                <div
                    className={`absolute -right-8 -bottom-8 ${theme.bgIcon} opacity-[0.03] group-hover:opacity-[0.1] group-hover:-rotate-12 group-hover:scale-125 transition-all duration-700 z-0 pointer-events-none transform-gpu`}
                    style={{ transform: "translateZ(30px)" }}
                >
                    <Icon size={180} strokeWidth={1} />
                </div>

                {/* Content */}
                <div
                    className={`relative z-10 w-full flex ${isWide ? 'flex-row items-center' : 'flex-col'} gap-6 transform-gpu`}
                    style={{ transform: "translateZ(50px)" }}
                >
                    <div className={`shrink-0 ${isWide ? 'mr-6' : 'mb-4'} inline-flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl ${theme.light} ${theme.text} group-hover:text-white transition-all duration-500 shadow-sm overflow-hidden relative group-hover:scale-110`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
                        <Icon size={32} strokeWidth={1.5} className="relative z-10" />
                    </div>

                    <div className="flex-1">
                        <h3 className="mb-2 lg:mb-3 font-montserrat text-xl lg:text-2xl font-bold text-brand-primary">
                            {service.title}
                        </h3>
                        <p className="text-sm lg:text-base text-brand-secondary/80 leading-relaxed font-medium">
                            {service.description}
                        </p>
                    </div>
                </div>

                {/* Bottom Accent */}
                <div
                    className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${theme.gradient} transition-all duration-500 group-hover:w-full transform-gpu`}
                    style={{ transform: "translateZ(60px)" }}
                />
            </motion.div>
        </motion.div>
    )
}

export function Services() {
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
                                className={`sticky w-full bg-white/90 backdrop-blur-[2px] p-8 rounded-3xl border ${theme.border} shadow-sm overflow-hidden flex flex-col justify-between mb-8`}
                            >
                                <div className={`absolute -right-6 -bottom-6 ${theme.bgIcon} opacity-[0.04] -rotate-12 scale-125 z-0 pointer-events-none`}>
                                    <Icon size={140} strokeWidth={1} />
                                </div>

                                {/* Content Wrapper (to stay above watermark) */}
                                <div className="relative z-10">
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
                                </div>
                                <div className={`absolute bottom-0 left-0 h-1 w-full z-10 bg-gradient-to-r ${theme.gradient}`} />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>

            {/* ==== DESKTOP VERSION (CINEMATIC SCROLL-REVEAL BENTO) ==== */}
            <div className="hidden md:block pt-32 pb-40 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header with its own entrance */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl lg:text-6xl font-montserrat font-bold text-brand-primary mb-6 tracking-tighter">
                        Our Services
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mb-8 rounded-full" />
                    <p className="text-brand-secondary max-w-2xl mx-auto text-xl font-medium">
                        Comprehensive digital infrastructure designed to scale your operations.
                    </p>
                </motion.div>

                {/* The Cinematic Bento Grid */}
                <div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 grid-flow-row-dense"
                    style={{ perspective: "1200px" }}
                >
                    {SERVICES.map((service, index) => (
                        <TiltCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
