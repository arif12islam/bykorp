"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
}

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* CSS for GPU-accelerated orbital spin */}
            <style jsx>{`
                @keyframes orbit-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes fade-spin-in {
                    0% { opacity: 0; transform: rotate(-1080deg); }
                    100% { opacity: 1; transform: rotate(0deg); }
                }
                .orbit-ring {
                    animation: fade-spin-in 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    will-change: transform;
                }
                .orbit-ring > .orbit-continuous {
                    animation: orbit-spin 25s linear infinite;
                    will-change: transform;
                }
                .orbit-ring-delayed {
                    animation: fade-spin-in 3.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
                    opacity: 0;
                    will-change: transform;
                }
            `}</style>

            {/* Background Graphics */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                {/* Grid Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-primary" />
                        </pattern>
                        <pattern id="hero-grid-large" width="200" height="200" patternUnits="userSpaceOnUse">
                            <rect width="200" height="200" fill="url(#hero-grid)" />
                            <path d="M 200 0 L 0 0 0 200" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-grid-large)" />
                </svg>

                {/* Orbital Rings — pure CSS for mobile perf */}
                <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] translate-x-1/3 translate-y-1/4">
                    <div className="orbit-ring absolute inset-0 w-full h-full">
                        <div className="orbit-continuous absolute inset-0 w-full h-full rounded-full border-[1px] border-brand-accent/30">
                            <div className="absolute top-1/2 left-0 w-3 h-3 md:w-4 md:h-4 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(20,39,78,0.5)] -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] -translate-x-1/4 -translate-y-1/3">
                    <div className="orbit-ring-delayed absolute inset-0 w-full h-full">
                        <div className="orbit-continuous absolute inset-0 w-full h-full rounded-full border-[1px] border-dashed border-brand-accent/40">
                            <div className="absolute top-1/2 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-brand-secondary rounded-full shadow-[0_0_10px_rgba(57,72,103,0.4)] translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                {/* Gradient blobs — smaller on mobile for performance */}
                <div className="absolute top-[10%] -right-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[80px] lg:blur-[100px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-brand-secondary/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] lg:blur-[120px]" />
                <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-brand-accent/20 rounded-full mix-blend-multiply filter blur-[40px] md:blur-[60px] lg:blur-[80px]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8 font-montserrat border border-brand-primary/10">
                            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                            Architects of Digital Infrastructure
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-[3.5rem] md:text-7xl lg:text-[5rem] font-montserrat font-black text-brand-primary leading-[1] tracking-tighter mb-8"
                    >
                        Scale Your Enterprise With{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                            Precision AI
                        </span>{" "}
                        & Marketing.
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-brand-secondary/80 leading-relaxed mb-10 max-w-2xl font-medium"
                    >
                        Bridging the gap between traditional digital marketing and cutting-edge AI automation for unprecedented growth. No fluff, just scalable results.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="group rounded-full shadow-lg shadow-brand-primary/20 hover:-translate-y-1 h-14 px-8" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}>
                            Partner With Us
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" strokeWidth={2} />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full shadow-sm hover:-translate-y-1 h-14 px-8" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: 'smooth' })}>
                            Explore Services
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
