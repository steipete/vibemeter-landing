"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDownToLine, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const providers = ["Cursor", "Windsurf", "OpenAI", "Anthropic"]
const providerColors = [
  "from-blue-500 to-purple-600", // Cursor
  "from-teal-500 to-cyan-600", // Windsurf (example)
  "from-green-500 to-emerald-600", // OpenAI
  "from-orange-500 to-amber-600", // Anthropic
]

export default function HeroSection() {
  const [currentProviderIndex, setCurrentProviderIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProviderIndex((prevIndex) => (prevIndex + 1) % providers.length)
    }, 3000) // Change word every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  const currentProvider = providers[currentProviderIndex]
  const currentColorClass = providerColors[currentProviderIndex]

  return (
    <section className="py-24 md:py-40 relative overflow-hidden min-h-[70vh] flex flex-col justify-center">
      {/* Subtle background glow elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl opacity-40 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full filter blur-3xl opacity-40 animate-pulse-slower"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 mb-8">
          Monitor Your{" "}
          <span className="inline-block relative h-[1.2em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={currentProvider}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`inline-block absolute left-0 right-0 text-transparent bg-clip-text bg-gradient-to-r ${currentColorClass}`}
              >
                {currentProvider}
              </motion.span>
            </AnimatePresence>
          </span>
          <br className="md:hidden" /> AI Spending
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          A native macOS menu bar application that keeps track of your monthly AI spending with real-time updates,
          multi-currency support, and customizable notifications.
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
            className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/70 hover:text-blue-400 text-slate-300 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform duration-150 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="https://github.com/steipete/VibeMeter/">
              <Github className="mr-2 h-5 w-5" />
              View Source
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
