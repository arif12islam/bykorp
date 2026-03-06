import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const { name, email, service, message } = await req.json()

        // Validate required fields
        if (!name || !email || !service || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            )
        }

        const accessKey = process.env.WEB3FORMS_KEY
        if (!accessKey) {
            return NextResponse.json(
                { error: "Email service not configured. Please contact us directly at info@bykorp.com" },
                { status: 500 }
            )
        }

        // Send via Web3Forms API
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `New Inquiry: ${service} - from ${name}`,
                from_name: "Bykorp Contact Form",
                name,
                email,
                service,
                message,
            }),
        })

        const data = await res.json()

        if (!data.success) {
            throw new Error(data.message || "Failed to send")
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
