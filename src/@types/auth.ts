export interface AuthData {
  success: string
  data: {
    access: string
    refresh: string
  }
}

export interface AuthRefreshData {
  access: string
  refresh: string
}

export interface TokenData {
  token_type: 'access' | 'refresh'
  exp: number
  iat: number
  jti: string

  email: string
  number?: string
  user_id: number
  username: string
  is_superuser: boolean
}
