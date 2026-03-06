import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Story } from "@/components/sections/Story"
import { Services } from "@/components/sections/Services"
import { Reviews } from "@/components/sections/Reviews"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-secondary">
      <Navbar />
      <Hero />
      <Story />
      <Services />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
