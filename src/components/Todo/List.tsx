import { Button, List, Toast } from 'antd-mobile'
import { FileOutline } from 'antd-mobile-icons'

import Loading from 'components/Loading'
import NotFoundContent from 'components/NotFoundContent'
import TodoItem from './Item'

import useDeleteTodo from 'react-query/useDeleteTodo'

import type { Todo } from 'react-query/types'

interface TodoListProps {
  loading?: boolean
  data?: Todo[]
  onOpen: VoidFunction
  onDeleteCompleted: VoidFunction
}

const TodoList = ({
  loading,
  data,
  onOpen,
  onDeleteCompleted,
}: TodoListProps) => {
  const mutation = useDeleteTodo({
    onSuccess() {
      onDeleteCompleted?.()
    },
  })

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

  if (mutation.isLoading) {
    Toast.show({
      icon: 'loading',
      content: 'Deleting...',
    })
  }

  if (mutation.isError) {
    Toast.show({
      icon: 'fail',
      content: 'Delete failed.',
    })
  }

  return (
    <List header="Tasks">
      {data.map((item) => (
        <TodoItem
          key={item.id}
          data={item}
          deleteTodo={(id) =>
            mutation.mutate({
              id,
            })
          }
        />
      ))}
    </List>
  )
}

export default TodoList
