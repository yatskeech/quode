import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Quode',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
