import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  NavigationProgress,
  resetNavigationProgress,
  startNavigationProgress,
} from '@mantine/nprogress'

const RouterTransition = () => {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && startNavigationProgress()
    const handleComplete = () => resetNavigationProgress()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    console.log('Hello world')

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.asPath, router.events])

  return <NavigationProgress />
}

export default RouterTransition
