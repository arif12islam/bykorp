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

    // Image Opacities (scale removed for mobile perf)
    const imgOpacity1 = useTransform(scrollYProgress, [0, 0.33], [1, 0])
    const imgOpacity2 = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0, 1, 0])
    const imgOpacity3 = useTransform(scrollYProgress, [0.66, 0.8, 1], [0, 1, 1])
    const imgOpacities = [imgOpacity1, imgOpacity2, imgOpacity3]

    return (
        <section id="story" ref={containerRef} className="relative h-[300vh] bg-brand-bg">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Decor — hidden on mobile for perf */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[80px]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                        {/* Stacking Text Container */}
                        <div className="relative h-[250px] lg:h-[400px] flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-brand-primary mb-4 lg:mb-6 tracking-tighter absolute top-0">
                                Our Story
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full absolute top-12 md:top-20" />

                            <div className="relative w-full h-[150px] lg:h-[200px] mt-16 md:mt-24">
                                {STORY_STEPS.map((step, idx) => (
                                    <motion.div
                                        key={step.id}
                                        style={{
                                            opacity: opacities[idx],
                                            y: ys[idx],
                                        }}
                                        className="absolute inset-0 flex items-center"
                                    >
                                        <p className="text-lg md:text-2xl text-brand-secondary/90 leading-relaxed font-medium">
                                            {step.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Stacking Image/Graphic Container */}
                        <div className="relative h-[300px] lg:h-[500px] w-full flex items-center justify-center">
                            {STORY_STEPS.map((step, idx) => {
                                return (
                                    <motion.div
                                        key={`img-${step.id}`}
                                        style={{
                                            opacity: imgOpacities[idx],
                                        }}
                                        className="absolute inset-0 w-full h-full rounded-3xl shadow-xl shadow-brand-primary/10 border border-brand-accent/20 overflow-hidden"
                                    >
                                        <Image
                                            src={step.image}
                                            alt={`Story Phase ${step.id}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />

                                        {/* Phase badge overlay */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-6 py-2 bg-white/90 rounded-full border border-white/30 shadow-lg">
                                            <span className="font-montserrat font-bold tracking-widest uppercase text-sm text-brand-secondary">
                                                Phase {step.id}
                                            </span>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
