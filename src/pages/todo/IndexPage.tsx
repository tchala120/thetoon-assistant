import { useState } from 'react'
import { PullToRefresh, Toast } from 'antd-mobile'

import { AddOutline } from 'antd-mobile-icons'

import AppTabLayout from 'layouts/AppTabLayout'

import useTodos from 'react-query/useTodos'
import useCreateTodo from 'react-query/useCreateTodo'

import CreateTodoPopup, { useCreateTodoForm } from 'components/CreateTodoPopup'
import TodoList from 'components/Todo'

const TodoPage = () => {
  const query = useTodos()
  const mutation = useCreateTodo({
    onSuccess() {
      setVisible(false)

      setTimeout(() => {
        Toast.show({
          icon: 'success',
          content: (
            <span
              style={{
                display: 'block',
                textAlign: 'center',
                wordBreak: 'break-word',
              }}
            >
              Task create success!
            </span>
          ),
        })
      }, 250)
    },
  })

  const [form] = useCreateTodoForm()

  const [visible, setVisible] = useState(false)

  return (
    <AppTabLayout
      appBarActionMenus={
        <AddOutline
          fontSize={18}
          color="var(--adm-color-primary)"
          onClick={() => setVisible(true)}
        />
      }
    >
      <PullToRefresh onRefresh={() => query.refetch()}>
        <TodoList
          loading={query.isLoading}
          data={query.data}
          onOpen={() => setVisible(true)}
        />
      </PullToRefresh>

      <CreateTodoPopup
        loading={mutation.isLoading}
        form={form}
        visible={visible}
        onClose={() => setVisible(false)}
        onFinish={mutation.mutate}
      />
    </AppTabLayout>
  )
}

export default TodoPage
