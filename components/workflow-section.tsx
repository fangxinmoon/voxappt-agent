"use client"
import { ArrowRight, Phone, Calendar, CheckCircle, MessageSquare } from "lucide-react"

const inboundSteps = [
  {
    icon: Phone,
    title: "Incoming Call",
    description: "Customer calls for appointment",
  },
  {
    icon: MessageSquare,
    title: "Information Collection",
    description: "AI gathers service details and preferences",
  },
  {
    icon: Calendar,
    title: "Availability Check",
    description: "System checks calendar in real-time",
  },
  {
    icon: CheckCircle,
    title: "Booking Confirmed",
    description: "Appointment scheduled and confirmed",
  },
]

const outboundSteps = [
  {
    icon: Phone,
    title: "Appointment Reminder",
    description: "Automated reminder call sent",
  },
  {
    icon: MessageSquare,
    title: "Customer Response",
    description: "AI understands confirm/cancel intent",
  },
  {
    icon: Calendar,
    title: "Smart Rescheduling",
    description: "If cancelled, offers alternative times",
  },
  {
    icon: CheckCircle,
    title: "Updated Schedule",
    description: "Calendar automatically updated",
  },
]

export function WorkflowSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            How VoxApptAgent
            <br />
            <span className="text-primary">handles every scenario</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From incoming booking requests to proactive appointment reminders, our AI handles complex workflows
            automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inbound Workflow */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Inbound Calls</h3>
            <div className="space-y-6">
              {inboundSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < inboundSteps.length - 1 && <ArrowRight className="w-5 h-5 text-muted-foreground mt-3" />}
                </div>
              ))}
            </div>
          </div>

          {/* Outbound Workflow */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Outbound Reminders</h3>
            <div className="space-y-6">
              {outboundSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < outboundSteps.length - 1 && <ArrowRight className="w-5 h-5 text-muted-foreground mt-3" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
