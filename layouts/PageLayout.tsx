import type { ReactNode } from 'react'

import { Container } from '@mantine/core'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'
import Head from 'next/head'

interface PageLayoutProps {
  title: string
  description: string
  children: ReactNode
}

const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <PageLayoutContainer>
      <NextSeo title={title} description={description} />

      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/toon.webp" />
      </Head>

      <Container mx="auto" size="xs" p="md">
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
`
