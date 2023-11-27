import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emirates Visa',
  description: 'Seamless Emirates visa solutions: Easy applications, essential info, stress-free travel.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}</body>
    </html>
  )
}
