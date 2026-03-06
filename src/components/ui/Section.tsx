"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode
    className?: string
    delay?: number
}

// Fade and slide up 20px when entering the viewport
export function Section({
    children,
    className,
    delay = 0,
    ...props
}: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: delay }}
            className={cn("py-16 md:py-24", className)}
            {...props}
        >
            {children}
        </motion.section>
    )
}
