import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header" // Import the new Header component
import { Analytics } from "@vercel/analytics/next" // Added Vercel Analytics import
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vibe Meter - Monitor Your Cursor AI Spending",
  description: "Vibe Meter puts your AI spend on the macOS menu bar—real-time, multi-currency, no surprises.",
  icons: {
    icon: "/vibemeter-app-icon.png",
  },
  generator: "v0.dev",
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
          <Header /> {/* Add the Header component here */}
          <Suspense>{children}</Suspense>
          <Analytics /> {/* Added Vercel Analytics component */}
        </ThemeProvider>
      </body>
    </html>
  )
}
