namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    PORT?: string
    PWD: string

    /**
     * Sentry configuration env
     */

    SENTRY_AUTH_TOKEN: string
    NEXT_PUBLIC_SENTRY_DNS: string // this is the line you want

    /**
     * Telagram configuration env
     */

    TELEGRAM_BOT_TOKEN: string
    TELEGRAM_CHANNEL_ID: string

    /**
     * Supabase configuration env
     */
    SUPABASE_URL: string
    SUPABASE_ANON_PUBLIC_KEY: string
    SUPABASE_SEVICE_ROLE_KEY: string

    /**
     * Line configuration env
     */
    LINE_API_KEY: string
    LINE_USER_ID: string
    LINE_CHANNEL_ACCESS_TOKEN: string
  }
}
