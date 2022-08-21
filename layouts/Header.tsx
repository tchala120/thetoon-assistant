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
        <link rel="shortcut icon" href="/toon.webp" />
      </Head>
    </>
  )
}

export default Header
