import { Client } from '@line/bot-sdk'

export const lineChannelAccessToken =
  process.env.NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN
export const lineUserID = process.env.LINE_USER_ID

const client = new Client({
  channelAccessToken: lineChannelAccessToken,
})

export default client
