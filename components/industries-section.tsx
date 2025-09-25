"use client"

import { Card } from "@/components/ui/card"
import { Scissors, Stethoscope, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const industries = [
  {
    icon: Scissors,
    title: "Beauty Services",
    description: "Hair salons, nail studios, spas, and beauty clinics",
    features: ["Appointment scheduling", "Service reminders", "Cancellation handling", "Waitlist management"],
    image: "/modern-beauty-salon-interior-with-stylish-chairs-a.jpg",
  },
  {
    icon: Stethoscope,
    title: "Health & Fitness",
    description: "Private clinics, dental offices, gyms, and yoga studios",
    features: ["Patient scheduling", "Insurance verification", "Appointment confirmations", "Follow-up calls"],
    image: "/modern-medical-clinic-reception-area-with-comforta.jpg",
  },
  {
    icon: Heart,
    title: "Pet Services",
    description: "Pet grooming, veterinary clinics, and pet care services",
    features: ["Pet appointment booking", "Vaccination reminders", "Emergency triage", "Owner notifications"],
    image: "/professional-pet-grooming-salon-with-happy-dogs-an.jpg",
  },
]

export function IndustriesSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)
  const cardRefs = [useScrollAnimation(0.1), useScrollAnimation(0.1), useScrollAnimation(0.1)]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Built for service businesses
            <br />
            <span className="text-primary">that care about customers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            VoxApptAgent understands the unique needs of appointment-based businesses and delivers tailored solutions
            for each industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const cardRef = cardRefs[index]
            const cardVisible = cardRefs[index].isVisible

            return (
              <Card
                key={index}
                ref={cardRef.ref}
                className={`group overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 transform ${
                  cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>
                  <ul className="space-y-3">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
