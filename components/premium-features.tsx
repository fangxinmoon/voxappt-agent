"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Phone, Calendar, MessageSquare, CreditCard } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "24/7 Call Handling",
    description: "Never miss a call again. Our AI answers every call professionally, even during peak hours.",
    stat: "99.9% uptime",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Seamlessly integrates with your existing calendar and CRM systems for effortless booking.",
    stat: "10min setup",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Conversations",
    description: "Pre-configured workflows handle complex inquiries and FAQs with human-like responses.",
    stat: "95% accuracy",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Collect deposits and payments during calls, reducing no-shows and securing bookings.",
    stat: "40% fewer no-shows",
  },
]

export function PremiumFeatures() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="features" className="py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 text-balance">
            The complete platform to
            <br />
            <span className="italic">transform your business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop losing customers to missed calls. Start converting every inquiry into revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <span className="text-sm text-muted-foreground font-mono">{feature.stat}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
