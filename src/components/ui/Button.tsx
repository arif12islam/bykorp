import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline"
    size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-montserrat font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50 tracking-tight",
                    // Intuitive, rounded borders per user request
                    "rounded-full shadow-sm hover:shadow-md",
                    {
                        "bg-brand-primary text-brand-bg hover:bg-brand-secondary":
                            variant === "primary",
                        "bg-brand-secondary text-brand-bg hover:bg-brand-primary":
                            variant === "secondary",
                        "border border-brand-accent text-brand-primary hover:bg-brand-primary hover:text-brand-bg":
                            variant === "outline",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-8 text-base": size === "md",
                        "h-14 px-10 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
