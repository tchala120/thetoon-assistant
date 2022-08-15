import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'
import { StatusCodes } from 'http-status-codes'

import news from 'model/news'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query

  const newsID = Array.isArray(id) ? id?.[0] : id

  if (newsID == null) {
    response.status(StatusCodes.BAD_REQUEST).json({
      message: 'News ID not provided',
    })

    return
  }

  const data = await news.getById(+newsID)

  response.status(data.status).json(data)
}

export default withSentry(handler)
