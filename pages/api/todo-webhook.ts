import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'
import { StatusCodes } from 'http-status-codes'

import todos, { sendReminderTodoToLine } from 'model/todos'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { apiKey, userID } = request.query

  if (apiKey !== process.env.API_KEY) {
    response.status(StatusCodes.FORBIDDEN).json({
      message: 'Your API Key is invalid.',
    })

    return
  }

  if (userID !== process.env.LINE_USER_ID) {
    response.status(StatusCodes.FORBIDDEN).json({
      message: 'The sent user id is not in the whitelist.',
    })

    return
  }

  const { body, status } = await todos.reminder()

  if (body == null || body.length === 0) {
    response.status(status).json({
      message: 'OK',
      data: [],
    })

    return
  }

  await sendReminderTodoToLine(body)

  response.status(status).json({
    message: 'OK',
  })
}

export default withSentry(handler)
