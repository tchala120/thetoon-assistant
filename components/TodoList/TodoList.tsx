import { List } from 'antd-mobile'

import Center from 'components/Center'
import TodoItem from './TodoItem'

import type { Todo } from 'model/todos'
import PageTitle from 'components/PageTitle'

interface TodoListProps {
  tasks?: Todo[]
}

const TodoList = ({ tasks }: TodoListProps) => {
  if (tasks?.length === 0) {
    return (
      <Center>
        <PageTitle style={{ padding: 0, margin: 0 }}>Tasks not found</PageTitle>
      </Center>
    )
  }

  return (
    <List>
      {tasks?.map((item) => (
        <TodoItem key={item.id} data={item} />
      ))}
    </List>
  )
}

export default TodoList
