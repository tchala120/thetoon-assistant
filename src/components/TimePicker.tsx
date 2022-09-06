import type {
  PickerColumn,
  PickerColumnItem,
  PickerValue,
} from 'antd-mobile/es/components/picker-view'

import { Button, Picker } from 'antd-mobile'

interface TimePickerProps {
  value?: string
  onChange?: (value: string) => void
}

const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const pickerValue = value?.split(':')

  const timePickerColumns: PickerColumn[] = [
    createHoursTimePicker(),
    createMinutesTimePicker(),
  ]

  const handlePickerOnConfirm = (value: PickerValue[]) => {
    onChange?.(value.join(':'))
  }

  return (
    <Picker
      columns={timePickerColumns}
      value={pickerValue}
      onConfirm={handlePickerOnConfirm}
    >
      {(_, action) => <Button onClick={action.open}>{value || '00:00'}</Button>}
    </Picker>
  )
}

export default TimePicker

export const createHoursTimePicker = (): PickerColumnItem[] => {
  const hours: PickerColumnItem[] = Array(24)
    .fill(0)
    .map((_, index) => {
      const hour = (index < 10 ? `0${index}` : index).toString()

      return {
        key: hour,
        value: hour,
        label: hour,
      }
    })

  return hours
}

export const createMinutesTimePicker = (): PickerColumnItem[] => {
  const minutes: PickerColumnItem[] = Array(60)
    .fill(0)
    .map((_, index) => {
      const minutes = (index < 10 ? `0${index}` : index).toString()

      return {
        key: minutes,
        value: minutes,
        label: minutes,
      }
    })

  return minutes
}
