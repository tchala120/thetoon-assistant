import Link from 'next/link'
import { Button } from 'antd-mobile'

import PageLayout from 'layouts/PageLayout'

import Center from 'components/Center'
import PageTitle from 'components/PageTitle'

import { meta } from 'constants/meta'

const NotFoundPage = () => {
  return (
    <PageLayout title="Not found" description={meta.description}>
      <Center>
        <PageTitle>Page not found</PageTitle>

        <Link href="/">
          <a>
            <Button color="primary">Back to home</Button>
          </a>
        </Link>
      </Center>
    </PageLayout>
  )
}

export default NotFoundPage
