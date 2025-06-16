import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-8 bg-slate-950/80 border-t border-slate-700/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-slate-400 text-sm">
            Brought to you by{" "}
            <Link href="https://mariozechner.at/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              @badlogic
            </Link>,{" "}
            <Link href="https://lucumr.pocoo.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              @mitsuhiko
            </Link>{" "}
            and{" "}
            <Link href="https://steipete.me" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              @steipete
            </Link>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} <span className="mobile-text-half">Vibe Meter</span>. Completely free and open source.
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
      </div>
    </footer>
  )
}
