import type {
  PickerColumn,
  PickerColumnItem,
  PickerValue,
} from 'antd-mobile/es/components/picker-view'

import { useState } from 'react'
import { Button, Picker } from 'antd-mobile'

interface TimePickerProps {
  buttonText?: string
  value?: string
  onChange?: (value: string) => void
}

const TimePicker = ({ buttonText, value, onChange }: TimePickerProps) => {
  const [visible, setVisible] = useState(false)

  const pickerValue = value?.split(':') as PickerValue[]

  return (
    <>
      <Button block color="primary" onClick={() => setVisible(true)}>
        {renderButtonText()}
      </Button>

      <Picker
        columns={columns}
        visible={visible}
        onClose={() => setVisible(false)}
        value={pickerValue}
        onConfirm={(value) => {
          onChange?.(value.join(':'))

          setVisible(false)
        }}
      />
    </>
  )

  function renderButtonText() {
    if (value) {
      return value
    }

    return buttonText || 'Select time'
  }
}

export default TimePicker

const createTimeUnit = (value: string) =>
  value.length === 1 ? `0${value}` : value

export const createHourTimePicker = (): PickerColumnItem[] => {
  const hours = Array(23).fill(0)

  return hours.map((_, index) => {
    const hour = createTimeUnit((index + 1).toString())

    return {
      key: hour,
      label: hour,
      value: hour,
    }
  })
}

export const createMinuteTimePicker = (): PickerColumnItem[] => {
  const minutes = Array(60).fill(0)

  return minutes.map((_, index) => {
    const minute = createTimeUnit(index.toString())

    return {
      key: minute,
      label: minute,
      value: minute,
    }
  })
}

const columns: PickerColumn[] = [
  createHourTimePicker(),
  createMinuteTimePicker(),
]
