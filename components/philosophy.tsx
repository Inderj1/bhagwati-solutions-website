"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { HighlightedText } from "./highlighted-text"

const values = [
  {
    title: "Uncompromising Quality",
    description:
      "We source only from trusted manufacturers like Sintex and leading UPVC brands. Every product we deliver meets rigorous quality standards for durability and performance.",
  },
  {
    title: "Affordable Pricing",
    description:
      "As authorized distributors, we offer factory-direct pricing without middlemen. Our customers get premium products at the most competitive rates in the Delhi NCR region.",
  },
  {
    title: "Expert Installation",
    description:
      "Our trained installation team ensures precise measurements and flawless fitting. We treat every home like our own — clean work, on-time delivery, zero hassle.",
  },
  {
    title: "Customer First",
    description:
      "From your first consultation to post-installation support, we are with you every step. Our 17+ years in business are built on relationships, not just transactions.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-16 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">About Us</p>
            <h2 className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Built on
              <br />
              <HighlightedText>trust</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <Image
                src="/images/about-interior-new.png"
                alt="Bhagwati Home Solutions showroom — PVC doors, false ceiling and wall panels installation in Faridabad"
                width={600}
                height={400}
                className="opacity-90 relative z-10 w-full"
                sizes="(min-width: 1024px) 50vw, 0vw"
              />
            </div>
          </div>

          {/* Right column - Story and values */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-4">
              Since 2009, Bhagwati Home Solutions has been transforming homes across Faridabad and Delhi NCR with premium PVC and UPVC products.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-12">
              What started as a small distribution business in Sector 16 has grown into a one-stop destination for PVC doors, UPVC windows, false ceilings, wall panelling, PVC modular kitchens, and wardrobes. As an authorized Sintex distributor, we bring you genuine products with expert installation — all at factory-direct prices.
            </p>

            {values.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
