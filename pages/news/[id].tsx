import type { GetServerSideProps } from 'next'
import type { ParsedUrlQuery } from 'querystring'

import { useEffect } from 'react'
import { Space, Text } from '@mantine/core'

import PageLayout from 'layouts/PageLayout'

import Center from 'components/Center'

import news from 'model/news'

import type { News } from 'model/news'

interface NewsDetailProps {
  news: News
}

const NewsDetail = ({ news }: NewsDetailProps) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = news.url
    }, 2000)
  }, [news.url])

  return (
    <PageLayout title={news?.title} description={news?.feedTitle}>
      <Center>
        <Text size="xl">Redirecting to...</Text>

        <Space h={24} />

        <Text size="xl" weight={700}>
          {news.title}
        </Text>
      </Center>
    </PageLayout>
  )
}

export default NewsDetail

interface NewsDetailQuery extends ParsedUrlQuery {
  id: string
}

interface NewsDetailResult {
  news?: News | null
}

export const getServerSideProps: GetServerSideProps<
  NewsDetailResult,
  NewsDetailQuery
> = async ({ params }) => {
  const id = Number(params?.id) || 0

  const { data } = await news.getById(id)

  return {
    props: {
      news: data?.[0],
    },
  }
}
