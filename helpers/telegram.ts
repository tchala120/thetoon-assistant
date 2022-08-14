import Axios, { AxiosRequestConfig } from 'axios'

import type { CryptoNews } from './types'

interface SendMessageInput {
  chat_id: string
  text: string
}

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID

const axios = Axios.create({
  baseURL: `https://api.telegram.org/bot${BOT_TOKEN}`,
})

export const sendMessage = async (feed: CryptoNews) => {
  const config: AxiosRequestConfig<SendMessageInput> = {
    method: 'POST',
    url: '/sendMessage',
    data: {
      chat_id: CHANNEL_ID,
      text: `${feed.title}\b\b${feed.url}`,
    },
  }

  return axios(config)
}
