'use client'

import { TokenData, UserProfileData } from '@/@types'
import { logoutUser, resfrehToken } from '@/utils/services'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import jwtdecode from 'jwt-decode'
import { useRouter } from 'next/navigation'

interface AuthContextData {
  user: UserProfileData | null
  setUser: (data: UserProfileData | null) => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { push } = useRouter()
  const [user, setUser] = useState<UserProfileData | null>(null)
  const logout = useCallback(() => {
    logoutUser().then((result) => {
      if (result instanceof Error) {
        console.error(result.message)
      } else {
        setUser(null)
        push('/')
      }
    })
  }, [])

  const memoUser = useMemo(() => {
    return user
  }, [user])

  const handleSetUser = useCallback((data: UserProfileData | null) => {
    setUser(data)
  }, [])

  async function decodeToken(token: string) {
    const decodedToken: TokenData = await jwtdecode(token)

    return decodedToken
  }

  useEffect(() => {
    const cookies = document.cookie.split('; ')
    const sessionCookie = cookies.find((cookie) => cookie.includes('session'))

    if (sessionCookie) {
      resfrehToken().then((result) => {
        if (result instanceof Error) {
          setUser(null)
        } else {
          decodeToken(result.access)
            .then((token) => {
              setUser({
                email: token.email,
                user_id: token.user_id,
                username: token.username,
                number: token.number,
              })
              push('/usuarios')
            })
            .catch(() => console.error('Erro ao decodificar token'))
        }
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: memoUser, setUser: handleSetUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
