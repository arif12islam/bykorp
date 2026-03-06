import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const SOCIAL_LINKS = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/bykorp" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/bykorp" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/bykorp" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/bykorp" },
]

const QUICK_LINKS = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#story" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-brand-primary text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-white/10">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="#home" className="inline-flex items-center gap-3 group">
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
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Architects of Digital Infrastructure. Bridging AI automation with strategic digital marketing for scalable growth.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
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
                    <div>
                        <h3 className="font-montserrat font-bold text-sm uppercase tracking-widest text-white/40 mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-montserrat font-bold text-sm uppercase tracking-widest text-white/40 mb-6">
                            Get in Touch
                        </h3>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li>
                                <Link href="mailto:info@bykorp.com" className="hover:text-white transition-colors duration-300">
                                    info@bykorp.com
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wa.me/8801630346988" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                                    +880 1630 346988
                                </Link>
                            </li>
                            <li className="text-white/40">
                                Khilgaon, Dhaka, Bangladesh
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 text-xs text-white/40">
                    <p>&copy; {currentYear} Bykorp. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white/70 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
