import 'styles/global.css'

import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import NextNProgress from 'nextjs-progressbar'
import { ConfigProvider } from 'antd-mobile'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import enUS from 'antd-mobile/es/locales/en-US'

import { LiffProvider } from 'context/useLiffContext'

import useSetupLiff from 'hooks/useSetupLiff'

import { meta } from 'constants/meta'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const { loading, liff, error } = useSetupLiff()

  if (loading || liff == null) {
    return <></>
  }

  pageProps.liff = liff
  pageProps.liffError = error

  return (
    <ConfigProvider locale={enUS}>
      <QueryClientProvider client={queryClient}>
        <LiffProvider lineLiff={liff}>
          <NextNProgress color="#1677ff" />

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
        </LiffProvider>
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default MyApp
