"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

const SOCIAL_LINKS = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/bykorp" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/bykorp" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/bykorp" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/bykorp" },
]

const QUICK_LINKS = [
    { name: "Home", id: "home" },
    { name: "Our Story", id: "story" },
    { name: "Services", id: "services" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
]

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-brand-primary text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-white/10">

                    {/* Brand Column */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <button onClick={() => scrollTo("home")} className="inline-flex items-center gap-3 group cursor-pointer">
                            <div className="relative h-10 w-10">
                                <Image
                                    src="/bykorp_logo.png"
                                    alt="Bykorp Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="font-montserrat font-bold text-2xl tracking-tight text-white">
                                Bykorp
                            </span>
                        </button>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Architects of Digital Infrastructure. Bridging AI automation with strategic digital marketing for scalable growth.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                                    >
                                        <Icon size={18} strokeWidth={1.5} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="font-montserrat font-bold text-sm uppercase tracking-widest text-white/40 mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollTo(link.id)}
                                        className="text-white/60 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="font-montserrat font-bold text-sm uppercase tracking-widest text-white/40 mb-6">
                            Get in Touch
                        </h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <Link href="mailto:info@bykorp.com" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                                    <Mail size={16} strokeWidth={1.5} className="text-white/40 group-hover:text-white transition-colors" />
                                    <span>info@bykorp.com</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wa.me/8801630346988" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                                    <Phone size={16} strokeWidth={1.5} className="text-white/40 group-hover:text-white transition-colors" />
                                    <span>+880 1630 346988</span>
                                </Link>
                            </li>
                            <li className="flex items-center gap-3 text-white/40 group cursor-default">
                                <MapPin size={16} strokeWidth={1.5} className="text-white/20 group-hover:text-white/40 transition-colors" />
                                <span>Khilgaon, Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 text-xs text-white/40 text-center md:text-left border-t border-white/5 md:border-none">
                    <p>&copy; {currentYear} Bykorp. All rights reserved.</p>
                    <div className="flex gap-4 md:gap-6">
                        <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white/70 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
