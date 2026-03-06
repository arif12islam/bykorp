import Link from "next/link"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-brand-primary text-white border-t border-brand-accent/20">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-montserrat text-2xl font-bold tracking-tighter">
                            BYKORP
                        </span>
                    </div>

                    <div className="text-brand-bg/60 text-sm text-center md:text-right">
                        <p>&copy; {currentYear} Bykorp. All rights reserved.</p>
                        <div className="mt-2 space-x-4">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
