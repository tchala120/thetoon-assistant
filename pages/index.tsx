import { Button } from '@mantine/core'

import PageLayout from 'layouts/PageLayout'

import PageTitle from 'components/PageTitle'
import Center from 'components/Center'

import type { NextPageComponentProps } from 'types'

const Home = ({ liff }: NextPageComponentProps) => {
  return (
    <PageLayout
      title="TheToon Assistant - The personal assistant for myself"
      description="Crypto news aggregator"
    >
      <Center>
        <PageTitle>Home Page</PageTitle>

        <Button
          onClick={() => {
            liff.logout()

            window.location.reload()
          }}
        >
          Logout
        </Button>
      </Center>
    </PageLayout>
  )
}

export default Home
