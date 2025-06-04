import HeroSection from "@/components/hero-section"
import InfoSection from "@/components/info-section"
import FeaturesSection from "@/components/features-section"
import UpcomingProvidersSection from "@/components/upcoming-providers-section" // New import
import CallToActionSection from "@/components/cta-section"
import Footer from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <InfoSection />
        <Separator className="my-12 md:my-20 bg-slate-700/50" />
        <FeaturesSection />
        <Separator className="my-12 md:my-20 bg-slate-700/50" /> {/* Existing separator */}
        <UpcomingProvidersSection /> {/* New section added here */}
        <Separator className="my-12 md:my-20 bg-slate-700/50" /> {/* New separator */}
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
