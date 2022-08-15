import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'
import { StatusCodes } from 'http-status-codes'

import news, { News } from 'model/news'

import { sendMessage } from 'helpers/telegram'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const data: News = request.body

  if (/{{|}}/.test(data.title)) {
    response
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Data isn't correct format" })

    return
  }

  if (request.method === 'POST') {
    await news.create(request.body)

    sendMessage(request.body)
      .then(({ data }) => {
        const body = { message: 'Message sent!', data }

        response.status(StatusCodes.OK).json(body)
      })
      .catch((error) => {
        response
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'Failed to sent message!', error })
      })
  } else {
    response
      .status(StatusCodes.METHOD_NOT_ALLOWED)
      .json({ message: 'Method not allowed' })
  }
}

export default withSentry(handler)
