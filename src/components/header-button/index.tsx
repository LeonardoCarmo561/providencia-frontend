import { ReactNode } from 'react'

interface HeaderIconProps {
  href: string
  label: string
  icon: ReactNode
}

export function HeaderIcon(props: HeaderIconProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="flex gap-1 text-white items-center"
    >
      <span className="hidden sm:flex">{props.label}</span>
      <span className="text-xl">{props.icon}</span>
    </a>
  )
}
