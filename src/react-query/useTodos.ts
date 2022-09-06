import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import type { QueryResponse, Todo } from './types'

const fetchTodos = async () => {
  const { data } = await axios.get('/todo')

  return data
}

const useTodos: QueryResponse<Todo[]> = (options) => {
  return useQuery(['todos'], fetchTodos, {
    onError(error) {
      console.log(error)
    },
    ...options,
  })
}

export default useTodos
