import styled from '@emotion/styled'
import { List, Space, Toast } from 'antd-mobile'

import useReminderTodos from 'react-query/useReminderTodos'

const IncomingReminderTodos = () => {
  const query = useReminderTodos()

  if (query.isLoading) {
    Toast.show({
      icon: 'loading',
      content: 'Loading...',
    })
  }

  return (
    <div>
      <Title>Incoming reminder todos</Title>

      <Space block direction="vertical">
        {query.data?.map((item) => (
          <List key={item.reminder} header={item.reminder}>
            {item.todos.map((todo) => (
              <List.Item key={todo.id}>{todo.name}</List.Item>
            ))}
          </List>
        ))}
      </Space>
    </div>
  )
}

export default IncomingReminderTodos

const Title = styled.span`
  display: block;
  font-size: 18px;
  padding: 12px;
`
