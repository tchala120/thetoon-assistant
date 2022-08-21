import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import type { Todo } from 'model/todos'
import type { ReactQueryUseQuery } from './types'

const useListTodo: ReactQueryUseQuery<Todo[], any> = (options) =>
  useQuery(
    ['todos'],
    async () => {
      const { data } = await axios.get<Todo[]>('/api/todo')

      return data
    },
    options
  )

export default useListTodo
