import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Tech Updates — Showcase',
  description: 'See what our tech team has been building.',
  openGraph: {
    title: 'Tech Updates',
    description: "New features and improvements from the tech team.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
