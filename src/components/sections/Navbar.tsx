"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "Story", href: "#story" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Handle scroll effect for floating navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 transition-all duration-500"
            >
                <div
                    className={cn(
                        "flex items-center justify-between px-6 md:px-8 transition-all duration-500 w-full border",
                        isScrolled
                            ? "max-w-5xl h-16 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-brand-accent/20 rounded-full"
                            : "max-w-7xl h-20 bg-transparent border-transparent rounded-full"
                    )}
                >
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-2 z-50 relative group">
                        <div className="relative h-8 w-24 md:h-10 md:w-28 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/bykorp_logo.png"
                                alt="Bykorp Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2 xl:gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-semibold text-brand-secondary hover:text-brand-primary hover:bg-brand-primary/5 rounded-full transition-all duration-300 relative group"
                            >
                                {link.name}
                            </Link>
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
                            Get Started
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
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden overflow-hidden flex flex-col justify-center"
                    >
                        <nav className="flex flex-col gap-2 px-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl sm:text-5xl font-montserrat font-black text-brand-primary hover:text-brand-accent transition-colors block py-4 border-b border-brand-accent/10"
                                    >
                                        {link.name}
                                    </Link>
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
