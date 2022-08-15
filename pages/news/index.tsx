import type { GetServerSideProps } from 'next'

import { useEffect, useState } from 'react'
import { showNotification } from '@mantine/notifications'
import { Stack } from '@mantine/core'

import PageTitle from 'components/PageTitle'
import News from 'components/News'

import news, { News as NewsType } from 'model/news'

import PageLayout from 'layouts/PageLayout'

import supabase from 'helpers/supabase'

interface NewsPage {
  news?: NewsType[]
}

const NewsPage = ({ news }: NewsPage) => {
  const [listNews, setListNews] = useState<NewsType[] | undefined>(news)

  useEffect(() => {
    supabase
      .from<NewsType>('news')
      .on('INSERT', (payload) => {
        console.log('New item', payload)

        setListNews((prevListNews) => [payload.new, ...(prevListNews || [])])

        showNotification({
          title: '🚀 New feed item update!',
          message: payload.new.title,
        })
      })
      .subscribe()
  })

  return (
    <PageLayout
      title="Crypto News"
      description="The aggregator news from top 10 websites about cryptocurrency to make me follow up easier."
    >
      <PageTitle>News</PageTitle>

      <Stack>
        {listNews?.map((news) => (
          <News key={news.id} data={news} />
        ))}
      </Stack>
    </PageLayout>
  )
}

export default NewsPage

export const getServerSideProps: GetServerSideProps = async () => {
  const listNews = await news.get()

  return {
    props: {
      news: listNews.data,
    },
  }
}
