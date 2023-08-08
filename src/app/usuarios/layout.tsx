import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Header } from '@/components'

export const metadata: Metadata = {
  title: 'SH82 Manager | Usuários',
  description: 'Software de gestão | Comunidade Católica Shalom',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header>
        <Header />
      </header>
      {children}
    </div>
  )
}
