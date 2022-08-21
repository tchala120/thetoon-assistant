import supabase from 'helpers/supabase'

export interface Todo {
  id: number
  name: string
  description: string
  isCompleted: false
  reminder: string
  created_at: string
  updated_at: string
}

const todos = {
  get: () => supabase.from('todos'),
  reminder: () => {
    const timeNow = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    })

    return supabase.from('todos').select('*').eq('reminder', timeNow)
  },
  createOrUpdate: (todo: Todo) => supabase.from('todos').upsert(todo),
  delete: (id: number) => supabase.from('todos').delete().match({ id }),
}

export default todos
