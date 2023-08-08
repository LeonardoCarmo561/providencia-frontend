import axios from 'axios'
import { errorInterceptor, responseInterceptor } from './interceptors'
import { resfrehToken } from '..'

const cookies = document.cookie.split(';')
const cookie = String(
  cookies.filter((element) => element.includes('csrftoken')),
)
const csrftoken = cookie.split('=')[1]

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    common: {
      'X-CSRFToken': csrftoken,
    },
  },
})

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  async (error) => {
    if (
      error.response.status === 401 &&
      error?.response?.data?.code === 'token_not_valid'
    ) {
      const token = await resfrehToken()

      if (!(token instanceof Error)) {
        const originialRequest = error.config
        return api(originialRequest)
      }
    }
    return errorInterceptor(error)
  },
)

export interface TotalCount<T> {
  data: T[]
  next: string
  results: T[]
  count: number
  previous: string
}
