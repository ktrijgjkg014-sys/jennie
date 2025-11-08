import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Ethical Hacking Blog - Cybersecurity & Penetration Testing',
    template: '%s | Ethical Hacking Blog'
  },
  description: 'Professional ethical hacking blog featuring tutorials, tools, and cybersecurity insights. Learn penetration testing, vulnerability assessment, and security best practices.',
  keywords: [
    'ethical hacking',
    'cybersecurity',
    'penetration testing',
    'vulnerability assessment',
    'security tools',
    'CTF',
    'bug bounty',
    'infosec'
  ],
  authors: [{ name: 'MiniMax Agent' }],
  creator: 'MiniMax Agent',
  publisher: 'Ethical Hacking Blog',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ethical-hacking-blog.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ethical Hacking Blog - Cybersecurity & Penetration Testing',
    description: 'Professional ethical hacking blog featuring tutorials, tools, and cybersecurity insights.',
    url: 'https://ethical-hacking-blog.vercel.app',
    siteName: 'Ethical Hacking Blog',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethical Hacking Blog - Cybersecurity & Penetration Testing',
    description: 'Professional ethical hacking blog featuring tutorials, tools, and cybersecurity insights.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background tech-grid">
            <Header />
            <main className="flex-1 relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}