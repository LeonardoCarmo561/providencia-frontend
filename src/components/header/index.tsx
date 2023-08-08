'use client'

import { useAuthContext } from '@/hooks'

export function Header() {
  const { user, logout } = useAuthContext()
  return (
    <div
      data-user={user}
      className={`${user ? 'flex' : 'hidden'} justify-end gap-4 flex`}
    >
      <span>{user?.username}</span>
      <button onClick={logout}>logout</button>
    </div>
  )
}
