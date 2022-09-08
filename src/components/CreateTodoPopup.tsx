import type { FormInstance } from 'rc-field-form'

import { useState } from 'react'
import { Button, Form, Input, Popup, Space, Switch } from 'antd-mobile'

import TimePicker from 'components/TimePicker'
import PopupContent from 'components/PopupContent'

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
      <PopupContent.Title onClose={onClose}>Add new task</PopupContent.Title>

      <PopupContent>
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
      </PopupContent>

      <PopupContent.Bottom>
        <Button loading={loading} color="primary" block onClick={form.submit}>
          Add new task
        </Button>
      </PopupContent.Bottom>
    </Popup>
  )
}

export default CreateTodoPopup

export const useCreateTodoForm = () => Form.useForm<CreateTodoVariable>()
