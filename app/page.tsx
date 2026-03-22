import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Projects } from "@/components/projects"
import { Expertise } from "@/components/expertise"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Projects />
      <Expertise />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
