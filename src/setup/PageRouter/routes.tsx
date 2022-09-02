import type { ComponentType } from 'react'

export type RouteKey = 'home' | 'todo' | 'ledger' | 'setting'

export interface RoutePath {
  key: RouteKey
  path: string
  component: ComponentType
}

export const paths: Record<RouteKey, string> = {
  home: '/',
  ledger: '/ledger',
  todo: '/todo',
  setting: '/setting',
}
