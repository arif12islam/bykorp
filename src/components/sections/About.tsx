"use client"

import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"

const VALUES = [
    {
        num: "01",
        title: "Precision",
        desc: "Measured steps. Data-backed decisions. We don't guess, we engineer.",
    },
    {
        num: "02",
        title: "Scalability",
        desc: "Systems built to handle 10x growth without breaking.",
    },
    {
        num: "03",
        title: "Innovation",
        desc: "Continuously integrating the latest AI to keep you ahead of the curve.",
    },
    {
        num: "04",
        title: "Transparency",
        desc: "Clear reporting, complete access, and honest communication.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
} as const

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
} as const

export function About() {
    return (
        <Section id="about" className="bg-brand-primary text-brand-bg relative overflow-visible md:overflow-hidden">
            {/* Orbit animation for About section rings */}
            <style>{`
                @keyframes about-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>

            <div className="absolute top-0 right-0 w-96 h-96 translate-x-1/2 -translate-y-1/2" style={{ animation: 'about-orbit 30s linear infinite' }}>
                <div className="absolute inset-0 rounded-full border-[1px] border-white/10" />
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] -translate-x-1/2 translate-y-1/2" style={{ animation: 'about-orbit 45s linear infinite reverse' }}>
                <div className="absolute inset-0 rounded-full border-[1px] border-white/5" />
                <div className="absolute top-1/2 right-0 w-2.5 h-2.5 bg-brand-accent rounded-full shadow-[0_0_12px_rgba(155,164,180,0.6)] translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 md:mb-24 md:w-2/3"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 tracking-tighter text-white leading-tight">
                        Beyond the Traditional Agency Protocol
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-transparent mb-8 rounded-full" />
                    <p className="text-lg md:text-xl text-brand-bg/80 leading-relaxed font-medium">
                        Our mission is unambiguous: bridging the gap between traditional digital marketing and cutting-edge AI automation for enterprise-level growth. We partner with visionaries who are ready to dominate their market.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative pb-40 md:pb-0"
                >
                    {VALUES.map((val, index) => (
                        <motion.div
                            key={val.num}
                            variants={itemVariants}
                            style={{
                                top: `calc(6rem + ${index * 1.5}rem)`,
                                zIndex: index,
                            }}
                            className="sticky md:static bg-[#14274E]/90 backdrop-blur-[2px] md:bg-white/5 md:backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-brand-accent/30 md:hover:-translate-y-2 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(155,164,180,0.15)] hover:shadow-[0_8px_30px_-10px_rgba(155,164,180,0.3)] md:shadow-xl md:shadow-black/10 group mb-6 md:mb-0"
                        >
                            <span className="text-brand-accent font-montserrat font-bold text-sm inline-block mb-6 bg-white/10 px-4 py-1.5 rounded-full shadow-inner transition-colors group-hover:bg-white/20 group-hover:text-white">
                                {val.num}
                            </span>
                            <h3 className="text-2xl font-montserrat font-bold text-white mb-4 tracking-tight">
                                {val.title}
                            </h3>
                            <p className="text-base text-brand-bg/70 leading-relaxed group-hover:text-brand-bg/90 transition-colors">
                                {val.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    )
}
