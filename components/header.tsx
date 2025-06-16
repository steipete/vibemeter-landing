import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/vibemeter-app-icon.png" // Ensure this path is correct
            alt="Vibe Meter App Icon"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-xl font-semibold text-slate-100">Vibe Meter</span>
        </Link>
        <Button variant="secondary" size="sm" asChild>
          <a
            href="https://github.com/steipete/VibeMeter/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-slate-100"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </div>
    </header>
  )
}
