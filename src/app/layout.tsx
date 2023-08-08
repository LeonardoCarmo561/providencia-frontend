import { ThemeProvider } from '@/contexts'
import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { ThemeWrapper } from '@/components'
import { AuthProvider } from '@/contexts/auth-context'

export const metadata: Metadata = {
  title: 'SH82 Manager',
  description: 'Software de gestão | Comunidade Católica Shalom',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-zinc-100 text-blue-800">
      <AuthProvider>
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </AuthProvider>
    </html>
  )
}
