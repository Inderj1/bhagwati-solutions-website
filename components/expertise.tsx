"use client"

import { useEffect, useRef, useState } from "react"
import { ClipboardList, Ruler, Wrench, HeadphonesIcon } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

const services = [
  {
    title: "Free Consultation",
    description: "Share your requirements and budget. Our experts visit your site, take measurements, and recommend the best products and materials tailored to your space.",
    icon: ClipboardList,
  },
  {
    title: "Custom Design & Selection",
    description:
      "Choose from a wide range of PVC doors, UPVC windows, ceiling designs, wall panel patterns, and modular kitchen layouts. We help you pick the perfect colors, finishes, and specifications.",
    icon: Ruler,
  },
  {
    title: "Professional Installation",
    description:
      "Our trained installation team handles everything — from precise fitting of doors and windows to seamless false ceiling and kitchen installations. Clean work, on-time delivery.",
    icon: Wrench,
  },
  {
    title: "After-Sales Support",
    description:
      "We stand behind our work with warranty support and maintenance guidance. Need a repair or replacement? We are just a phone call away — even years after installation.",
    icon: HeadphonesIcon,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12 md:mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">How We Work</p>
          <h2 className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Seamless</HighlightedText> service
            <br />
            start to finish
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From your first enquiry to the final installation, we make the entire process simple, transparent, and hassle-free. Here is how we bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[rgb(251,146,60)]" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-light text-muted-foreground/30">0{index + 1}</span>
                  <h3 className="text-xl font-medium">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
