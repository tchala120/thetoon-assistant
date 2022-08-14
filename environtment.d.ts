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
    NEXT_PUBLIC_SUPABASE_URL: string
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY: string
    SUPABASE_SERVICE_ROLE_KEY: string

    /**
     * Line configuration env
     */
    LINE_API_KEY: string
    LINE_USER_ID: string
    LINE_CHANNEL_ACCESS_TOKEN: string

    /**
     * SEO configuration env
     */
    NEXT_PUBLIC_CANONICAL: string
  }
}
