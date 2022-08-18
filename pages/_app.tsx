import type { AppProps } from 'next/app'

import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { DefaultSeo } from 'next-seo'

import RouterTransition from 'components/RouterTransition'

import { meta } from 'constants/meta'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Roboto, "sans-serif"',
        black: '#121212',
        white: '#f8f8f8',
      }}
    >
      <NotificationsProvider>
        <RouterTransition />

        <DefaultSeo
          canonical={meta.siteUrl}
          openGraph={{
            type: 'website',
            locale: 'en_TH',
            url: meta.siteUrl,
            title: meta.title,
            description: meta.description,
            site_name: 'TheToon Assistant',
            images: [
              {
                url: `${meta.siteUrl}/og-image.webp`,
                alt: meta.description,
                width: 800,
                height: 600,
              },
            ],
          }}
          twitter={{
            handle: '@thetoonishere',
            site: '@thetoonishere',
            cardType: 'summary_large_image',
          }}
        />

        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
  )
}

export default MyApp
