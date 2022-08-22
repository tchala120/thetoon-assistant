import Head from 'next/head'
import { NextSeo } from 'next-seo'

import type { LayoutProps } from './types'

const Header = ({
  title,
  description,
}: Pick<LayoutProps, 'title' | 'description'>) => {
  return (
    <>
      <NextSeo title={title} description={description} />

      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        <link rel="shortcut icon" href="/toon.webp" />
      </Head>
    </>
  )
}

export default Header
