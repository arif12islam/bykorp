import { getLeads } from "./actions"
import { AdminDashboardClient } from "./AdminDashboardClient"

export default async function AdminPage() {
    const { leads, success, error } = await getLeads()

    if (!success || !leads) {
        return (
            <div className="min-h-screen bg-brand-bg text-brand-secondary flex items-center justify-center p-6">
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-6 rounded-2xl max-w-md text-center">
                    <h2 className="text-xl font-bold mb-2">Connection Error</h2>
                    <p>{error || "Failed to load leads from the database."}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-brand-bg text-brand-secondary">
            {/* Minimal Admin Header */}
            <header className="border-b border-brand-accent/30 bg-brand-bg/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <h1 className="font-space font-bold text-lg text-brand-primary">Bykorp CRM</h1>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                <AdminDashboardClient initialLeads={leads} />
            </main>
        </div>
    )
}
