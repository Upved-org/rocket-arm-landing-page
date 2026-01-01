import { TickerTape } from "@/components/ticker-tape"
import { HeroSection } from "@/components/hero-section"
import { CompetitionSection } from "@/components/competition-section"
import { HardwareSection } from "@/components/hardware-section"
import { TourSection } from "@/components/tour-section"
import { GoalSection } from "@/components/goal-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { FooterWaitlist } from "@/components/footer-waitlist"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TickerTape />
      <HeroSection />
      <CompetitionSection />
      <HardwareSection />
      <TourSection />
      <GoalSection />
      <SocialMediaSection />
      <FooterWaitlist />
    </main>
  )
}
