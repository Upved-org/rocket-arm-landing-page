import { TickerTape } from "@/components/ticker-tape"
import { HeroSection } from "@/components/hero-section"
import { HardwareSection } from "@/components/hardware-section"
import { TourSection } from "@/components/tour-section"
import { GoalSection } from "@/components/goal-section"
import { TikTokPortal } from "@/components/tiktok-portal"
import { FooterWaitlist } from "@/components/footer-waitlist"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TickerTape />
      <HeroSection />
      <HardwareSection />
      <TourSection />
      <GoalSection />
      <TikTokPortal />
      <FooterWaitlist />
    </main>
  )
}
