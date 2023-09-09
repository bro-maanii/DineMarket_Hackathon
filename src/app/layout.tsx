import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layouts(home)/Header'
import Footer from '@/components/layouts(home)/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market',
  description: 'it is a e-commerce website for buying cloths for all (male, female and kids)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={'inter.className lg:text-base'}>
        <Header />
        {/* HOME PAGE */}
        {children}
        {/* footer */}
        <Footer/>
        </body>
    </html>
  )
}
