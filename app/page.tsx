import { PremiumHeader } from "@/components/premium-header"
import { PremiumHero } from "@/components/premium-hero"
import { SocialProof } from "@/components/social-proof"
import { PremiumFeatures } from "@/components/premium-features"
import { PremiumIndustries } from "@/components/premium-industries"
import { PremiumUseCases } from "@/components/premium-use-cases"
import { PremiumCTA } from "@/components/premium-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PremiumHeader />
      <PremiumHero />
      <SocialProof />
      <PremiumFeatures />
      <PremiumIndustries />
      <PremiumUseCases />
      <PremiumCTA />
    </main>
  )
}
