"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { LeadStatus } from "@prisma/client"

export async function getLeads() {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return { success: true, leads }
    } catch (error) {
        console.error("Failed to fetch leads:", error)
        return { success: false, error: "Failed to fetch leads." }
    }
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
    try {
        await prisma.lead.update({
            where: { id },
            data: { status, updatedAt: new Date() } // manually updating updatedAt as a failsafe
        })
        revalidatePath("/admin")
        return { success: true }
    } catch (error) {
        console.error("Failed to update lead status:", error)
        return { success: false, error: "Failed to update lead status." }
    }
}

export async function updateLeadNotes(id: string, notes: string) {
    try {
        await prisma.lead.update({
            where: { id },
            data: { notes, updatedAt: new Date() }
        })
        revalidatePath("/admin")
        return { success: true }
    } catch (error) {
        console.error("Failed to update lead notes:", error)
        return { success: false, error: "Failed to update lead notes." }
    }
}
