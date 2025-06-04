import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-8 bg-slate-950/80 border-t border-slate-700/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm mb-4 md:mb-0">
          &copy; {currentYear} Vibe Meter. Completely free and open source.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://github.com/steipete/VibeMeter/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vibe Meter on GitHub"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://x.com/VibeMeterApp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vibe Meter on Twitter/X"
            className="text-slate-400 hover:text-sky-400 transition-colors"
          >
            <Twitter size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
