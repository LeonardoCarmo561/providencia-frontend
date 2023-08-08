'use client'

import { getAllUsers } from '@/utils/services/users-services'
import { Suspense, useEffect, useState } from 'react'

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>()

  useEffect(() => {
    getAllUsers().then((result) => {
      if (result instanceof Error) {
        alert(result.message)
      } else {
        setUsers(result.results)
      }
    })
  }, [])

  return (
    <main>
      <Suspense fallback={<p>Carregando...</p>}>
        <span>{JSON.stringify(users)}</span>
      </Suspense>
    </main>
  )
}
