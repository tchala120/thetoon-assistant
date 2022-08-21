import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

import type { Todo } from 'model/todos'
import type { ReactQueryUseMutation } from './types'

const useCreateOrUpdateTodo: ReactQueryUseMutation<Todo, any, Partial<Todo>> = (
  options
) =>
  useMutation(async (body) => {
    const { data } = await axios.put('/api/todo', body)

    return data
  }, options)

export default useCreateOrUpdateTodo
