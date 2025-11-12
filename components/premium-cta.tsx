"use client"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function PremiumCTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-32 border-t border-border/50">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-balance">
            Ready to transform
            <br />
            <span className="italic">your business?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of service businesses that never miss a customer call. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              data-tally-open="VLEe7l"
              data-tally-layout="modal"
              data-tally-width="880"
              data-tally-overlay="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
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
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Setup in 10 minutes
          </p>
        </div>
      </div>
    </section>
  )
}
