import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Calendar, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to stop losing customers
              <br />
              <span className="text-primary">to missed calls?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Join hundreds of service businesses that never miss an appointment. Get started in minutes, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>✓ 10-minute setup</div>
              <div>✓ No long-term contracts</div>
              <div>✓ 30-day money-back guarantee</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
