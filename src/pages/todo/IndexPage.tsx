import { useState } from 'react'
import { AddOutline } from 'antd-mobile-icons'

import AppTabLayout from 'layouts/AppTabLayout'

import CreateTodoPopup from 'components/CreateTodoPopup'

const TodoPage = () => {
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
      <h1>Todo Index Page</h1>

      <CreateTodoPopup
        visible={visible}
        onClose={() => setVisible(false)}
        onFinish={(values) => {
          console.log(values)

          setVisible(false)
        }}
      />
    </AppTabLayout>
  )
}

export default TodoPage
