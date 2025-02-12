import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website Builder Platform',
  description: 'Create and manage business websites with our drag-and-drop builder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-text">
        <header className="w-full py-6 bg-white shadow-md">
          <Link href="/" className="inline-block w-full text-center">
            <h1 className="text-5xl font-black text-blue-600 glow-blue hover:text-blue-700 transition-colors cursor-pointer m-0">
              GLOBOLOSYS DEVELOPER
            </h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  )
}
