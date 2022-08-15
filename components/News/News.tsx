import { Anchor, Badge, Card, Space, Text } from '@mantine/core'

import type { News as NewsType } from 'model/news'

interface NewsProps {
  data: NewsType
}

const News = ({ data }: NewsProps) => {
  return (
    <Anchor href={data.url}>
      <Card>
        <Text weight={500}>{data.title}</Text>

        <Space h="xs" />

        <Badge>{data.published}</Badge>
      </Card>
    </Anchor>
  )
}

export default News
