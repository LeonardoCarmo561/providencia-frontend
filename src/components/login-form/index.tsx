'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { Form } from '@/components'
import { ErrorMessage } from '@/components/forms/ErrorMessage'
import { authenticateUser } from '@/utils/services'
import { useAuthContext } from '@/hooks'
import jwtDecode from 'jwt-decode'
import { TokenData } from '@/@types'
import { useEffect } from 'react'

const loginUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'Tamanho mínimo de 6 caracteres'),
})

type LoginUserData = z.infer<typeof loginUserFormSchema>

export function LoginForm() {
  const loginUserForm = useForm<LoginUserData>({
    resolver: zodResolver(loginUserFormSchema),
  })

  const { setUser } = useAuthContext()
  const router = useRouter()

  async function loginUser(formData: LoginUserData) {
    const result = await authenticateUser(formData)

    if (result instanceof Error) {
      alert(result.message)
    } else {
      const token: TokenData = await jwtDecode(result.data.access)
      console.log(token)

      setUser({
        user_id: token.user_id,
        username: token.username,
        number: token.number,
        email: token.email,
      })

      router.push('/usuarios')
    }
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = loginUserForm

  return (
    <FormProvider {...loginUserForm}>
      <form
        onSubmit={handleSubmit(loginUser)}
        className="w-full max-w-sm p-4 shadow-lg bg-zinc-500 rounded-2xl flex flex-col bg-opacity-25 gap-4"
      >
        <h1 className="text-center font-bold text-xl">Faça Login</h1>

        <Form.Field>
          <Form.Label htmlFor="email">E-mail</Form.Label>
          <Form.Input
            type="email"
            required
            name="email"
            placeholder="email@example.com"
          />
          <ErrorMessage field="email" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="password">Senha</Form.Label>
          <Form.Input
            type="password"
            required
            name="password"
            placeholder="senha123"
          />
          <ErrorMessage field="password" />
        </Form.Field>

        <div className="flex gap-2" id="submit-buttons">
          <button
            disabled={isSubmitting}
            className="disabled:bg-blue-300 transition-all bg-blue-400 hover:dark:bg-blue-900 hover:bg-blue-500 h-10 px-2 rounded-lg w-full font-bold text-black dark:bg-blue-800 dark:text-white"
            type="submit"
          >
            ENTRAR
          </button>

          <button
            disabled={isSubmitting}
            type="button"
            className="transition-all w-full font-bold px-2 border-[2px] rounded-xl border-blue-400 dark:border-blue-800 hover:dark:bg-blue-800 hover:bg-blue-400 hover:bg-opacity-20 hover:dark:bg-opacity-20"
          >
            ESQUECI A SENHA
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
