"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What types of PVC doors do you offer?",
    answer:
      "We are authorized Sintex distributors and offer a complete range of PVC doors including bathroom doors, bedroom doors, kitchen doors, and balcony doors. Available in multiple colors like Off White, Brown, Wooden Finish, Coffee, and Vengi. All doors are 24mm thick, waterproof, termite-proof, and virtually maintenance-free.",
  },
  {
    question: "What is the difference between PVC and UPVC?",
    answer:
      "PVC (Polyvinyl Chloride) is a versatile plastic used in doors, ceilings, and wall panels. UPVC (Unplasticized PVC) is a more rigid form, ideal for windows and external doors because it offers superior thermal insulation, noise reduction (up to 80%), and weather resistance. We supply both PVC and UPVC products depending on your application.",
  },
  {
    question: "Are PVC false ceilings suitable for bathrooms and kitchens?",
    answer:
      "Absolutely. PVC false ceilings are specifically designed for moisture-prone areas. They are 100% waterproof, mold-resistant, and do not sag or warp in humid conditions. This makes them ideal for bathrooms, kitchens, balconies, and basements. Installation takes just 1-2 days, and they require almost no maintenance.",
  },
  {
    question: "How long do your products last?",
    answer:
      "Our PVC doors and UPVC windows are built to last 20-25 years with minimal maintenance. PVC false ceilings and wall panels have a lifespan of 15-20 years. Sintex products in particular are known for exceptional durability — they are termite-proof, rot-proof, and resistant to harsh weather conditions.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, we provide end-to-end professional installation for all our products. Our trained team handles site measurement, product fitting, and finishing. Installation is included in our service for most products, and we ensure clean, on-time completion with minimal disruption to your daily routine.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We are based in Sector 16, Faridabad, and serve all areas of Faridabad, as well as the wider Delhi NCR region including Noida, Gurgaon, and parts of South Delhi. For bulk or commercial orders, we can arrange delivery and installation across Haryana and Delhi.",
  },
  {
    question: "How can I get a price quote?",
    answer:
      "Getting a quote is simple. You can call us at +91 9999886780, WhatsApp us, or visit our showroom at SCO 84-85, Kesar Building, Huda Market, Sector 16, Faridabad. For accurate pricing, we recommend a free site visit where our team can take measurements and suggest the best solutions for your budget.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">FAQ</p>
          <h2 className="text-3xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Questions & Answers
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
