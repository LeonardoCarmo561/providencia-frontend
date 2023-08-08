'use client'

import { useThemeContext } from '@/hooks'
import { Titillium_Web as TitilliumWeb } from 'next/font/google'
import { ReactNode } from 'react'

const titillium = TitilliumWeb({
  subsets: ['latin'],
  weight: '400',
})

export function ThemeWrapper({ children }: { children: ReactNode }) {
  const { themeName } = useThemeContext()
  return (
    <body data-mode={themeName} className={titillium.className}>
      {children}
    </body>
  )
}
