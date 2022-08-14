namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SENTRY_DNS: string // this is the line you want
    NODE_ENV: 'development' | 'production'
    PORT?: string
    PWD: string
    SENTRY_AUTH_TOKEN: string
    TELEGRAM_BOT_TOKEN: string
    TELEGRAM_CHANNEL_ID: string
  }
}
