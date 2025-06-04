import { Button } from "@/components/ui/button"
import { ArrowDownToLine, Github } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background glow elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slower"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 md:mb-12">
          <Image
            src="/vibemeter-app-icon.png"
            alt="Vibe Meter App Icon"
            width={100}
            height={100}
            className="mx-auto mb-6 rounded-2xl shadow-xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight hero-gradient-text">Vibe Meter</h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            Monitor Your Cursor AI Spending right from your menu bar.
          </p>
        </div>

        <div className="relative max-w-sm mx-auto mb-12 md:mb-16">
          {" "}
          {/* Changed from max-w-xs to max-w-sm */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image
            src="/vibemeter-main-ui.png"
            alt="Vibe Meter Main UI Screenshot"
            width={1024} // Original width, Tailwind's max-w will control display size
            height={768} // Original height
            className="rounded-lg shadow-2xl relative z-10"
            priority
          />
        </div>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
          Vibe Meter puts your AI spend on the macOS menu bar—real-time, multi-currency, no surprises.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform duration-150 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="https://github.com/steipete/VibeMeter/releases">
              <ArrowDownToLine className="mr-2 h-5 w-5" />
              Download for macOS
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 hover:bg-slate-800 hover:text-blue-400 text-slate-300 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform duration-150 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="https://github.com/steipete/VibeMeter/">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
