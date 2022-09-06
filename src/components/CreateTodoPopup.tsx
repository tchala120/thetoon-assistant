import type { FormInstance } from 'rc-field-form'

import { useState } from 'react'
import {
  Button,
  Form,
  Input,
  Popup,
  SafeArea,
  Space,
  Switch,
} from 'antd-mobile'

import PopupTitle from 'components/PopupTitle'
import TimePicker from 'components/TimePicker'

import { AppBodyContainer, AppBottomContainer } from 'layouts/utils'

import type { CreateTodoVariable } from 'react-query/useCreateTodo'

interface CreateTodoPopupProps {
  loading?: boolean
  form: FormInstance<CreateTodoVariable>
  visible: boolean
  onClose: VoidFunction
  onFinish: (value: CreateTodoVariable) => void
}

const CreateTodoPopup = ({
  loading,
  form,
  visible,
  onClose,
  onFinish,
}: CreateTodoPopupProps) => {
  const [reminder, setReminder] = useState(false)

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
          <Form.Item label="Title" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>

          <Form.Item
            label={
              <Space
                style={{
                  '--gap-horizontal': '18px',
                }}
              >
                <span>Reminder</span>

                <Switch
                  style={{
                    '--width': '42px',
                    '--height': '24px',
                  }}
                  checked={reminder}
                  onChange={(checked) => {
                    setReminder(checked)

                    form.setFieldValue(
                      'reminder',
                      checked ? '00:00' : undefined
                    )
                  }}
                />
              </Space>
            }
            name="reminder"
          >
            {reminder && <TimePicker />}
          </Form.Item>
        </Form>
      </AppBodyContainer>

      <AppBottomContainer style={{ padding: 12 }}>
        <Button loading={loading} color="primary" block onClick={form.submit}>
          Add new task
        </Button>

        <SafeArea position="bottom" />
      </AppBottomContainer>
    </Popup>
  )
}

export default CreateTodoPopup

export const useCreateTodoForm = () => Form.useForm<CreateTodoVariable>()
