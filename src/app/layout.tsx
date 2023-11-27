import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emirates Visa',
  description: 'Seamless Emirates visa solutions: Easy applications, essential info, stress-free travel.',
  icons:{
    icon:['/favicon.ico?v=4'],
    apple: [
      'apple-touch-icon.png?v=4'
    ],
    shortcut: [
      'apple-touch-icon.png'
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head>
      <link rel="icon" href="/fav-32.ico" sizes="any" />
      </head> */}
      <body className={inter.className}>
      <Navbar />
        {children}</body>
    </html>
  )
}
