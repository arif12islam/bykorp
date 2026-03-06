"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Mail, MapPin, Phone } from "lucide-react"

// Form Validation Schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    service: z.string().min(1, "Please select a service."),
    message: z.string().min(10, "Message must be at least 10 characters."),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log("Form data submitted:", data)
        setIsSubmitting(false)
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
    }

    return (
        <Section id="contact" className="bg-brand-bg">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-primary mb-6 tracking-tighter">
                            Initiate Contact
                        </h2>
                        <div className="w-16 h-1 bg-brand-accent mb-8" />
                        <p className="text-brand-secondary mb-12 max-w-md">
                            Ready to upgrade your digital infrastructure? Reach out to our team to discuss how Bykorp can scale your enterprise.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-brand-secondary">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-brand-accent/30 shadow-sm">
                                    <Mail size={20} strokeWidth={1.5} className="text-brand-primary" />
                                </div>
                                <div>
                                    <p className="font-montserrat font-bold text-sm">Email</p>
                                    <a href="mailto:info@bykorp.com" className="hover:text-brand-primary transition-colors">
                                        info@bykorp.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-brand-secondary">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-brand-accent/30 shadow-sm">
                                    <Phone size={20} strokeWidth={1.5} className="text-brand-primary" />
                                </div>
                                <div>
                                    <p className="font-montserrat font-bold text-sm">Phone</p>
                                    <a href="tel:+8801630346988" className="hover:text-brand-primary transition-colors">
                                        +8801630346988
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-brand-secondary">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-brand-accent/30 shadow-sm">
                                    <MapPin size={20} strokeWidth={1.5} className="text-brand-primary" />
                                </div>
                                <div>
                                    <p className="font-montserrat font-bold text-sm">Address</p>
                                    <p>Khilgaon, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-brand-accent/20 shadow-xl">
                        <h3 className="text-2xl font-montserrat font-bold text-brand-primary mb-6">Send a Message</h3>

                        {isSuccess && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm">
                                Thank you. Your message has been received. We will contact you shortly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-brand-secondary mb-2">Full Name</label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    {...register("name")}
                                    error={errors.name?.message}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-brand-secondary mb-2">Work Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    {...register("email")}
                                    error={errors.email?.message}
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-brand-secondary mb-2">Primary Interest</label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        className={`flex h-12 w-full appearance-none rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary bg-transparent ${errors.service ? 'border-red-500' : 'border-brand-accent'} text-brand-secondary`}
                                        {...register("service")}
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="AI Automation">AI Automation</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="SEO/Local SEO">SEO / Local SEO</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {/* Custom dropdown arrow */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-secondary">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                                {errors.service && (
                                    <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-brand-secondary mb-2">Project Details</label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your goals..."
                                    {...register("message")}
                                    error={errors.message?.message}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    )
}
