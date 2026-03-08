import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Admin Pipeline | Bykorp",
    description: "Internal CRM dashboard.",
    robots: {
        index: false,
        follow: false,
    }
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Add a custom font class or structure if needed,
    // otherwise just render children inside the secure tree.
    return (
        <div className="admin-root min-h-screen bg-brand-bg antialiased selection:bg-brand-primary/30">
            {children}
        </div>
    )
}
