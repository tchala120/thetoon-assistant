import styled from '@emotion/styled'
import { Badge, Card, Group, Space, Text } from '@mantine/core'
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
            <Group spacing="xs">
              <Text size="xs" color="#999">
                From: {data.feedTitle}
              </Text>

              {data.author && (
                <>
                  -
                  <Text size="xs" weight={500}>
                    by {data.author}
                  </Text>
                </>
              )}
            </Group>

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
