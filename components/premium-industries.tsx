"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

const industries = [
  {
    title: "Beauty & Wellness",
    description:
      "Hair salons, nail studios, spas, and beauty clinics trust Voca to handle their high-volume booking needs.",
    image: "/modern-beauty-salon-interior-with-stylish-chairs-a.jpg",
    stats: ["300% booking increase", "50% fewer no-shows"],
  },
  {
    title: "Health & Fitness",
    description:
      "Medical practices, dental offices, gyms, and yoga studios streamline operations with intelligent call handling.",
    image: "/modern-medical-clinic-reception-area-with-comforta.jpg",
    stats: ["24/7 availability", "95% patient satisfaction"],
  },
  {
    title: "Pet Services",
    description: "Veterinary clinics and pet grooming services never miss an urgent call or booking opportunity.",
    image: "/professional-pet-grooming-salon-with-happy-dogs-an.jpg",
    stats: ["Emergency call routing", "Instant appointment confirmation"],
  },
]

export function PremiumIndustries() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="industries" className="py-32 border-t border-border/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 text-balance">
            Built for service
            <br />
            <span className="italic">excellence</span>
          </h2>
        </div>

        <div className="space-y-32">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h3 className="text-3xl md:text-4xl font-serif font-light mb-6">{industry.title}</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{industry.description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {industry.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="bg-accent px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">{stat}</span>
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
