import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'
import { StatusCodes } from 'http-status-codes'

import { sendMessage } from 'helpers/telegram'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.body)

  if (request.method === 'POST') {
    sendMessage(request.body)
      .then((data) => {
        response.status(StatusCodes.OK).json({ message: 'Message sent!' })
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
