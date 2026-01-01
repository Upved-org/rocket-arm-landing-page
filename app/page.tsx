import { TickerTape } from "@/components/ticker-tape"
import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { ChallengeSection } from "@/components/competition-section"
import { TicketRegistration } from "@/components/ticket-registration"
import { PrizePool } from "@/components/prize-pool"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { HardwareSection } from "@/components/hardware-section"
import { TourSection } from "@/components/tour-section"
import { GoalSection } from "@/components/goal-section"
import { SocialFeed } from "@/components/social-feed"
import { FooterWaitlist } from "@/components/footer-waitlist"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavHeader />
      <TickerTape />
      <HeroSection />
      <ChallengeSection />
      <TicketRegistration />
      <PrizePool />
      <LeaderboardSection />
      <HardwareSection />
      <TourSection />
      <GoalSection />
      <SocialFeed />
      <FooterWaitlist />
    </main>
  )
}
