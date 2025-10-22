import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neuronix Todo App',
  description: 'A simple todo application built with Next.js 14 and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  )
}