import type { NextPage } from 'next'

import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import PageLayout from 'layouts/PageLayout'

import PageTitle from 'components/PageTitle'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <PageLayout
      title="TheToon Bot - The personal assistant for myself"
      description="Crypto news aggregator"
    >
      <Center>
        <PageTitle>Home Page</PageTitle>
      </Center>
    </PageLayout>
  )
}

export default Home

const Center = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
