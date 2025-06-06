"use client" // Ensure 'use client' is at the top if not already

import { Puzzle, Send } from "lucide-react" // Added Send icon
import { Input } from "@/components/ui/input" // Added Input import
import { Button } from "@/components/ui/button" // Added Button import

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
      </div>

      <div className="w-fit mx-auto mt-12 mb-12 text-center">
        <p className="text-sm text-slate-500">
          Stay tuned for updates as we add support for services like OpenAI, Anthropic, and others!
        </p>

        {/* Buttondown Newsletter Form */}
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/steipete"
          method="post"
          target="popupwindow"
          className="flex flex-col w-fit mx-auto sm:flex-row gap-3 items-center py-3"
        >
          <label htmlFor="bd-email-upcoming" className="sr-only">
            {" "}
            {/* Changed id for uniqueness */}
            Enter your email
          </label>
          <Input
            type="email"
            name="email"
            id="bd-email-upcoming" // Changed id for uniqueness
            placeholder="you@example.com"
            required
            className="w-64 bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:ring-sky-500 focus:border-sky-500 h-12 text-base"
          />
          <input type="hidden" value="vibemeter" name="tag" />
          <input type="hidden" name="embed" value="1" />
          <Button
            type="submit"
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-slate-50 font-semibold text-lg px-6 py-3 h-12 w-full sm:w-auto"
          >
            <Send className="mr-2 h-5 w-5" />
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-slate-500c">
          No spam, unsubscribe anytime.
        </p>
      </div>
      {/* End Buttondown Newsletter Form */}
    </section>
  )
}
