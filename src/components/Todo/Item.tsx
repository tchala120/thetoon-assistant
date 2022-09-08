import type { Action } from 'antd-mobile/es/components/swipe-action'

import { Dialog, List, SwipeAction } from 'antd-mobile'
import { CheckOutline } from 'antd-mobile-icons'

import type { Todo } from 'react-query/types'

interface TodoItemProps {
  data: Todo
  deleteTodo: (id: number) => void
}

const TodoItem = ({ data, deleteTodo }: TodoItemProps) => {
  const left: Action[] = [
    {
      key: 'check',
      text: <CheckOutline />,
      color: 'primary',
      onClick: () => {},
    },
  ]

  const right: Action[] = [
    {
      key: 'delete',
      text: 'Delete',
      color: 'danger',
      onClick: () => {
        Dialog.confirm({
          title: `Delete ${data.name}`,
          content: 'Are you sure to delete this item?',
          onConfirm() {
            deleteTodo(data.id)
          },
          cancelText: (
            <span
              style={{
                color: '#999',
              }}
            >
              Cancel
            </span>
          ),
          confirmText: (
            <span
              style={{
                color: 'var(--adm-color-danger)',
              }}
            >
              Delete
            </span>
          ),
        })
      },
    },
  ]

  return (
    <SwipeAction leftActions={left} rightActions={right}>
      <List.Item>{data.name}</List.Item>
    </SwipeAction>
  )
}

export default TodoItem
