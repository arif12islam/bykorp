"use client"

import { useState } from "react"
import { LeadStatus, Lead } from "@prisma/client"
import { updateLeadStatus, updateLeadNotes } from "./actions"
import { Button } from "@/components/ui/Button"
import { Mail, Phone, Building2, Globe, Clock, MessageSquare, Save } from "lucide-react"

interface Props {
    initialLeads: Lead[]
}

const statusColors: Record<LeadStatus, string> = {
    NEW: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    CONTACTED: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    QUALIFIED: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    PROPOSAL_SENT: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    WON: "bg-green-500/10 text-green-500 border-green-500/20",
    LOST: "bg-red-500/10 text-red-500 border-red-500/20",
}

export function AdminDashboardClient({ initialLeads }: Props) {
    const [leads, setLeads] = useState<Lead[]>(initialLeads)
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
    const [isUpdating, setIsUpdating] = useState(false)
    const [noteDraft, setNoteDraft] = useState("")

    // Handle selecting a lead to view details
    const handleSelectLead = (lead: Lead) => {
        setSelectedLead(lead)
        setNoteDraft(lead.notes || "")
    }

    // Handle Status Change
    const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
        setIsUpdating(true)
        const res = await updateLeadStatus(leadId, newStatus)
        if (res.success) {
            setLeads(leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l))
            if (selectedLead?.id === leadId) {
                setSelectedLead({ ...selectedLead, status: newStatus })
            }
        }
        setIsUpdating(false)
    }

    // Handle Notes Save
    const handleSaveNotes = async () => {
        if (!selectedLead) return
        setIsUpdating(true)
        const res = await updateLeadNotes(selectedLead.id, noteDraft)
        if (res.success) {
            setLeads(leads.map(l => l.id === selectedLead.id ? { ...l, notes: noteDraft } : l))
            setSelectedLead({ ...selectedLead, notes: noteDraft })
        }
        setIsUpdating(false)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Leads List (Left Column) */}
            <div className="lg:col-span-1 bg-brand-primary/5 border border-brand-accent/20 rounded-2xl flex flex-col h-[calc(100vh-8rem)]">
                <div className="p-4 border-b border-brand-accent/20">
                    <h2 className="font-space font-semibold text-brand-primary">All Leads ({leads.length})</h2>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {leads.map((lead) => (
                        <button
                            key={lead.id}
                            onClick={() => handleSelectLead(lead)}
                            className={`w-full text-left p-4 rounded-xl border transition-all ${selectedLead?.id === lead.id
                                    ? "bg-brand-primary/10 border-brand-primary/30"
                                    : "bg-brand-bg border-brand-accent/10 hover:border-brand-accent/30"
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-medium text-brand-primary truncate pr-2">{lead.name}</span>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full border whitespace-nowrap ${statusColors[lead.status]}`}>
                                    {lead.status.replace('_', ' ')}
                                </span>
                            </div>
                            <div className="text-sm text-brand-secondary/70 truncate">{lead.service}</div>
                            <div className="text-xs text-brand-secondary/40 mt-3">
                                {new Date(lead.createdAt).toLocaleDateString()}
                            </div>
                        </button>
                    ))}
                    {leads.length === 0 && (
                        <div className="text-center text-brand-secondary/50 py-10">No leads yet.</div>
                    )}
                </div>
            </div>

            {/* Lead Detail View (Right 2 Columns) */}
            <div className="lg:col-span-2 bg-brand-primary/5 border border-brand-accent/20 rounded-2xl h-[calc(100vh-8rem)] overflow-y-auto hidden md:block">
                {selectedLead ? (
                    <div className="p-8">
                        {/* Header & Status Control */}
                        <div className="flex justify-between items-start mb-8 pb-8 border-b border-brand-accent/20">
                            <div>
                                <h2 className="text-3xl font-space font-bold text-brand-primary mb-2">{selectedLead.name}</h2>
                                <div className="text-brand-secondary/70 flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Received: {new Date(selectedLead.createdAt).toLocaleString()}
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <label className="text-xs text-brand-secondary/60 uppercase tracking-wider font-bold">Pipeline Stage</label>
                                <select
                                    value={selectedLead.status}
                                    onChange={(e) => handleStatusChange(selectedLead.id, e.target.value as LeadStatus)}
                                    disabled={isUpdating}
                                    className={`px-4 py-2 rounded-xl border font-bold text-sm cursor-pointer outline-none appearance-none ${statusColors[selectedLead.status]}`}
                                >
                                    {Object.keys(statusColors).map(status => (
                                        <option key={status} value={status} className="bg-brand-bg text-brand-secondary">{status.replace('_', ' ')}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-8">
                            {/* Contact Info */}
                            <div className="space-y-4">
                                <h3 className="text-sm text-brand-secondary/60 uppercase tracking-wider font-bold mb-4">Contact Details</h3>

                                <a href={`mailto:${selectedLead.email}`} className="flex items-center gap-3 text-brand-primary hover:opacity-80 transition-opacity">
                                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="truncate">{selectedLead.email}</span>
                                </a>

                                <a href={`tel:${selectedLead.phone}`} className="flex items-center gap-3 text-brand-primary hover:opacity-80 transition-opacity">
                                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span>{selectedLead.phone}</span>
                                </a>

                                {selectedLead.company && (
                                    <div className="flex items-center gap-3 text-brand-secondary">
                                        <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center">
                                            <Building2 className="w-4 h-4 text-brand-secondary/50" />
                                        </div>
                                        <span>{selectedLead.company}</span>
                                    </div>
                                )}
                            </div>

                            {/* Meta Info */}
                            <div className="space-y-4">
                                <h3 className="text-sm text-brand-secondary/60 uppercase tracking-wider font-bold mb-4">Project Meta</h3>

                                <div className="flex items-center gap-3 text-brand-secondary">
                                    <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center">
                                        <Globe className="w-4 h-4 text-brand-secondary/50" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-brand-secondary/50">Service Requested</div>
                                        <div className="font-medium">{selectedLead.service}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Client Message */}
                        <div className="mb-8">
                            <h3 className="text-sm text-brand-secondary/60 uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" />
                                Original Message
                            </h3>
                            <div className="bg-brand-bg rounded-xl p-6 text-brand-secondary leading-relaxed border border-brand-accent/20 whitespace-pre-wrap">
                                {selectedLead.message}
                            </div>
                        </div>

                        {/* Internal Notes */}
                        <div>
                            <h3 className="text-sm text-brand-secondary/60 uppercase tracking-wider font-bold mb-4 flex items-center justify-between">
                                Internal Sales Notes
                                {noteDraft !== (selectedLead.notes || "") && (
                                    <Button
                                        size="sm"
                                        onClick={handleSaveNotes}
                                        disabled={isUpdating}
                                        className="h-8 text-xs py-0 px-3 bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        <Save className="w-3 h-3 mr-2" />
                                        {isUpdating ? "Saving..." : "Save Changes"}
                                    </Button>
                                )}
                            </h3>
                            <textarea
                                value={noteDraft}
                                onChange={(e) => setNoteDraft(e.target.value)}
                                placeholder="Add internal notes about this lead here. The client will never see this."
                                className="w-full h-40 bg-brand-bg rounded-xl p-4 text-brand-secondary border border-brand-accent/20 focus:outline-none focus:ring-1 focus:ring-brand-primary resize-none"
                            />
                        </div>

                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-brand-secondary/40">
                        <MessageSquare className="w-12 h-12 mb-4 opacity-50" />
                        <p>Select a lead from the sidebar to view details</p>
                    </div>
                )}
            </div>

            {/* Mobile Helper */}
            <div className="md:hidden text-center text-sm text-brand-secondary/50 pb-8 mt-4">
                Please view the dashboard on a desktop or tablet for full details.
            </div>

        </div>
    )
}
