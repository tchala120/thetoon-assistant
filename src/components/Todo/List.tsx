import { Button, List } from 'antd-mobile'
import { FileOutline } from 'antd-mobile-icons'

import Loading from 'components/Loading'
import NotFoundContent from 'components/NotFoundContent'

import TodoItem from './Item'

import type { Todo } from 'react-query/types'

interface TodoListProps {
  loading?: boolean
  data?: Todo[]
  onOpen: VoidFunction
}

const TodoList = ({ loading, data, onOpen }: TodoListProps) => {
  if (loading || data == null) {
    return <Loading />
  }

  if (data.length === 0) {
    return (
      <NotFoundContent
        icon={<FileOutline />}
        extra={
          <Button color="primary" onClick={onOpen}>
            Add new one
          </Button>
        }
      >
        No tasks yet
      </NotFoundContent>
    )
  }

  return (
    <List header="Tasks">
      {data.map((item) => (
        <TodoItem key={item.id} data={item} />
      ))}
    </List>
  )
}

export default TodoList
