import supabase from 'helpers/supabase'

export interface News {
  title: string
  url: string
  author: string
  content: string
  imageUrl: string
  published: string
  feedTitle: string
  feedUrl: string
}

const news = {
  create: (record: News) => supabase.from<News>('news').insert(record),
  delete: (id: number) => supabase.from('news').delete().match({ id }),
}

export default news
