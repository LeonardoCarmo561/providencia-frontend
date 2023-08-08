/* eslint-disable no-case-declarations */
import { AxiosError } from 'axios'

export function errorInterceptor(error: AxiosError) {
  switch (error.message) {
    case 'Network Error':
      const dataNetwork = error.response?.data as { detail: string }

      return Promise.reject(new Error(dataNetwork.detail))
      break

    default:
      const data = error.response?.data as { detail: string }

      return Promise.reject(new Error(data.detail))
      break
  }
}
