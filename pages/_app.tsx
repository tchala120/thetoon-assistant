import type { AppProps } from 'next/app'

import { MantineProvider } from '@mantine/core'
import { DefaultSeo } from 'next-seo'

import RouterTransition from 'components/RouterTransition'

import { meta } from 'constants/meta'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterTransition />

      <DefaultSeo
        canonical={meta.canonical}
        openGraph={{
          type: 'website',
          locale: 'en_TH',
          url: 'https://bot.panupong.io',
          title: meta.title,
          description: meta.description,
          site_name: 'TheToon Bot',
          images: [
            {
              url: 'https://bot.panupong.io/og-image.webp',
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
    </MantineProvider>
  )
}

export default MyApp
