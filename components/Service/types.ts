import type { ReactNode } from 'react'

export interface ServiceMenu {
  id: number
  title: string
  icon: ReactNode
  destination: string
}
