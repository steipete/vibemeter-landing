import { Puzzle } from "lucide-react"

export default function UpcomingProvidersSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900/30">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block p-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full mb-8">
          <Puzzle className="h-12 w-12 text-sky-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-gradient-text">More Providers Coming Soon</h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          We're actively working to expand Vibe Meter's capabilities by integrating with more of your favorite AI
          service providers. Our goal is to give you a comprehensive view of all your AI spending in one convenient
          place.
        </p>
        <p className="text-md text-slate-500">
          Stay tuned for updates as we add support for services like OpenAI, Anthropic, and others!
        </p>
      </div>
    </section>
  )
}
