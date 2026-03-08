import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import * as z from "zod"

// Strict Server-Side Validation Schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().regex(/^(?:\+8801|01)[3-9]\d{8}$/, "Must be a valid Bangladeshi phone number."),
    service: z.string().min(1, "Please select a service."),
    message: z.string().min(10, "Message must be at least 10 characters."),
    source: z.string().optional()
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        // Validate incoming payload
        const parsed = contactSchema.safeParse(body)
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid form data.", details: parsed.error.flatten().fieldErrors },
                { status: 400 }
            )
        }

        const { name, email, phone, service, message, source } = parsed.data

        // Save to PostgreSQL Database via Prisma as a new Lead
        const submission = await prisma.lead.create({
            data: {
                name,
                email,
                phone,
                service,
                message,
                source: source || "Direct Traffic",
            }
        })

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL
        if (!webhookUrl) {
            return NextResponse.json(
                { success: true, warning: "Saved to database, but Discord webhook not configured." },
                { status: 200 }
            )
        }

        // Send via Discord Webhook
        const res = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "Bykorp Website",
                avatar_url: "https://www.bykorp.com/bykorp_logo.png",
                embeds: [
                    {
                        title: "📨 New Contact Form Submission",
                        color: 1334814, // #14274E in decimal
                        fields: [
                            { name: "Name", value: name, inline: true },
                            { name: "Email", value: email, inline: true },
                            { name: "Phone", value: phone, inline: true },
                            { name: "Service", value: service, inline: true },
                            { name: "Message", value: message, inline: false },
                        ],
                        timestamp: new Date().toISOString()
                    }
                ]
            }),
        })

        if (!res.ok) {
            throw new Error(`Discord API error: ${res.statusText}`)
        }

        return NextResponse.json({ success: true })
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : "Unknown error"
        console.error("Contact form error:", errMsg)
        return NextResponse.json(
            { error: `Failed to send: ${errMsg}` },
            { status: 500 }
        )
    }
}
