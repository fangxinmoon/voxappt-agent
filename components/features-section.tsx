"use client"

import { Card } from "@/components/ui/card"
import { Phone, Calendar, MessageSquare, CreditCard, Users, Clock, Zap, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const coreFeatures = [
  {
    icon: Phone,
    title: "24/7 Call Handling",
    description:
      "Never miss a booking opportunity. Our AI answers every call, even during busy hours or after closing time.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Integrates with your existing calendar and CRM systems like Square. Checks availability and books appointments instantly.",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Conversations",
    description:
      "Pre-configured workflows handle common inquiries. FAQ responses and appointment logic ready in 10 minutes.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Get up and running in minutes, not weeks. Our pre-built templates work for beauty, health, and pet services.",
  },
]

const advancedFeatures = [
  {
    icon: Users,
    title: "Human Handoff",
    description: "Seamlessly transfer complex calls to your staff when needed.",
  },
  {
    icon: Clock,
    title: "Call Recording",
    description: "Keep records of all interactions for quality and training purposes.",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Collect deposits and payments during the booking process.",
  },
  {
    icon: CheckCircle,
    title: "Smart Workflows",
    description: "Handle complex scenarios like appointment reminders and rescheduling.",
  },
]

export function FeaturesSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)
  const { ref: coreRef, isVisible: coreVisible } = useScrollAnimation(0.1)
  const { ref: advancedRef, isVisible: advancedVisible } = useScrollAnimation(0.1)

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Everything you need to
            <br />
            <span className="text-primary">never miss a customer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From basic appointment booking to advanced payment processing, VoxApptAgent handles it all so you can focus
            on your business.
          </p>
        </div>

        <div className="mb-20" ref={coreRef}>
          <h3
            className={`text-2xl font-semibold mb-8 text-center transition-all duration-800 ${coreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            Core Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 transform ${
                  coreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div ref={advancedRef}>
          <h3
            className={`text-2xl font-semibold mb-8 text-center transition-all duration-800 ${advancedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            Advanced Capabilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 transform ${
                  advancedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
