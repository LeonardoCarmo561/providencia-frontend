'use client'
import { ThemeContext } from '@/contexts'
import { useContext } from 'react'

export function useThemeContext() {
  return useContext(ThemeContext)
}
