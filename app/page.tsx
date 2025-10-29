import { PersonalityShowcase } from "@/components/personality-showcase"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PersonalityShowcase />
    </main>
  )
}
