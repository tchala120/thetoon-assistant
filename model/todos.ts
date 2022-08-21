import type { FlexComponent, Message } from '@line/bot-sdk'

import client, { lineUserID } from 'helpers/line'
import supabase from 'helpers/supabase'

export interface Todo {
  id: number
  name: string
  description: string
  isCompleted: false
  reminder: string
  reminded: boolean
  created_at: string
  updated_at: string
}

const todoCollection = supabase.from<Todo>('todos')

const todos = {
  get: () => todoCollection.select(),
  getByID: (id: number) => todoCollection.select('*').eq('id', id),
  reminder: () => {
    const timeNow = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    })

    return supabase
      .from<Todo>('todos')
      .select('*')
      .eq('reminder', timeNow)
      .eq('reminded', false)
      .eq('isCompleted', false)
  },
  createOrUpdate: (todo: Todo | Todo[]) => todoCollection.upsert(todo),
  delete: (id: number) => todoCollection.delete().match({ id }),
}

export default todos

export const changeRecordsToReminded = async (data: Todo[]) => {
  const recordsWithReminded = data.map((item) => ({
    ...item,
    reminded: true,
  }))

  await todos.createOrUpdate(recordsWithReminded)
}

export const createReminderFlexMessage = (todo: Todo): Message => {
  const flexContents: FlexComponent[] = [
    {
      type: 'text',
      text: todo.name,
      weight: 'bold',
      size: 'xl',
      gravity: 'center',
      wrap: true,
    },
    {
      type: 'text',
      text: todo.description,
    },
    {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      margin: 'lg',
      contents: [
        {
          type: 'box',
          layout: 'baseline',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'Time',
              size: 'sm',
              color: '#AAAAAA',
              flex: 1,
            },
            {
              type: 'text',
              text: todo.reminder,
              size: 'sm',
              color: '#666666',
              flex: 4,
              wrap: true,
            },
          ],
        },
      ],
    },
  ]

  return {
    type: 'flex',
    altText: `Reminder: ${todo.name}`,
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        contents: flexContents,
      },
      footer: {
        type: 'box',
        layout: 'horizontal',
        flex: 1,
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'Detail',
                  uri: `https://assistant.panupong.io/todos/${todo.id}`,
                },
              },
            ],
          },
        ],
      },
    },
  }
}

export const sendReminderTodoToLine = async (todos: Todo[]) => {
  if (todos.length === 0) {
    return
  }

  const messages: Message[] = todos.map((item) =>
    createReminderFlexMessage(item)
  )

  return client
    .pushMessage(lineUserID, messages)
    .then(() => changeRecordsToReminded(todos))
}
