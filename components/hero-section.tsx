"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, Clock, Zap, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute top-20 left-20 animate-float">
        <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
          <Phone className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
          <Calendar className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
          <Clock className="w-7 h-7 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">VoxApptAgent for Service Businesses</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Never miss another call.
            <br />
            <span className="text-primary">Never lose another customer.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
            VoxApptAgent handles appointments 24/7 for beauty salons, health clinics, and pet services. Reduce missed
            calls by 95% and boost revenue instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 group">
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 bg-card/50 backdrop-blur-sm"
            >
              Watch Demo Video
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Always Available</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Fewer Missed Calls</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">10min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">$0</div>
              <div className="text-sm text-muted-foreground">Hiring Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
