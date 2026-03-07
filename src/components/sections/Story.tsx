"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const STORY_STEPS = [
    {
        id: 1,
        text: "We started with a simple hypothesis: combining traditional digital marketing strategies with cutting-edge AI automation scales enterprise growth faster than either approach alone.",
        image: "/images/story/step-1.png",
        accent: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        id: 2,
        text: "Bykorp isn't just another agency. We are the architects of your digital infrastructure. We build scalable systems that generate leads, automate nurturing, and close deals while you sleep.",
        image: "/images/story/step-2.png",
        accent: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        id: 3,
        text: "No fluff. No vanity metrics. Just engineered growth. We partner with visionaries ready to dominate their market.",
        image: "/images/story/step-3.png",
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

    // --- DESKTOP STICKY STACK ANIMATION ---
    const dCardScale1 = useTransform(scrollYProgress, [0, 0.33], [1, 0.9])
    const dCardScale2 = useTransform(scrollYProgress, [0.33, 0.66], [1, 0.95])
    const dCardScale3 = useTransform(scrollYProgress, [0.66, 1], [1, 1])
    const dCardScales = [dCardScale1, dCardScale2, dCardScale3]

    const dCardOp1 = useTransform(scrollYProgress, [0, 0.33], [1, 0.4])
    const dCardOp2 = useTransform(scrollYProgress, [0.33, 0.66], [1, 0.7])
    const dCardOp3 = useTransform(scrollYProgress, [0.66, 1], [1, 1])
    const dCardOps = [dCardOp1, dCardOp2, dCardOp3]

    return (
        <section id="story" ref={containerRef} className="relative h-[300vh] bg-brand-bg">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Decor — hidden on mobile for perf */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[80px]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative w-full">
                    {/* ==== MOBILE VERSION (PRESERVED & ISOLATED) ==== */}
                    <div className="md:hidden grid grid-cols-1 gap-8 items-center w-full">
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
                            {STORY_STEPS.map((step, idx) => (
                                <motion.div
                                    key={`mob-img-${step.id}`}
                                    style={{ opacity: imgOpacities[idx] }}
                                    className="absolute inset-0 w-full h-full rounded-3xl shadow-xl shadow-brand-primary/10 border border-brand-accent/20 overflow-hidden"
                                >
                                    <Image
                                        src={step.image}
                                        alt={`Story Phase ${step.id}`}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ==== DESKTOP VERSION (MODERN STICKY CARD STACK) ==== */}
                    <div className="hidden md:flex flex-col w-full relative pb-[20vh] mt-16 lg:px-12">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-brand-primary tracking-tighter">
                                Our Story
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full mx-auto mt-6" />
                        </div>

                        {STORY_STEPS.map((step, idx) => (
                            <motion.div
                                key={`desk-stack-${step.id}`}
                                style={{
                                    scale: dCardScales[idx],
                                    opacity: dCardOps[idx],
                                    top: `calc(15vh + ${idx * 40}px)`,
                                }}
                                className="sticky w-full h-[65vh] flex items-center bg-brand-bg/95 backdrop-blur-xl border border-brand-accent/20 rounded-[40px] shadow-2xl overflow-hidden mb-32 origin-top"
                            >
                                {/* Left Content */}
                                <div className="w-1/2 p-16 lg:p-24 flex flex-col justify-center h-full relative z-10">
                                    <span className={`text-sm font-bold tracking-widest uppercase mb-4 ${step.accent}`}>
                                        0{step.id} // Phase
                                    </span>
                                    <p className="text-2xl lg:text-3xl text-brand-secondary/90 leading-relaxed font-medium">
                                        {step.text}
                                    </p>
                                </div>

                                {/* Right Image */}
                                <div className="w-1/2 h-full relative">
                                    <Image
                                        src={step.image}
                                        alt={`Story Phase ${step.id}`}
                                        fill
                                        className="object-cover"
                                        sizes="50vw"
                                    />
                                    {/* Gradient overlay to blend image seamlessly into the card background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/50 to-transparent" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
