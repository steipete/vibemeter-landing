import { Button } from "@/components/ui/button"
import { Download, Github, Twitter } from "lucide-react"
import Image from "next/image"

export default function CallToActionSection() {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Subtle background glow elements */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl opacity-40 animate-pulse-slower transform -translate-y-1/2"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <Image
          src="/vibemeter-app-icon.png"
          alt="Vibe Meter App Icon"
          width={80}
          height={80}
          className="mx-auto mb-6 rounded-2xl shadow-md"
        />
        <h2 className="text-4xl font-bold mb-6 hero-gradient-text">Get Vibe Meter Today</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto">
          It's free, open-source, and ready to help you manage your AI expenses with ease.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-10 py-6 rounded-lg shadow-lg transition-transform duration-150 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="https://github.com/steipete/VibeMeter/releases">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 hover:bg-slate-800 hover:text-blue-400 text-slate-300 font-semibold text-lg px-10 py-6 rounded-lg shadow-lg transition-transform duration-150 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="https://github.com/steipete/VibeMeter/">
              <Github className="mr-2 h-5 w-5" />
              Source Code
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 hover:bg-slate-800 hover:text-sky-400 text-slate-300 font-semibold text-lg px-10 py-6 rounded-lg shadow-lg transition-transform duration-150 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="https://x.com/VibeMeterApp">
              <Twitter className="mr-2 h-5 w-5" />
              Follow on X
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
