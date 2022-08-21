import { List } from 'antd-mobile'

import type { Todo } from 'model/todos'

interface TodoItemProps {
  data: Todo
}

const TodoItem = ({ data }: TodoItemProps) => {
  return <List.Item key={data.id}>{data.name}</List.Item>
}

export default TodoItem
