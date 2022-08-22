const withPlugins = require('next-compose-plugins')
const { withSentryConfig } = require('@sentry/nextjs')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withTM = require('next-transpile-modules')(['antd-mobile'])

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
}

const nextPlugins = [
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        runtimeCaching,
      },
    },
  ],
  (nextConfig) =>
    withSentryConfig(nextConfig, {
      authToken: process.env.SENTRY_AUTH_TOKEN,
      dryRun: process.env.VERCEL_ENV !== 'production',
    }),
  withTM,
]

module.exports = withPlugins(nextPlugins, nextConfig)
