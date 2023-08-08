'use client'
import { useThemeContext } from '@/hooks'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string
}

export function ToggleThemeButton(props: ButtonProps) {
  const { themeName, toggleTheme } = useThemeContext()
  return (
    <button {...props} className="w-10 h-5" onClick={toggleTheme}>
      {themeName}
    </button>
  )
}
