import dayjs from 'dayjs'
import supabase from 'helpers/supabase'

export interface News {
  id: number
  title: string
  url: string
  author: string
  content: string
  imageUrl: string
  published: string
  feedTitle: string
  feedUrl: string
  created_at: Date
}

const news = {
  get: async () => {
    const data = await supabase.from<News>('news')

    const news = data.data?.sort((a, b) => {
      const first = dayjs(a.created_at)
      const second = dayjs(b.created_at)

      return first.isBefore(second) ? 1 : -1
    })

    return {
      ...data,
      data: news,
    }
  },
  getById: (id: number) =>
    supabase.from<News>('news').select('*').match({ id }),
  create: (record: News) => supabase.from<News>('news').insert(record),
  delete: (id: number) => supabase.from('news').delete().match({ id }),
}

export default news
