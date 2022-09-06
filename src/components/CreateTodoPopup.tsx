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

interface FormValues {
  title: string
  description: string
  reminder: string
}

interface CreateTodoPopupProps {
  form: FormInstance<FormValues>
  visible: boolean
  onClose: VoidFunction
  onFinish: (value: FormValues) => void
}

const CreateTodoPopup = ({
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
          <Form.Item label="Title" name="title">
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
        <Button color="primary" block onClick={form.submit}>
          Add new task
        </Button>

        <SafeArea position="bottom" />
      </AppBottomContainer>
    </Popup>
  )
}

export default CreateTodoPopup

export const useCreateTodoForm = () => Form.useForm<FormValues>()
