import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import type { Todo } from 'model/todos'
import type { ReactQueryUseQueryByID } from './types'

const useTodo: ReactQueryUseQueryByID<Todo, any> = (id, options) =>
  useQuery(
    ['todos', id.toString()],
    async ({ queryKey }) => {
      const { data } = await axios.get<Todo>(`/api/todo?id=${queryKey[1]}`)

      return data
    },
    options
  )

export default useTodo
