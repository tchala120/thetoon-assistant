import type { RefObject } from 'react'
import type { FormInstance } from 'rc-field-form'
import type { DatePickerRef } from 'antd-mobile/es/components/date-picker'

import { useState } from 'react'
import {
  Button,
  DatePicker,
  Form,
  Input,
  Popup,
  Space,
  Switch,
} from 'antd-mobile'
import dayjs from 'dayjs'

import PopupContent from 'components/PopupContent'

import { DATE_TIME_FORMAT } from 'helpers/formatter'

interface FormValues {
  name: string
  description: string
  reminder?: Date
}

interface CreateTodoPopupProps {
  loading?: boolean
  form: FormInstance<FormValues>
  visible: boolean
  onClose: VoidFunction
  onFinish: (value: FormValues) => void
}

const CreateTodoPopup = ({
  loading,
  form,
  visible,
  onClose,
  onFinish,
}: CreateTodoPopupProps) => {
  const [isReminder, setIsReminder] = useState(false)

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

          <Form.Item>
            <Space align="center">
              <span
                style={{
                  fontSize: 15,
                  color: '#666',
                }}
              >
                Reminder
              </span>

              <Switch
                checked={isReminder}
                onChange={setIsReminder}
                style={{
                  '--width': '40px',
                  '--height': '24px',
                }}
              />
            </Space>
          </Form.Item>

          {isReminder && (
            <Form.Item
              className="reminder-date-picker"
              name="reminder"
              trigger="onConfirm"
              onClick={(_, datePickerRef: RefObject<DatePickerRef>) => {
                datePickerRef.current?.open()
              }}
            >
              <DatePicker precision="minute">
                {(value) =>
                  value ? (
                    dayjs(value).format(DATE_TIME_FORMAT)
                  ) : (
                    <small
                      style={{
                        color: '#999',
                      }}
                    >
                      Please select a date
                    </small>
                  )
                }
              </DatePicker>
            </Form.Item>
          )}
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

export const useCreateTodoForm = () => Form.useForm<FormValues>()
