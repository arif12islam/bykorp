"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

// --- Custom Journey Graphics ---
const Phase1Graphic = () => (
    <div className="w-full h-full bg-gradient-to-br from-brand-bg to-[#14274E]/80 relative overflow-hidden flex items-center justify-center p-8 group">
        <div className="absolute inset-0 bg-[#14274E] opacity-50 transition-opacity duration-700 group-hover:opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-accent/60 relative z-10 transition-transform duration-700 group-hover:scale-[1.03]" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="20" cy="80" r="4" fill="currentColor" />
            <path d="M 20 80 Q 40 40 80 20" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="80" cy="20" r="12" strokeWidth="1" />
            <circle cx="80" cy="20" r="4" fill="currentColor" />
            <circle cx="80" cy="20" r="24" strokeWidth="0.5" strokeDasharray="2 4" />
        </svg>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-700" />
    </div>
)

const Phase2Graphic = () => (
    <div className="w-full h-full bg-gradient-to-br from-brand-bg to-[#14274E]/80 relative overflow-hidden flex items-center justify-center p-8 group">
        <div className="absolute inset-0 bg-[#14274E] opacity-50 transition-opacity duration-700 group-hover:opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-accent/60 relative z-10 transition-transform duration-700 group-hover:scale-[1.03]" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="25" y="45" width="20" height="25" rx="3" strokeWidth="1.5" />
            <rect x="55" y="25" width="20" height="25" rx="3" strokeWidth="1.5" />
            <path d="M 45 57.5 L 50 57.5 L 50 37.5 L 55 37.5" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="25" cy="45" r="2" fill="currentColor" />
            <circle cx="55" cy="25" r="2" fill="currentColor" />
            <path d="M 35 45 L 35 30 L 55 30" strokeWidth="0.5" />
        </svg>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/30 transition-colors duration-700" />
    </div>
)

const Phase3Graphic = () => (
    <div className="w-full h-full bg-gradient-to-br from-brand-bg to-[#14274E]/80 relative overflow-hidden flex items-center justify-center p-8 group">
        <div className="absolute inset-0 bg-[#14274E] opacity-50 transition-opacity duration-700 group-hover:opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-accent/60 relative z-10 transition-transform duration-700 group-hover:scale-[1.03]" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M 15 75 L 35 55 L 55 65 L 85 25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="85" cy="25" r="6" strokeWidth="1.5" />
            <circle cx="85" cy="25" r="2" fill="currentColor" />
            <path d="M 15 75 L 15 85 M 35 55 L 35 85 M 55 65 L 55 85 M 85 25 L 85 85" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M 10 85 L 90 85" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-primary/30 transition-colors duration-700" />
    </div>
)

const STORY_STEPS = [
    {
        id: 1,
        text: "We started with a simple hypothesis: combining traditional digital marketing strategies with cutting-edge AI automation scales enterprise growth faster than either approach alone.",
        graphic: Phase1Graphic,
        accent: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        id: 2,
        text: "Bykorp isn't just another agency. We are the architects of your digital infrastructure. We build scalable systems that generate leads, automate nurturing, and close deals while you sleep.",
        graphic: Phase2Graphic,
        accent: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        id: 3,
        text: "No fluff. No vanity metrics. Just engineered growth. We partner with visionaries ready to dominate their market.",
        graphic: Phase3Graphic,
        accent: "text-brand-primary",
        bg: "bg-brand-primary/10",
    }
]

export function Story() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // --- MOBILE PRESERVED ANIMATION ---
    // Text Opacities
    const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0, 1, 0])
    const opacity3 = useTransform(scrollYProgress, [0.66, 0.8, 1], [0, 1, 1])
    const opacities = [opacity1, opacity2, opacity3]

    // Text Y-Translations
    const y1 = useTransform(scrollYProgress, [0, 0.33], [0, -50])
    const y2 = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [50, 0, -50])
    const y3 = useTransform(scrollYProgress, [0.66, 0.8], [50, 0])
    const ys = [y1, y2, y3]

    // Image Opacities
    const imgOpacity1 = useTransform(scrollYProgress, [0, 0.33], [1, 0])
    const imgOpacity2 = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0, 1, 0])
    const imgOpacity3 = useTransform(scrollYProgress, [0.66, 0.8, 1], [0, 1, 1])
    const imgOpacities = [imgOpacity1, imgOpacity2, imgOpacity3]

    // --- DESKTOP HORIZONTAL SCROLL ANIMATION ---
    const desktopX = useTransform(scrollYProgress, [0, 1], ["0vw", "-215vw"])

    return (
        <section id="story" ref={containerRef} className="relative h-[300vh] bg-brand-bg">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Decor — hidden on mobile for perf */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[80px]" />
                </div>

                {/* ==== MOBILE VERSION (PRESERVED & ISOLATED) ==== */}
                <div className="md:hidden grid grid-cols-1 gap-8 items-center w-full mx-auto max-w-7xl px-6 relative mt-16">
                    <div className="relative h-[250px] flex flex-col justify-center">
                        <h2 className="text-3xl font-montserrat font-bold text-brand-primary mb-4 tracking-tighter absolute top-0">
                            Our Story
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full absolute top-12" />

                        <div className="relative w-full h-[150px] mt-16">
                            {STORY_STEPS.map((step, idx) => (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity: opacities[idx], y: ys[idx] }}
                                    className="absolute inset-0 flex items-center"
                                >
                                    <p className="text-lg text-brand-secondary/90 leading-relaxed font-medium">
                                        {step.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[300px] w-full flex items-center justify-center">
                        {STORY_STEPS.map((step, idx) => {
                            const Graphic = step.graphic;
                            return (
                                <motion.div
                                    key={`mob-img-${step.id}`}
                                    style={{ opacity: imgOpacities[idx] }}
                                    className="absolute inset-0 w-full h-full rounded-3xl shadow-xl shadow-brand-primary/10 border border-brand-accent/20 overflow-hidden"
                                >
                                    <Graphic />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* ==== DESKTOP VERSION (PREMIUM HORIZONTAL SCROLL) ==== */}
                <div className="hidden md:flex items-center w-full h-full">
                    <motion.div
                        style={{ x: desktopX }}
                        className="flex items-center h-full gap-[10vw] pl-[10vw]"
                    >
                        {/* Intro Slide */}
                        <div className="w-[40vw] shrink-0 flex flex-col justify-center">
                            <h2 className="text-5xl lg:text-7xl font-montserrat font-bold text-brand-primary tracking-tighter mb-8 shadow-sm">
                                Our Story
                            </h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full mb-12" />
                            <p className="text-xl text-brand-secondary leading-relaxed font-medium">
                                Swipe through the evolution of Bykorp's approach to digital infrastructure and architectural engineering.
                            </p>
                        </div>

                        {STORY_STEPS.map((step, idx) => {
                            const Graphic = step.graphic;
                            return (
                                <div key={`desk-hz-${step.id}`} className="w-[75vw] shrink-0 flex items-center h-[75vh] bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-[40px] p-16 shadow-2xl relative overflow-hidden group">

                                    {/* Subtle Graphic in Background */}
                                    <div className="absolute -right-20 -bottom-20 w-[600px] h-[600px] opacity-[0.2] transition-transform duration-700 group-hover:scale-[1.05] pointer-events-none z-0 mix-blend-screen">
                                        <Graphic />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent pointer-events-none z-0" />

                                    {/* Foreground Text */}
                                    <div className="relative z-10 w-full max-w-4xl">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary font-montserrat font-bold text-2xl mb-8 border border-brand-primary/20">
                                            0{step.id}
                                        </div>
                                        <p className="text-3xl xl:text-5xl text-white leading-tight font-montserrat font-medium drop-shadow-lg">
                                            {step.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                        {/* Right Padding Buffer */}
                        <div className="w-[10vw] shrink-0 h-full border-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
