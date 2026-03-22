"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Phone } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 my-0 py-0 rounded-none overflow-hidden",
        scrolled || mobileMenuOpen
          ? "bg-primary backdrop-blur-md py-4 top-4 left-4 right-4 rounded-2xl"
          : "bg-transparent py-4 top-0 left-0 right-0 overflow-visible",
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between md:px-12">
        <Link href="/" className="flex items-center gap-2 group" onClick={scrollToTop}>
          <Image src="/images/bhagwati-logo.svg" alt="Bhagwati Home Solutions" width={180} height={40} className="w-auto h-8 invert brightness-0 filter" style={{ filter: "brightness(0) invert(1)" }} />
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          {[
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Products", href: "#products" },
            { label: "Services", href: "#services" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-[rgb(251,146,60)] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[rgb(251,146,60)] after:transition-all after:duration-300 text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919999886780"
            className={cn(
              "inline-flex items-center gap-2 text-sm px-5 py-2.5 transition-all duration-300",
              "bg-[rgb(251,146,60)] text-white border border-[rgb(251,146,60)] hover:bg-[rgb(234,128,42)] hover:border-[rgb(234,128,42)]",
            )}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        <button
          className="md:hidden z-50 transition-colors duration-300 text-white"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-6">
          <ul className="flex flex-col gap-6 mb-8">
            {[
              { label: "Home", href: "#hero" },
              { label: "About", href: "#about" },
              { label: "Products", href: "#products" },
              { label: "Services", href: "#services" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-[rgb(251,146,60)] transition-colors duration-300 text-white text-4xl font-light block"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="tel:+919999886780"
            className="inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 bg-[rgb(251,146,60)] text-white hover:bg-[rgb(234,128,42)] transition-all duration-300 mb-4"
            onClick={closeMobileMenu}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}
