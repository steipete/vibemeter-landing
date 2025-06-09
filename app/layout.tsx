import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vibemeter.ai"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Important for resolving relative image paths
  title: {
    default: "Vibe Meter - Monitor Your AI Spending on macOS",
    template: "%s | Vibe Meter",
  },
  description:
    "Vibe Meter puts your AI spend on the macOS menu bar. Real-time tracking for Cursor, OpenAI, Anthropic, and more. Multi-currency support, open-source, and no surprises. Take control of your AI costs.",
  keywords: [
    "Vibe Meter",
    "AI spending",
    "macOS menu bar app",
    "Cursor AI",
    "OpenAI",
    "Anthropic",
    "Windsurf",
    "AI cost tracking",
    "developer tools",
    "macOS app",
    "multi-currency",
    "open source",
    "budget management",
    "API cost",
    "LLM spending",
  ],
  authors: [{ name: "Peter Steinberger", url: "https://steipete.com" }],
  creator: "Peter Steinberger",
  publisher: "Vibe Meter",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/vibemeter-app-icon.png", // Main app icon (used by default for favicon if .ico not specified at root)
    shortcut: "/favicon.ico", // Explicitly reference the .ico
    apple: "/apple-touch-icon.png",
    // You can add more sizes if needed:
    // other: [
    //   { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon-precomposed.png' },
    //   { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    //   { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
    // ],
  },

  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0F1E" }, // From your globals.css --background
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }, // Default light theme
  ],

  openGraph: {
    title: "Vibe Meter - Monitor Your AI Spending on macOS",
    description:
      "Real-time AI cost tracking in your macOS menu bar. Supports Cursor, OpenAI, Anthropic & more. Free & Open Source.",
    url: siteUrl,
    siteName: "Vibe Meter",
    images: [
      {
        url: "/og-image.png", // Relative to metadataBase
        width: 1200,
        height: 630,
        alt: "Vibe Meter App Interface and Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vibe Meter - Monitor Your AI Spending on macOS",
    description: "Track AI costs (Cursor, OpenAI, etc.) on your Mac menu bar. Real-time, multi-currency, open-source.",
    site: "@VibeMeterApp", // Your app's Twitter handle
    creator: "@steipete", // Creator's Twitter handle
    images: ["/twitter-image.png"], // Relative to metadataBase
  },

  alternates: {
    canonical: siteUrl,
  },

  appleWebApp: {
    title: "Vibe Meter",
    statusBarStyle: "black-translucent",
    // startupImage: [ /* Add startup images if it were a PWA for iOS */ ],
  },

  category: "developer tools",
  generator: "v0.dev", // Already present
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <Suspense>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
