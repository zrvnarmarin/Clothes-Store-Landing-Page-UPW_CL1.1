import DesktopNavbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '900']
})

export const metadata: Metadata = {
  title: 'Fashion Talk',
  description: 'The online fashion store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DesktopNavbar />
        {children}
      </body>
    </html>
  )
}
