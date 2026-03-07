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


    // --- DESKTOP ARTISTIC "CURTAIN REVEAL" ANIMATION ---
    // Softer, more elegant text entry (fading and sliding up)
    const dTextOp1 = useTransform(scrollYProgress, [0, 0.25], [1, 0])
    const dTextY1 = useTransform(scrollYProgress, [0, 0.25], [0, -40])

    const dTextOp2 = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.65], [0, 1, 1, 0])
    const dTextY2 = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.65], [40, 0, 0, -40])

    const dTextOp3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [0, 1, 1])
    const dTextY3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [40, 0, 0])

    const deskTextOps = [dTextOp1, dTextOp2, dTextOp3]
    const deskTextYs = [dTextY1, dTextY2, dTextY3]

    // Artistic Curtain Reveal (Clip Path Wipe) + Ken Burns Zoom
    // Image 1 sits at the back, slowly zooming
    const dImgScale1 = useTransform(scrollYProgress, [0, 0.4], [1, 1.1])
    const dImgClip1 = useTransform(scrollYProgress, [0, 1], ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"])

    // Image 2 wipes up from the bottom (inset bottom edge from 100% to 0%) over Image 1
    const dImgScale2 = useTransform(scrollYProgress, [0.25, 0.65], [1, 1.1])
    const dImgClip2 = useTransform(
        scrollYProgress,
        [0.25, 0.4],
        ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
    )

    // Image 3 wipes up from the bottom over Image 2
    const dImgScale3 = useTransform(scrollYProgress, [0.6, 1], [1, 1.1])
    const dImgClip3 = useTransform(
        scrollYProgress,
        [0.6, 0.75],
        ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
    )

    const deskImgClips = [dImgClip1, dImgClip2, dImgClip3]
    const deskImgScales = [dImgScale1, dImgScale2, dImgScale3]

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

                    {/* ==== DESKTOP VERSION (SEAMLESS FLUID PARALLAX) ==== */}
                    <div className="hidden md:grid grid-cols-2 gap-16 items-center w-full h-full">

                        {/* Smooth Text Container */}
                        <div className="relative h-[400px] flex flex-col justify-center">
                            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-brand-primary mb-6 tracking-tighter absolute top-0">
                                Our Story
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full absolute top-20" />

                            <div className="relative w-full h-[200px] mt-24">
                                {STORY_STEPS.map((step, idx) => (
                                    <motion.div
                                        key={`desk-text-${step.id}`}
                                        style={{
                                            opacity: deskTextOps[idx],
                                            y: deskTextYs[idx]
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

                        {/* Smooth Image Cards Container */}
                        <div className="relative h-[500px] w-full flex items-center justify-center">
                            {STORY_STEPS.map((step, idx) => (
                                <motion.div
                                    key={`desk-img-${step.id}`}
                                    style={{
                                        clipPath: deskImgClips[idx],
                                        zIndex: idx,
                                    }}
                                    className="absolute inset-0 w-full h-full shadow-2xl shadow-brand-primary/20"
                                >
                                    <motion.div
                                        style={{ scale: deskImgScales[idx] }}
                                        className="relative w-full h-full origin-center"
                                    >
                                        <Image
                                            src={step.image}
                                            alt={`Story Phase ${step.id}`}
                                            fill
                                            className="object-cover rounded-3xl"
                                            sizes="50vw"
                                        />
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/10 to-transparent pointer-events-none" />
                                        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-brand-accent/30 pointer-events-none" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
