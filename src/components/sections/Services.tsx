"use client"

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion"
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

import { useRef } from "react"

// 3D Tilt Card Component (Reusable for both paths)
function ServiceCard({ service, index, isMobile }: { service: typeof SERVICES[0], index: number, isMobile: boolean }) {
    const Icon = service.icon
    const { theme } = service

    // Motion values for 3D effect
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isMobile) return // Disable complex hover math on mobile
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

    const mobileTop = `calc(6rem + ${index * 1.5}rem)`

    if (isMobile) {
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

    // --- DESKTOP 3D HORIZONTAL CARD ---
    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            } as React.CSSProperties}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative w-[35vw] flex-shrink-0 h-[65vh] bg-white p-10 lg:p-12 rounded-[40px] border ${theme.border} shadow-xl overflow-hidden flex flex-col justify-between transition-shadow duration-500 hover:shadow-2xl origin-center`}
        >
            {/* Background Graphics */}
            <div className={`absolute -right-12 -top-12 w-64 h-64 rounded-full ${theme.light} blur-[80px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-100 opacity-60 z-0 transform-gpu transition-transform`} style={{ transform: "translateZ(20px)" }} />

            {/* Faint Background Icon */}
            <div className={`absolute -right-8 -bottom-8 ${theme.bgIcon} opacity-[0.03] group-hover:opacity-[0.08] group-hover:-rotate-12 group-hover:scale-120 transition-all duration-700 z-0 pointer-events-none transform-gpu`} style={{ transform: "translateZ(30px)" }}>
                <Icon size={240} strokeWidth={1} />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col transform-gpu h-full" style={{ transform: "translateZ(50px)" }}>
                <div className="flex justify-between items-start w-full">
                    <div className={`shrink-0 inline-flex h-20 w-20 items-center justify-center rounded-2xl ${theme.light} ${theme.text} group-hover:text-white transition-all duration-500 shadow-sm overflow-hidden relative group-hover:scale-110`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
                        <Icon size={36} strokeWidth={1.5} className="relative z-10" />
                    </div>
                    <span className={`text-6xl font-black opacity-10 ${theme.text}`}>0{index + 1}</span>
                </div>

                <div className="mt-auto">
                    <h3 className="mb-4 font-montserrat text-3xl xl:text-4xl font-bold text-brand-primary tracking-tight">
                        {service.title}
                    </h3>
                    <p className="text-lg xl:text-xl text-brand-secondary/80 leading-relaxed font-medium">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className={`absolute bottom-0 left-0 h-2 w-0 bg-gradient-to-r ${theme.gradient} transition-all duration-700 ease-out group-hover:w-full transform-gpu`} style={{ transform: "translateZ(60px)" }} />
        </motion.div>
    )
}

export function Services() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Map scroll progress to horizontal translation.
    // Intro block + 8 cards * 35vw width + gaps = massive negative travel distance
    const desktopX = useTransform(scrollYProgress, [0, 1], ["0vw", "-360vw"])

    return (
        <section id="services" ref={containerRef} className="bg-brand-bg md:bg-white border-y border-brand-accent/20 relative md:h-[500vh]">

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
                        <ServiceCard
                            key={`mob-srv-${service.id}`}
                            service={service}
                            index={index}
                            isMobile={true}
                        />
                    ))}
                </motion.div>
            </div>

            {/* ==== DESKTOP VERSION (PREMIUM HORIZONTAL SCROLL) ==== */}
            <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden w-full bg-[#f8fbff]">

                {/* Background Decor */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/[0.02] rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[100px]" />
                </div>

                <motion.div
                    style={{ x: desktopX }}
                    className="flex items-center h-full gap-[4vw] pl-[10vw] relative z-10"
                >
                    {/* Intro Slide */}
                    <div className="w-[35vw] shrink-0 flex flex-col justify-center pr-12">
                        <span className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm">Capabilities</span>
                        <h2 className="text-5xl lg:text-7xl font-montserrat font-bold text-brand-primary tracking-tighter mb-8 shadow-sm">
                            Ecosystem of<br />Growth.
                        </h2>
                        <div className="w-32 h-2 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full mb-10" />
                        <p className="text-xl lg:text-2xl text-brand-secondary leading-relaxed font-medium">
                            Comprehensive digital infrastructure designed to scale your operations end-to-end.
                        </p>
                    </div>

                    {/* Service Gallery */}
                    {SERVICES.map((service, index) => (
                        <ServiceCard
                            key={`desk-srv-${service.id}`}
                            service={service}
                            index={index}
                            isMobile={false}
                        />
                    ))}

                    {/* Right Padding Buffer */}
                    <div className="w-[10vw] shrink-0 h-full border-transparent" />
                </motion.div>
            </div>
        </section>
    )
}
