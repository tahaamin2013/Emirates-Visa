import Navbar from '@/components/Navbar'
import Footer from '@/components/footer/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


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
      <body className={`${inter.className} m-0 bg-[#f5f5f5]`}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
