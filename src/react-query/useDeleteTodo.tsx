import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

import type { MutationResponse, Todo } from './types'

export interface DeleteTodoVariables {
  id: number
}

const useDeleteTodo: MutationResponse<Todo, any, DeleteTodoVariables> = (
  options
) =>
  useMutation(
    async ({ id }) => {
      const { data } = await axios.delete(`/todo/${id}`)

      return data
    },
    {
      onError(error) {
        console.log(error)
      },
      ...options,
    }
  )

export default useDeleteTodo
