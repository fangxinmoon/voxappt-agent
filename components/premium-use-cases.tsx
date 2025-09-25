"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Phone, Calendar, CheckCircle, Clock } from "lucide-react"

export function PremiumUseCases() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'inbound' | 'outbound'>('inbound')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const inboundSteps = [
    { icon: Phone, title: "Receive Booking Request", desc: "Customer calls for appointment" },
    { icon: Calendar, title: "Collect Information", desc: "Gather service details and preferences" },
    { icon: CheckCircle, title: "Check Calendar", desc: "Verify availability in real-time" },
    { icon: ArrowRight, title: "Confirm & Record", desc: "Send confirmation and log appointment" },
  ]

  const outboundSteps = [
    { icon: Clock, title: "Appointment Reminder", desc: "Proactive customer outreach" },
    { icon: Phone, title: "Intent Understanding", desc: "Analyze confirm/cancel responses" },
    { icon: Calendar, title: "Smart Rescheduling", desc: "Handle cancellations automatically" },
    { icon: CheckCircle, title: "Follow-up Confirmation", desc: "Ensure customer satisfaction and feedback" },
  ]

  return (
    <section ref={sectionRef} id="use-cases" className="py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6">
            Intelligent <span className="italic">Workflows</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            VoxApptAgent orchestrates complex conversation flows with precision, handling both inbound requests and
            proactive outreach seamlessly.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-2 border border-border/50">
            <button
              onClick={() => setActiveTab('inbound')}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'inbound'
                  ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Inbound Calls</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('outbound')}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'outbound'
                  ? 'bg-secondary text-secondary-foreground shadow-lg transform scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Outbound Calls</span>
              </div>
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-500 transform ${
              activeTab === 'inbound' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            } ${activeTab === 'inbound' ? 'block' : 'hidden'}`}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-light">Inbound Call Workflow</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {inboundSteps.map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-500 transform ${
              activeTab === 'outbound' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            } ${activeTab === 'outbound' ? 'block' : 'hidden'}`}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-2xl font-serif font-light">Outbound Call Workflow</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {outboundSteps.map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/40 transition-colors">
                      <step.icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flow Visualization */}
        <div
          className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
            <h4 className="text-lg font-medium mb-4">Seamless Integration</h4>
            <p className="text-muted-foreground mb-8">
              All workflows integrate directly with your existing calendar systems and CRM platforms, ensuring zero
              disruption to your current operations.
            </p>
            <div className="flex items-center justify-center opacity-70">
              <img
                src="/integration-logos.png"
                alt="Integration Partners"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 transform rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
