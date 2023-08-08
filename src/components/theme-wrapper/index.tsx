'use client'

import { useThemeContext } from '@/hooks'
import { Open_Sans as OpenSans } from 'next/font/google'
import { ReactNode } from 'react'

const openSans = OpenSans({
  subsets: ['latin'],
  weight: '400',
})

export function ThemeWrapper({ children }: { children: ReactNode }) {
  const { themeName } = useThemeContext()
  return (
    <body data-mode={themeName} className={openSans.className}>
      {children}
    </body>
  )
}
