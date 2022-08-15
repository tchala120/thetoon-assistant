import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'

import news from 'model/news'

const handler = async (_: NextApiRequest, response: NextApiResponse) => {
  const data = await news.get()

  response.status(data.status).json(data)
}

export default withSentry(handler)
