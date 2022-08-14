import type { NextApiRequest, NextApiResponse } from 'next'

import { StatusCodes } from 'http-status-codes'

import { lineUserID, lineWebhookAPIKey } from 'helpers/line'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { apiKey, userID } = request.query

  if (apiKey !== lineWebhookAPIKey) {
    response.status(StatusCodes.FORBIDDEN).json({
      message: 'API Key is invalid.',
    })

    return
  }

  if (userID !== lineUserID) {
    response.status(StatusCodes.FORBIDDEN).json({
      message: 'User id not in whitelist.',
    })

    return
  }

  response.status(StatusCodes.OK).json({
    message: 'OK',
  })
}

export default handler
