'use client'
import { ThemeContextData } from '@/@types/theme'
import { ReactNode, createContext, useCallback, useMemo, useState } from 'react'

export const ThemeContext = createContext({} as ThemeContextData)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const themeName = useMemo(() => {
    return theme
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((oldTheme) => (oldTheme === 'dark' ? 'light' : 'dark'))
  }, [setTheme])

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
