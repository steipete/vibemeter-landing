"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" // Ensured Input is imported
import { Download, Github, Twitter, Send } from "lucide-react" // Ensured Send is imported
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

        {/* Buttondown Newsletter Form */}
        <div className="max-w-md mx-auto mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-slate-100">Stay Updated!</h3>
          <p className="text-slate-400 mb-6">
            Subscribe to get notified about new features, provider integrations, and updates on Vibe Meter.
          </p>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/steipete"
            method="post"
            target="popupwindow"
            className="flex flex-col sm:flex-row gap-3 items-center"
          >
            <label htmlFor="bd-email-cta" className="sr-only">
              Enter your email
            </label>
            <Input
              type="email"
              name="email"
              id="bd-email-cta" // Unique ID for this form's email input
              placeholder="you@example.com"
              required
              className="flex-grow bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:ring-sky-500 focus:border-sky-500 h-12 text-base"
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
          <p className="text-xs text-slate-500 mt-3">
            No spam, unsubscribe anytime. Powered by{" "}
            <a
              href="https://buttondown.email"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-sky-400"
            >
              Buttondown
            </a>
            .
          </p>
        </div>
        {/* End Buttondown Newsletter Form */}

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {" "}
          {/* Removed mt-10 as newsletter form provides spacing */}
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
