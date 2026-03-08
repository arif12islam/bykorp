import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, service, message } = await req.json()

        // Validate required fields
        if (!name || !email || !phone || !service || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            )
        }

        // Save to PostgreSQL Database via Prisma
        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                phone,
                service,
                message,
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
