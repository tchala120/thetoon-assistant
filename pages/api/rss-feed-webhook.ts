import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'
import { StatusCodes } from 'http-status-codes'

import news from 'model/news'

import { sendMessage } from 'helpers/telegram'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    console.log('News payload', request.body)

    await news.create(request.body)

    sendMessage(request.body)
      .then(({ data }) => {
        const body = { message: 'Message sent!', data }

        console.log(body)

        response.status(StatusCodes.OK).json(body)
      })
      .catch((error) => {
        console.log(error)

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
