import styled from '@emotion/styled'
import { Badge, Card, Space, Text } from '@mantine/core'
import Link from 'next/link'

import type { News as NewsType } from 'model/news'

interface NewsProps {
  data: NewsType
}

const News = ({ data }: NewsProps) => {
  return (
    <CardContainer>
      <Link href={`/news/${data.id}`}>
        <a style={{ textDecoration: 'none' }}>
          <Card>
            <Text size="xs" color="#999">
              {data.feedTitle}
            </Text>

            <Text weight={500}>{data.title}</Text>

            <Space h="xs" />

            <Badge>{data.published}</Badge>
          </Card>
        </a>
      </Link>
    </CardContainer>
  )
}

export default News

const CardContainer = styled.div`
  transition: all 0.125s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`
