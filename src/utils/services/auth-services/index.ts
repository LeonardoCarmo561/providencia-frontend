/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthData, AuthRefreshData } from '@/@types'
import { api } from '../api'

export async function authenticateUser(
  formData: Record<string, any>,
): Promise<AuthData | Error> {
  try {
    const relativeUrl = '/v1/token/'

    const { data } = await api.post(relativeUrl, formData)

    if (data) return data

    return new Error('Erro ao fazer login')
  } catch (error) {
    return new Error((error as { message: string }).message)
  }
}

export async function logoutUser(): Promise<AuthRefreshData | Error> {
  try {
    const relativeUrl = '/v1/token/logout/'

    const { data } = await api.post(relativeUrl)

    if (data) return data

    return new Error('Erro ao deslogar usuário')
  } catch (error) {
    return new Error((error as { message: string }).message)
  }
}

export async function resfrehToken(): Promise<AuthRefreshData | Error> {
  try {
    const relativeUrl = '/v1/token/refresh/'

    const { data } = await api.post(relativeUrl)

    if (data) return data

    return new Error('Erro ao atualizar login')
  } catch (error) {
    return new Error((error as { message: string }).message)
  }
}
