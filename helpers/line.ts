import { Client } from '@line/bot-sdk'

export const lineChannelAccessToken =
  process.env.NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN

const client = new Client({
  channelAccessToken: lineChannelAccessToken,
})

export default client
