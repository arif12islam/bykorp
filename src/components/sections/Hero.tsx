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

const backgroundVariants: Variants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
        },
    },
}

const reverseBackgroundVariants: Variants = {
    animate: {
        rotate: -360,
        transition: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
        },
    },
}

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Detailed Abstract Background Graphics */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                {/* Intricate Grid Pattern */}
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

                {/* Complex Floating Orbits */}
                <div className="absolute w-[900px] h-[900px] translate-x-1/3 translate-y-1/4">
                    <motion.div
                        initial={{ opacity: 0, rotate: -1080 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <motion.div
                            variants={backgroundVariants}
                            animate="animate"
                            className="absolute inset-0 w-full h-full rounded-full border-[1px] border-brand-accent/30"
                        >
                            <div className="absolute top-1/2 left-0 w-4 h-4 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(20,39,78,0.5)] -translate-x-1/2 -translate-y-1/2" />
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute w-[700px] h-[700px] -translate-x-1/4 -translate-y-1/3">
                    <motion.div
                        initial={{ opacity: 0, rotate: -1080 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <motion.div
                            variants={backgroundVariants}
                            animate="animate"
                            className="absolute inset-0 w-full h-full rounded-full border-[1px] border-dashed border-brand-accent/40"
                        >
                            <div className="absolute top-1/2 right-0 w-3 h-3 bg-brand-secondary rounded-full shadow-[0_0_10px_rgba(57,72,103,0.4)] translate-x-1/2 -translate-y-1/2" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Deep Modern Gradients */}
                <div className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[700px] h-[700px] bg-brand-secondary/10 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000" />
                <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-brand-accent/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000" />
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
