"use client"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function PremiumHero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight text-balance">
            Never miss another
            <br />
            <span className="italic">customer call</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Voca handles appointments 24/7 with industry-leading AI, so you can focus on what matters most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              data-cal-link="xinyue-fang/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent"
              data-cal-link="xinyue-fang/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-muted-foreground mb-2">SCROLL TO DISCOVER</p>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-6 bg-muted-foreground/50 animate-pulse" />
          <div className="w-px h-6 bg-muted-foreground/30 animate-pulse" style={{animationDelay: '0.5s'}} />
          <div className="w-px h-6 bg-muted-foreground/20 animate-pulse" style={{animationDelay: '1s'}} />
        </div>
      </div>
    </section>
  )
}
