import type { AppProps } from 'next/app'

import { MantineProvider } from '@mantine/core'

import RouterTransition from 'components/RouterTransition'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterTransition />

      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
