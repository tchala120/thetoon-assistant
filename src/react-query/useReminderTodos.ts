import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import type { GroupTodo, QueryResponse } from './types'

const useReminderTodos: QueryResponse<GroupTodo[]> = (options) =>
  useQuery(
    ['reminder', 'todo'],
    async () => {
      const { data } = await axios.get('/reminder/todos')

      return data
    },
    {
      ...options,
    }
  )

export default useReminderTodos
