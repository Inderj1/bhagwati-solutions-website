"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowDown, Shield, Clock, Award } from "lucide-react"

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [mounted, setMounted] = useState(false)
  const accumulatedScrollRef = useRef(0)

  // Entrance animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // 3D scroll animation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const atTopOfPage = window.scrollY === 0

      if (atTopOfPage && !animationComplete) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + e.deltaY))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress >= 1) {
          setAnimationComplete(true)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
          contentRef.current.style.opacity = `${1 - newProgress * 0.6}`
        }
      } else if (atTopOfPage && animationComplete && e.deltaY < 0) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + e.deltaY))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress < 1) {
          setAnimationComplete(false)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
          contentRef.current.style.opacity = `${1 - newProgress * 0.6}`
        }
      }
    }

    // Skip touch scroll hijacking on mobile — let users scroll naturally
    // The 3D animation only plays on desktop via mouse wheel
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
    if (isTouchDevice) {
      setAnimationComplete(true)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [animationComplete])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hously-1.png"
          alt="Bhagwati Home Solutions — modern home interior with PVC doors and false ceiling in Faridabad"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays for depth and text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/25 via-transparent to-black/25" />
      <div className="absolute inset-0 z-[2] bg-black/20" />

      {/* Main content */}
      <div
        ref={contentRef}
        className="container mx-auto px-6 md:px-12 relative z-[25] flex flex-col items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20"
        style={{
          willChange: "transform, opacity",
          transform: "translateY(0px)",
          transformStyle: "preserve-3d",
          transition: "opacity 0.1s ease-out",
        }}
      >
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "200ms",
            }}
          >
            <span className="inline-block text-xs md:text-sm tracking-[0.35em] uppercase text-orange-300/90 mb-5 md:mb-6 px-4 py-1.5 border border-orange-300/20 rounded-full backdrop-blur-md bg-black/30" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
              Authorized Sintex Distributor &bull; Since 2009
            </span>
          </div>

          {/* Heading */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "400ms",
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-5 md:mb-6 tracking-tight leading-[1.08]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4)" }}>
              Your Trusted Partner
              <br />
              <span className="bg-gradient-to-r from-orange-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                for Home Solutions
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "600ms",
            }}
          >
            <p className="text-white/75 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              PVC Doors, UPVC Windows, False Ceilings, Wall Panelling, PVC Modular Kitchens &amp; Wardrobes — all under one roof in Faridabad.
            </p>
          </div>

          {/* CTA buttons */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "800ms",
            }}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-14">
              <a
                href="https://wa.me/919999886780?text=Hi%2C%20I%20am%20interested%20in%20your%20home%20solutions.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-3.5 text-sm font-medium tracking-wide rounded-lg shadow-lg shadow-green-500/25 hover:bg-[#1ebe5a] hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3.5 text-sm font-medium tracking-wide rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/15 hover:border-white/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "1000ms",
            }}
          >
            <div className="inline-flex flex-wrap justify-center gap-4 md:gap-0 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 px-4 py-4 md:px-2 md:py-3">
              {/* 17+ Years */}
              <div className="flex items-center gap-3 px-4 md:px-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-orange-400/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-300" />
                </div>
                <div className="text-left">
                  <span className="text-lg md:text-xl font-bold text-white leading-none">17+</span>
                  <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider mt-0.5">Years Exp.</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-10 bg-white/10 self-center" />

              {/* 10K+ Happy Customers */}
              <div className="flex items-center gap-3 px-4 md:px-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-orange-400/15 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-orange-300" />
                </div>
                <div className="text-left">
                  <span className="text-lg md:text-xl font-bold text-white leading-none">10K+</span>
                  <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider mt-0.5">Happy Customers</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-10 bg-white/10 self-center" />

              {/* 100% Genuine */}
              <div className="flex items-center gap-3 px-4 md:px-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-orange-400/15 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-orange-300" />
                </div>
                <div className="text-left">
                  <span className="text-lg md:text-xl font-bold text-white leading-none">100%</span>
                  <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider mt-0.5">Genuine Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 z-10 pointer-events-none bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Scroll indicator */}
      {animationComplete && (
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          style={{
            animation: "fadeInUp 0.5s ease-out forwards",
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <div className="animate-bounce">
            <ArrowDown className="w-4 h-4 text-white/40" />
          </div>
        </div>
      )}

      {/* Keyframe animation for scroll indicator */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
