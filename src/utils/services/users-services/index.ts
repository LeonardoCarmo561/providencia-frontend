import { TotalCount, api } from '../api'

export async function getAllUsers(): Promise<TotalCount<any> | Error> {
  try {
    const relativeUrl = '/v1/users/'

    const { data } = await api.get(relativeUrl)

    if (data) return data
  } catch (error) {
    return new Error((error as { message: string }).message)
  }
}
