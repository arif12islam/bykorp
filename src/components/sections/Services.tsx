"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Code, Bot, Palette, TrendingUp, Search, Share2, MapPin, PenTool } from "lucide-react"

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

// 3D Tilt Card Component
function TiltCard({ service, index }: { service: typeof SERVICES[0], index: number }) {
    const Icon = service.icon
    const { theme } = service

    // Motion values for 3D effect
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth springs
    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    // Translate mouse position (from -0.5 to 0.5) to rotation (-10deg to 10deg)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // Only run on desktop
        if (window.innerWidth < 768) return

        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = (mouseX / width) - 0.5
        const yPct = (mouseY / height) - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            variants={itemVariants}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative w-full bg-white p-8 rounded-3xl border ${theme.border} shadow-sm overflow-hidden flex flex-col justify-between transition-shadow duration-500 md:hover:shadow-xl z-10`}
        >
            {/* Background Graphics */}
            <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full ${theme.light} blur-3xl transition-all duration-700 group-hover:scale-150 z-0 hidden md:block transform-gpu transition-transform`} style={{ transform: "translateZ(20px)" }} />
            <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-brand-bg/80 blur-3xl transition-all duration-700 group-hover:translate-x-12 z-0 hidden md:block transform-gpu transition-transform" style={{ transform: "translateZ(10px)" }} />

            {/* Faint Background Icon */}
            <div className={`absolute -right-8 -bottom-8 md:right-4 md:bottom-4 ${theme.bgIcon} opacity-[0.03] group-hover:opacity-[0.08] group-hover:-rotate-12 group-hover:scale-125 transition-all duration-700 z-0 pointer-events-none transform-gpu`} style={{ transform: "translateZ(30px)" }}>
                <Icon size={160} strokeWidth={1} className="md:w-[200px] md:h-[200px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col transform-gpu" style={{ transform: "translateZ(50px)" }}>
                <div className={`shrink-0 mb-0 md:mb-8 inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl ${theme.light} ${theme.text} group-hover:text-white transition-all duration-500 shadow-sm overflow-hidden relative group-hover:scale-110`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
                    <Icon size={32} strokeWidth={1.5} className="relative z-10" />
                </div>

                <div className="flex-1 mt-6">
                    <h3 className="mb-3 font-montserrat text-xl font-bold text-brand-primary">
                        {service.title}
                    </h3>
                    <p className="text-sm text-brand-secondary/80 leading-relaxed font-medium">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className={`absolute bottom-0 left-0 h-1 md:h-1.5 w-0 bg-gradient-to-r ${theme.gradient} transition-all duration-500 group-hover:w-full transform-gpu`} style={{ transform: "translateZ(60px)" }} />
        </motion.div>
    )
}

export function Services() {
    return (
        <section id="services" className="bg-white border-y border-brand-accent/20 pt-24 pb-24 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 px-6">
                    <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-primary mb-6 tracking-tighter">
                        Our Services
                    </h2>
                    <div className="w-16 h-1 bg-brand-accent mx-auto mb-6" />
                    <p className="text-brand-secondary max-w-2xl mx-auto text-lg">
                        Comprehensive digital infrastructure designed to scale your operations.
                    </p>
                </div>

                {/* Grid Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {SERVICES.map((service, index) => (
                        <TiltCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
