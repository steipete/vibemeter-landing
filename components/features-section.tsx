import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  CloudCog,
  Coins,
  GaugeCircle,
  LockKeyhole,
  Feather,
  ImageUpIcon as AutoUpdateIcon,
  MoonStar,
  MousePointerIcon as MousePointerSquare,
  Table2,
  Sparkles,
  Heart,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  colorClass: string
}

const features: Feature[] = [
  {
    icon: Activity,
    title: "Real-time Spending Tracking",
    description: "Monitor costs directly from your menu bar.",
    colorClass: "text-blue-400",
  },
  {
    icon: CloudCog,
    title: "Multi-Provider Support",
    description: "Starts with Cursor AI, more to come.",
    colorClass: "text-purple-400",
  },
  {
    icon: Coins,
    title: "Multi-Currency Support",
    description: "USD, EUR, GBP, JPY, & 20+ more.",
    colorClass: "text-pink-400",
  },
  {
    icon: GaugeCircle,
    title: "Animated Gauge Display",
    description: "Visual spending progress at a glance.",
    colorClass: "text-sky-400",
  },
  {
    icon: LockKeyhole,
    title: "Secure Authentication",
    description: "Safe login via official web auth.",
    colorClass: "text-teal-400",
  },
  {
    icon: Feather,
    title: "Lightweight & Native",
    description: "Swift 6 powered, battery-friendly.",
    colorClass: "text-green-400",
  },
  {
    icon: AutoUpdateIcon,
    title: "Auto-Updates",
    description: "Secure EdDSA signature verification.",
    colorClass: "text-indigo-400",
  },
  {
    icon: MoonStar,
    title: "Dark Mode Support",
    description: "Adapts to your system appearance.",
    colorClass: "text-slate-400",
  },
  {
    icon: MousePointerSquare,
    title: "Right-Click Menu",
    description: "Quick access to settings & actions.",
    colorClass: "text-rose-400",
  },
  {
    icon: Table2,
    title: "Enhanced UI",
    description: "Professional cost table & progress bars.",
    colorClass: "text-amber-400",
  },
  {
    icon: Sparkles,
    title: "Free & Open Source",
    description: "Totally free, code on GitHub.",
    colorClass: "text-yellow-400",
  },
  {
    icon: Heart, // New feature
    title: "Made with Love",
    description: "Crafted with care for the Mac community.",
    colorClass: "text-red-400", // Warm color for the heart
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 hero-gradient-text">Packed with Power</h2>
        <p className="text-lg text-slate-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="mobile-text-half">Vibe Meter</span> offers a suite of features designed for clarity and control over your AI spending.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-slate-800/70 border-slate-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:border-blue-500/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <feature.icon className={`h-7 w-7 ${feature.colorClass}`} />
                  <CardTitle className="text-lg text-slate-100">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
