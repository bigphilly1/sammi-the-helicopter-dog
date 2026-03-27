import type { Metadata } from 'next'
import { Nunito, Quicksand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  display: 'swap',
});

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sammi The Helicopter Dog | A Magical Children\'s Book',
  description: 'Join Sammi, a lovable cavoodle with a tail that spins like helicopter blades, on her first magical flight! A heartwarming children\'s book about being different, courage, and the power of love. Perfect for ages 2-8.',
  keywords: ['children\'s book', 'picture book', 'Sammi', 'helicopter dog', 'cavoodle', 'kids book', 'bedtime story', 'Phil Carey'],
  authors: [{ name: 'Phil Carey' }],
  openGraph: {
    title: 'Sammi The Helicopter Dog | A Magical Children\'s Book',
    description: 'Join Sammi on her first magical flight! A heartwarming story about being different and the power of love.',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sammi The Helicopter Dog',
    description: 'A magical children\'s book about a dog whose tail spins like helicopter blades!',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${quicksand.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
