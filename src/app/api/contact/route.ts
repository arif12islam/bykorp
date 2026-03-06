import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

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

        // Check env vars
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars")
            return NextResponse.json(
                { error: "Email service not configured. Please contact us directly at info@bykorp.com" },
                { status: 500 }
            )
        }

        // Create transporter with Gmail SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        // Send email
        await transporter.sendMail({
            from: `"Bykorp Contact Form" <${process.env.GMAIL_USER}>`,
            to: "bykorp.digital@gmail.com",
            replyTo: email,
            subject: `New Inquiry: ${service} - from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #14274E; border-bottom: 2px solid #9BA4B4; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; font-weight: bold; color: #394867; width: 120px;">Name:</td>
                            <td style="padding: 10px; color: #14274E;">${name}</td>
                        </tr>
                        <tr style="background: #F1F6F9;">
                            <td style="padding: 10px; font-weight: bold; color: #394867;">Email:</td>
                            <td style="padding: 10px; color: #14274E;">
                                <a href="mailto:${email}" style="color: #14274E;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; font-weight: bold; color: #394867;">Service:</td>
                            <td style="padding: 10px; color: #14274E;">${service}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px; padding: 15px; background: #F1F6F9; border-radius: 8px;">
                        <p style="font-weight: bold; color: #394867; margin: 0 0 8px 0;">Message:</p>
                        <p style="color: #14274E; margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                    <p style="margin-top: 20px; font-size: 12px; color: #9BA4B4;">
                        Sent from bykorp.com contact form
                    </p>
                </div>
            `,
        })

        return NextResponse.json({ success: true })
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : "Unknown error"
        console.error("Email send error:", errMsg)
        return NextResponse.json(
            { error: `Failed to send: ${errMsg}` },
            { status: 500 }
        )
    }
}

