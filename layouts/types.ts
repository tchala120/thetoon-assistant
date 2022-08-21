import type { ReactNode } from 'react'

export interface LayoutProps {
  title: string
  description: string
  noPadding?: boolean
  children: ReactNode
}
