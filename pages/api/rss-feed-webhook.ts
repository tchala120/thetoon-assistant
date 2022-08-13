import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.body)

  response.status(200).json({ name: 'John Doe' })
}

export default withSentry(handler)
