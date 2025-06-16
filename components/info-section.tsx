import Image from "next/image"
import { BellRing, Zap } from "lucide-react"

export default function InfoSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-gradient-text">Stay Informed, Effortlessly.</h2>
            <p className="text-lg text-slate-300 mb-4">
              <span className="mobile-text-half">Vibe Meter</span> provides a clear overview of your AI service provider costs, starting with Cursor AI. See your
              usage and limits at a glance, directly in your menu bar.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-slate-400">
                  <span className="font-semibold text-slate-200">Real-time Tracking:</span> Know your exact spending as
                  it happens.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <BellRing className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                <p className="text-slate-400">
                  <span className="font-semibold text-slate-200">Smart Notifications:</span> Good vibes only—unless your
                  spend spikes. Then we ping you.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="/vibemeter-providers-settings.png"
              alt="Vibe Meter Providers Settings"
              width={1024}
              height={768}
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
