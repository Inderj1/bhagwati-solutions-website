import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/bhagwati-logo.svg" alt="Bhagwati Home Solutions" width={180} height={40} className="w-auto h-8" />
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Your trusted partner for PVC doors, UPVC windows, false ceilings, wall panelling, PVC modular kitchens, and wardrobes in Faridabad. Authorized Sintex distributor since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+919999886780" className="hover:text-foreground transition-colors">
                  +91 99998 86780
                </a>
              </li>
              <li>
                <a href="tel:+918587806681" className="hover:text-foreground transition-colors">
                  +91 85878 06681
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919999886780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="leading-relaxed">
                SCO 84-85, Kesar Building,<br />
                Huda Market, Sector 16,<br />
                Faridabad - 121002, Haryana
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bhagwati Home Solutions & Distributing Company. All rights reserved.</p>
          <p className="text-xs">GSTIN: 06AVWPS8221J1ZU</p>
        </div>
      </div>
    </footer>
  )
}
