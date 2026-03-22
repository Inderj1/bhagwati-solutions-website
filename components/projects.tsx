"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const products = [
  {
    id: 1,
    title: "PVC Doors",
    category: "Sintex Authorized",
    description: "Waterproof, termite-proof doors for bathrooms, bedrooms & kitchens",
    price: "From \u20B91,500",
    image: "/images/products/pvc-doors-new.jpg",
  },
  {
    id: 2,
    title: "UPVC Windows & Doors",
    category: "Energy Efficient",
    description: "Multi-chambered frames with thermal insulation and noise reduction",
    price: "Custom Pricing",
    image: "/images/products/upvc-windows-new.jpg",
  },
  {
    id: 3,
    title: "PVC False Ceilings",
    category: "Quick Install",
    description: "Lightweight, moisture-resistant ceilings installed in just 1-2 days",
    price: "From \u20B970/sq ft",
    image: "/images/products/false-ceiling-new.jpg",
  },
  {
    id: 4,
    title: "PVC Wall Panels",
    category: "Low Maintenance",
    description: "Elegant panels that replace paint, tiles & wallpaper at a fraction of cost",
    price: "From \u20B940/sq ft",
    image: "/images/products/wall-panels-new.jpg",
  },
  {
    id: 5,
    title: "Modular Kitchens",
    category: "Custom Design",
    description: "Fully customized kitchen layouts with premium hardware and fittings",
    price: "Custom Pricing",
    image: "/images/products/modular-kitchen-new.png",
  },
  {
    id: 6,
    title: "Home Furniture",
    category: "Durable Solutions",
    description: "Living room, bedroom & storage furniture built with PVC and UPVC materials",
    price: "Custom Pricing",
    image: "/images/products/home-furniture-new.png",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(products[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="py-16 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">What We Offer</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Our Products</h2>
          </div>
          <a
            href="https://wa.me/919999886780?text=Hi%2C%20I%20want%20to%20know%20about%20your%20product%20range."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Request full catalogue
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => { imageRefs.current[index] = el }} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === product.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(product.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wide text-foreground">
                  {product.category}
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{product.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <span className="text-sm font-medium text-[rgb(251,146,60)] whitespace-nowrap">{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
