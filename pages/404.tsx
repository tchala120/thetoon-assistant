import PageLayout from 'layouts/PageLayout'

import Center from 'components/Center'
import PageTitle from 'components/PageTitle'

import { meta } from 'constants/meta'
import { Button } from '@mantine/core'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <PageLayout title="Not found" description={meta.description}>
      <Center>
        <PageTitle>Page not found</PageTitle>

        <Link href="/">
          <a>
            <Button>Back to home</Button>
          </a>
        </Link>
      </Center>
    </PageLayout>
  )
}

export default NotFoundPage
