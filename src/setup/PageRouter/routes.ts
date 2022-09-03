export type RouteKey = 'home' | 'todo' | 'todoDetail' | 'ledger' | 'setting'

export const paths: Record<RouteKey, string> = {
  home: '/',
  ledger: '/ledger',
  todo: '/todo',
  todoDetail: '/todo/:id',
  setting: '/setting',
}
