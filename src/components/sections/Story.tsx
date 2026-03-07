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

                        {STORY_STEPS.map((step, idx) => (
                            <div key={`desk-hz-${step.id}`} className="w-[75vw] shrink-0 flex items-center gap-12 h-[75vh] bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-[40px] p-12 shadow-2xl relative">
                                {/* Left text */}
                                <div className="w-[45%] flex flex-col justify-center h-full z-10 pr-8">

                                    <p className="text-2xl xl:text-3xl text-brand-primary/90 leading-relaxed font-semibold">
                                        {step.text}
                                    </p>
                                </div>
                                {/* Right Image */}
                                <div className="w-[55%] h-full relative rounded-3xl overflow-hidden shadow-inner">
                                    <Image
                                        src={step.image}
                                        alt={`Phase ${step.id}`}
                                        fill
                                        className="object-cover"
                                        sizes="45vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/40 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        ))}

                        {/* Right Padding Buffer */}
                        <div className="w-[10vw] shrink-0 h-full border-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
