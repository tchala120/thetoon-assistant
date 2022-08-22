import type { FormInstance } from 'rc-field-form'

import { Button, Form, Input, Popup, TextArea } from 'antd-mobile'
import styled from '@emotion/styled'

import BottomActionBar from 'components/BottomActionBar'
import AppBar from 'components/AppBar'
import TimePicker from 'components/TimePicker'

import { ruleRequired } from 'helpers/antdUtils'

interface FormValues {
  name: string
  description?: string
  reminder?: string
}

interface CreateNewTaskPopupProps {
  loading?: boolean
  form: FormInstance<FormValues>
  visible: boolean
  onClose: VoidFunction
  onFinish?: (values: FormValues) => void
}

const CreateNewTaskPopup = ({
  loading,
  form,
  visible,
  onClose,
  onFinish,
}: CreateNewTaskPopupProps) => {
  return (
    <Popup
      destroyOnClose
      visible={visible}
      onMaskClick={onClose}
      bodyStyle={{
        minHeight: '-webkit-fill-availble',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar
        backArrow={false}
        right={
          <span style={{ color: 'var(--adm-color-primary)' }} onClick={onClose}>
            Cancel
          </span>
        }
      >
        Add new task
      </AppBar>

      <Content>
        <Form form={form} onFinish={onFinish}>
          <Form.Item label="Name" name="name" rules={[ruleRequired]}>
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea />
          </Form.Item>

          <Form.Item
            label="Reminder"
            name="reminder"
            layout="horizontal"
            childElementPosition="right"
          >
            <TimePicker />
          </Form.Item>
        </Form>
      </Content>

      <BottomActionBar>
        <Button loading={loading} color="primary" block onClick={form.submit}>
          Add new task
        </Button>
      </BottomActionBar>
    </Popup>
  )
}

export default CreateNewTaskPopup

export const useCreatetNewTaskForm = () => Form.useForm<FormValues>()

const Content = styled.div`
  flex: 1;
`
