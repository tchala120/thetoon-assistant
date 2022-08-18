import type { NextPage } from 'next'

import PageLayout from 'layouts/PageLayout'

import PageTitle from 'components/PageTitle'
import Center from 'components/Center'

const Home: NextPage = () => {
  return (
    <PageLayout
      title="TheToon Assistant - The personal assistant for myself"
      description="Crypto news aggregator"
    >
      <Center>
        <PageTitle>Home Page</PageTitle>
      </Center>
    </PageLayout>
  )
}

export default Home
