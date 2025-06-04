"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = ["Cursor", "Windsurf", "OpenAI", "Anthropic"]
const ANIMATION_INTERVAL = 5000 // 5s seconds

export default function AnimatedHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, ANIMATION_INTERVAL)

    return () => clearInterval(intervalId)
  }, [])

  return (
<span className="inline-block relative h-[1.3em] w-[5em] align-middle text-center">
  <AnimatePresence mode="wait">
    <motion.span
      key={words[currentIndex]}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{
        y: { type: "spring", stiffness: 200, damping: 20 },
        opacity: { duration: 0.3 },
      }}
      className="absolute top-[-13px] bottom-0 left-0 right-3 overflow-visible flex items-center justify-end whitespace-nowrap animated-word-gradient">
      {words[currentIndex]}
    </motion.span>
  </AnimatePresence>
</span>
  )
}
