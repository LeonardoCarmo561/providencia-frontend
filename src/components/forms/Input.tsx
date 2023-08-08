'use client'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()
  return (
    <input
      id={props.name}
      className="shadow-lg px-2 rounded-xl border-[1px] bg-zinc-50 dark:bg-zinc-900 border-zinc-500 h-10 w-full focus:ring-blue-400 ring-blue-400"
      {...register(props.name)}
      {...props}
    />
  )
}
