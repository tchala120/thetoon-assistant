import type { ReactNode } from 'react'

import Head from 'next/head'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'

interface PageLayoutProps {
  title: string
  description: string
  children: ReactNode
}

const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <PageLayoutContainer>
      <Container>
        <NextSeo title={title} description={description} />

        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="shortcut icon" href="/toon.webp" />
        </Head>

        {children}
      </Container>
    </PageLayoutContainer>
  )
}

export default PageLayout

const PageLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #121212;
  color: #f8f8f8;
  padding: 0 24px;
`

const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  max-width: 768px;
`
