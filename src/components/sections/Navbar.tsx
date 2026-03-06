"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
    { name: "Home", id: "home" },
    { name: "Story", id: "story" },
    { name: "Services", id: "services" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
]

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)

    // Handle scroll effect for floating navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Visual style transition (transparent -> frosted glass)
            setIsScrolled(currentScrollY > 20)

            // Visibility transition (auto-hide on scroll down past hero)
            if (currentScrollY > 400) {
                // Scrolling UP makes it visible, DOWN hides it
                setIsVisible(currentScrollY < lastScrollY.current)
            } else {
                // Always visible at the top of the page
                setIsVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 transition-all duration-500"
            >
                <div
                    className={cn(
                        "flex items-center justify-between px-6 md:px-8 transition-all duration-500 w-full border",
                        isScrolled
                            ? "max-w-5xl h-16 bg-white/30 backdrop-blur-[32px] saturate-150 border-white/20 shadow-[rgba(0,0,0,0.05)_0_8px_32px_0] rounded-full"
                            : "max-w-7xl h-20 bg-transparent border-transparent rounded-full"
                    )}
                >
                    {/* Logo + Brand Name */}
                    <button onClick={() => scrollTo("home")} className="flex items-center gap-2 z-50 relative group cursor-pointer">
                        <div className="relative h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/bykorp_logo.png"
                                alt="Bykorp Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-montserrat font-bold text-lg md:text-xl text-brand-primary tracking-tight">
                            Bykorp
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2 xl:gap-4">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollTo(link.id)}
                                className="px-4 py-2 text-sm font-semibold text-brand-secondary hover:text-brand-primary hover:bg-brand-primary/5 rounded-full transition-all duration-300 relative group cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center">
                        <Button
                            variant="primary"
                            size="sm"
                            className="rounded-full px-6 shadow-md shadow-brand-primary/20 hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-500 hover:-translate-y-0.5"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Start Your Project
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 relative text-brand-primary p-2 -mr-2 bg-brand-primary/5 rounded-full hover:bg-brand-primary/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isMobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
                        </motion.div>
                    </button>
                </div>
            </motion.header>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-white/80 backdrop-blur-3xl md:hidden overflow-hidden flex flex-col justify-center"
                    >
                        <nav className="flex flex-col gap-2 px-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.1 }}
                                >
                                    <button
                                        onClick={() => { scrollTo(link.id); setIsMobileMenuOpen(false) }}
                                        className="text-4xl sm:text-5xl font-montserrat font-black text-brand-primary hover:text-brand-accent transition-colors block py-4 border-b border-brand-accent/10 w-full text-left cursor-pointer"
                                    >
                                        {link.name}
                                    </button>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="pt-12 mt-4"
                            >
                                <Button
                                    variant="primary"
                                    className="w-full h-16 text-lg rounded-2xl shadow-xl shadow-brand-primary/20"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    Start Your Project
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
