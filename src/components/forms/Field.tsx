import { ReactNode } from 'react'

export function Field({ children }: { children: ReactNode }) {
  return <div className="flex gap-1 flex-col">{children}</div>
}
