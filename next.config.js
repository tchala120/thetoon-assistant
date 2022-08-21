const { withSentryConfig } = require('@sentry/nextjs')
const withTM = require('next-transpile-modules')(['antd-mobile'])

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withSentryConfig(withTM(nextConfig), {
  authToken: process.env.SENTRY_AUTH_TOKEN,
  dryRun: process.env.VERCEL_ENV !== 'production',
})
