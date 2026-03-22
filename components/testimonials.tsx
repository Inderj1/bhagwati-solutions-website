"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Sector 21, Faridabad",
    rating: 5,
    text: "Got Sintex PVC doors installed in all three bathrooms. The quality is outstanding and the team finished the work in a single day. Very happy with the pricing too — much cheaper than what other shops were quoting.",
    product: "PVC Doors",
  },
  {
    name: "Priya Sharma",
    location: "Sector 14, Faridabad",
    rating: 5,
    text: "We renovated our entire kitchen with Bhagwati's modular kitchen solution. The design team was very helpful in selecting layouts and materials. The final result looks stunning and fits our budget perfectly.",
    product: "Modular Kitchen",
  },
  {
    name: "Amit Gupta",
    location: "NIT, Faridabad",
    rating: 5,
    text: "Installed PVC false ceiling in our living room and two bedrooms. The work was neat and clean, and the ceiling looks modern and elegant. It has been over a year now and there is zero maintenance required.",
    product: "PVC False Ceiling",
  },
  {
    name: "Sunita Verma",
    location: "Sector 16, Faridabad",
    rating: 4,
    text: "We have been purchasing from Bhagwati for over 5 years now. Their UPVC windows are top quality — our rooms are so much quieter now and the AC bills have gone down noticeably. Highly recommend them.",
    product: "UPVC Windows",
  },
]

export function Testimonials() {
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
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-16 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            What our customers say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`bg-background p-8 relative transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-orange-200 mb-4" strokeWidth={1.5} />

              <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex gap-0.5 mb-1 justify-end">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[rgb(251,146,60)] text-[rgb(251,146,60)]" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground tracking-wide uppercase">{testimonial.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
