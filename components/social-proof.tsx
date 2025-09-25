"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const companies = [
  { name: "Salon Elite", logo: "/salon-elite-logo.jpg" },
  { name: "FitCore", logo: "/fitness-gym-logo.png" },
  { name: "PetCare Plus", logo: "/pet-care-logo.jpg" },
  { name: "Wellness Clinic", logo: "/medical-clinic-logo.png" },
  { name: "Yoga Studio", logo: "/yoga-studio-logo.png" },
]

export function SocialProof() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 border-b border-border/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm text-muted-foreground font-medium tracking-wider uppercase mb-8">
            Trusted by leading service businesses
          </p>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-12 md:gap-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={company.logo || "/placeholder.svg?height=80&width=160"}
                alt={`${company.name} logo`}
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
              <div className="text-sm text-muted-foreground">Calls handled daily</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Businesses served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
