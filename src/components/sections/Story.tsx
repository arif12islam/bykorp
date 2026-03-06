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


    // --- DESKTOP EXTREME 3D ANIMATION ---
    // High-drama text scaling and blurring
    const dTextOp1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0])
    const dTextScale1 = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1.1, 1.5])
    const dTextBlur1 = useTransform(scrollYProgress, [0, 0.25, 0.33], ["blur(0px)", "blur(0px)", "blur(10px)"])

    const dTextOp2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0])
    const dTextScale2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.66], [0.8, 1, 1.1, 1.5])
    const dTextBlur2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.66], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"])

    const dTextOp3 = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1])
    const dTextScale3 = useTransform(scrollYProgress, [0.6, 0.7, 1], [0.8, 1, 1])
    const dTextBlur3 = useTransform(scrollYProgress, [0.6, 0.7, 1], ["blur(10px)", "blur(0px)", "blur(0px)"])

    const deskTextOps = [dTextOp1, dTextOp2, dTextOp3]
    const deskTextScales = [dTextScale1, dTextScale2, dTextScale3]
    const deskTextBlurs = [dTextBlur1, dTextBlur2, dTextBlur3]

    // Extreme 3D Image Card transforms (cards flying from back to front)

    // Card 1 starts at reading distance, flies past camera
    const dImgZ1 = useTransform(scrollYProgress, [0, 0.33], [0, 1000])
    const dImgRotY1 = useTransform(scrollYProgress, [0, 0.33], [0, 45])
    const dImgRotX1 = useTransform(scrollYProgress, [0, 0.33], [0, -20])
    const dImgOp1 = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0])

    // Card 2 drops in from deep space, settles, then flies past
    const dImgZ2 = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.66], [-1000, 0, 0, 1000])
    const dImgRotY2 = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.66], [-45, 0, 0, 45])
    const dImgRotX2 = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.66], [20, 0, 0, -20])
    const dImgOp2 = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.66], [0, 1, 1, 0])

    // Card 3 drops in from deep space and settles
    const dImgZ3 = useTransform(scrollYProgress, [0.55, 0.7, 1], [-1000, 0, 0])
    const dImgRotY3 = useTransform(scrollYProgress, [0.55, 0.7, 1], [-45, 0, 0])
    const dImgRotX3 = useTransform(scrollYProgress, [0.55, 0.7, 1], [20, 0, 0])
    const dImgOp3 = useTransform(scrollYProgress, [0.55, 0.7, 1], [0, 1, 1])

    const deskImgZs = [dImgZ1, dImgZ2, dImgZ3]
    const deskImgRotYs = [dImgRotY1, dImgRotY2, dImgRotY3]
    const deskImgRotXs = [dImgRotX1, dImgRotX2, dImgRotX3]
    const deskImgOps = [dImgOp1, dImgOp2, dImgOp3]

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

                    {/* ==== DESKTOP VERSION (EXTREME 3D ANIMATION) ==== */}
                    <div className="hidden md:grid grid-cols-2 gap-16 items-center w-full h-full perspective-[1200px]">

                        {/* 3D Text Container */}
                        <div className="relative h-[400px] flex flex-col justify-center transform-style-3d">
                            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-brand-primary mb-6 tracking-tighter absolute top-0">
                                Our Story
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full absolute top-20" />

                            <div className="relative w-full h-[200px] mt-24 transform-style-3d">
                                {STORY_STEPS.map((step, idx) => (
                                    <motion.div
                                        key={`desk-text-${step.id}`}
                                        style={{
                                            opacity: deskTextOps[idx],
                                            scale: deskTextScales[idx],
                                            filter: deskTextBlurs[idx],
                                        }}
                                        className="absolute inset-0 flex items-center origin-left"
                                    >
                                        <p className="text-2xl lg:text-3xl text-brand-secondary/90 leading-relaxed font-medium">
                                            {step.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 3D Image Cards Container */}
                        <div className="relative h-[500px] w-full flex items-center justify-center transform-style-3d">
                            {STORY_STEPS.map((step, idx) => (
                                <motion.div
                                    key={`desk-img-${step.id}`}
                                    style={{
                                        opacity: deskImgOps[idx],
                                        z: deskImgZs[idx],
                                        rotateY: deskImgRotYs[idx],
                                        rotateX: deskImgRotXs[idx],
                                    }}
                                    className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl shadow-brand-primary/20 border border-brand-accent/30 overflow-hidden transform-style-3d"
                                >
                                    <Image
                                        src={step.image}
                                        alt={`Story Phase ${step.id}`}
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-1000 ease-out"
                                        sizes="50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
