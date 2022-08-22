import type { GetServerSideProps } from 'next'

import { useState } from 'react'
import { Button } from 'antd-mobile'

import AppLayout from 'layouts/AppLayout'

import Spin from 'components/Spin'
import TodoList from 'components/TodoList'
import CreateNewTaskPopup, {
  useCreatetNewTaskForm,
} from 'components/CreateNewTaskPopup'

import useCreateOrUpdateTodo from 'react-query/useCreateOrUpdateTodo'
import useListTodo from 'react-query/useListTodos'

import todos, { Todo } from 'model/todos'

import { meta } from 'constants/meta'

interface TodoPageProps {
  todos: Todo[]
}

const TodoPage = ({ todos }: TodoPageProps) => {
  const [form] = useCreatetNewTaskForm()

  const [visible, setVisible] = useState(false)

  const query = useListTodo({
    initialData: todos,
  })

  const { isLoading, mutate } = useCreateOrUpdateTodo({
    onSuccess() {
      setVisible(false)

      query.refetch()
    },
  })

  return (
    <AppLayout
      noPadding
      title="Todo | TheToon Assistant"
      description={meta.description}
      bottom={
        <Button color="primary" block onClick={() => setVisible(true)}>
          Add new task
        </Button>
      }
    >
      <Spin spinning={query.isLoading}>
        <TodoList tasks={query.data} />
      </Spin>

      <CreateNewTaskPopup
        loading={isLoading}
        form={form}
        visible={visible}
        onClose={() => setVisible(false)}
        onFinish={(values) => mutate(values)}
      />
    </AppLayout>
  )
}

export default TodoPage

export const getServerSideProps: GetServerSideProps = async () => {
  const listTodos = await todos.get()

  return {
    props: {
      todos: listTodos.body,
    },
  }
}
