import { Button } from "@/components/ui/button"
import { ArrowDownToLine, Eye } from "lucide-react"
import Image from "next/image"
import AnimatedHeadline from "./animated-headline"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Main text content - now centered */}
        <div className="max-w-3xl text-center mx-auto mb-12 md:mb-16">
          {" "}
          {/* Added text-center and mx-auto */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 mb-6 leading-tight">
            Monitor Your<br /><AnimatedHeadline />AI Spending
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            {" "}
            {/* Added mx-auto for paragraph centering */}Vibe Meter puts your AI spend on the macOS menu bar.<br />real-time, multi-currency, open-source, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {" "}
            {/* Added justify-center */}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-transform duration-150 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="https://github.com/steipete/VibeMeter/releases">
                <ArrowDownToLine className="mr-2 h-5 w-5" />
                Download for macOS
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-transform duration-150 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="https://github.com/steipete/VibeMeter/">
                <Eye className="mr-2 h-5 w-5" />
                View Source
              </a>
            </Button>
          </div>
        </div>

        {/* Existing Hero Image - centered */}
        <div className="scale-[0.8]">
        <div className="relative max-w-md mx-auto md:max-w-lg lg:max-w-xl">
          <div className="absolute -inset-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image
            src="/vibemeter-main-ui.png"
            alt="Vibe Meter Main UI Screenshot"
            width={1024}
            height={768}
            className="rounded-lg shadow-2xl relative z-10"
            priority
          />
        </div>
      </div>
      </div>
    </section>
  )
}
