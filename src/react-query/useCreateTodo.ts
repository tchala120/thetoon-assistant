import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

import type { MutationResponse, Todo } from './types'

export interface CreateTodoVariable {
  name: string
  description: string
  reminder?: string
}

const useCreateTodo: MutationResponse<Todo, any, CreateTodoVariable> = (
  options
) =>
  useMutation(
    async (body) => {
      const { data } = await axios.post('/todo', body)

      return data
    },
    {
      onError: (error) => {
        console.log(error)
      },
      ...options,
    }
  )

export default useCreateTodo
