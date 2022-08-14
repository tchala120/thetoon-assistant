import { Client } from '@line/bot-sdk'

const lineChannelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN

const lineClient = new Client({
  channelAccessToken: lineChannelAccessToken,
})

export default lineClient

export const lineWebhookAPIKey = process.env.LINE_API_KEY
export const lineUserID = process.env.LINE_USER_ID
