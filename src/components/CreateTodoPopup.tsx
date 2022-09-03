import { Button, Form, Input, Popup, SafeArea } from 'antd-mobile'

import PopupTitle from 'components/PopupTitle'

import { AppBodyContainer, AppBottomContainer } from 'layouts/utils'

interface FormValues {
  title: string
  description: string
  reminder: string
}

interface CreateTodoPopupProps {
  visible: boolean
  onClose: VoidFunction
  onFinish: (value: FormValues) => void
}

const CreateTodoPopup = ({
  visible,
  onClose,
  onFinish,
}: CreateTodoPopupProps) => {
  const [form] = Form.useForm<FormValues>()

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        onClose()
      }}
      bodyStyle={{
        minHeight: '-webkit-fill-availble',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PopupTitle onClose={onClose}>Add new task</PopupTitle>

      <AppBodyContainer>
        <Form form={form} onFinish={onFinish}>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>

          <Form.Item label="Reminder" name="reminder">
            <Input />
          </Form.Item>
        </Form>
      </AppBodyContainer>

      <AppBottomContainer style={{ padding: 12 }}>
        <Button color="primary" block onClick={form.submit}>
          Add new task
        </Button>

        <SafeArea position="bottom" />
      </AppBottomContainer>
    </Popup>
  )
}

export default CreateTodoPopup
