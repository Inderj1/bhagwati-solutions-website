"use client"

import { ArrowRight, Phone, MapPin } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

export function CallToAction() {
  return (
    <section id="contact" className="py-16 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Get In Touch</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Ready to transform
            <br />
            your <HighlightedText>home</HighlightedText>?
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Visit our showroom or get a free consultation. Every beautiful home starts with a simple conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/919999886780?text=Hi%2C%20I%20am%20interested%20in%20your%20home%20solutions.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#1da851] transition-colors duration-300 group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+919999886780"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              +91 99998 86780
            </a>
          </div>

          {/* Contact details */}
          <div className="grid md:grid-cols-3 gap-8 text-sm text-primary-foreground/70">
            <div>
              <h4 className="font-medium text-primary-foreground mb-2">Visit Our Showroom</h4>
              <p className="flex items-start gap-2 justify-center">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                SCO 84-85, Kesar Building, Huda Market, Sector 16, Faridabad - 121002
              </p>
            </div>
            <div>
              <h4 className="font-medium text-primary-foreground mb-2">Call Us</h4>
              <p>+91 99998 86780</p>
              <p>+91 85878 06681</p>
            </div>
            <div>
              <h4 className="font-medium text-primary-foreground mb-2">Working Hours</h4>
              <p>Monday - Saturday</p>
              <p>10:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Google Map embed */}
        <div className="mt-16 rounded-sm overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.123!2d77.312!3d28.410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector+16+Huda+Market+Faridabad!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="300"
            style={{ border: 0, filter: "grayscale(0.3)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhagwati Home Solutions Location - Sector 16, Faridabad"
          />
        </div>
      </div>
    </section>
  )
}
