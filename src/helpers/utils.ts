import { sentenceCase } from 'change-case'

export const getAppTitleFromPathname = (pathname: string) => {
  if (pathname === '/') {
    return 'Home'
  }

  return sentenceCase(pathname)
}
