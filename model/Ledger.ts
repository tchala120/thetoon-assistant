/**
 * @param {number} id - Transaction id.
 * @param {string} title - Transaction title.
 * @param {string} type - Transaction type support (`shopping`, `food`, `entertainment`, `personal`, `investment`, `transport`, `travel`, `donation`, `bill`, `education`, `rent`, `insurance`, `withdraw`)
 * @param {number} amount - Transaction baht amount.
 * @param {string} date - Transaction date for report.
 * @param {created_at} Date - Time since created record (not changed).
 * @param {updated_at} Date - Time when updated record.
 */

import supabase from 'helpers/supabase'
import { ModelResult } from './types'

export interface Ledger {
  id: number
  title: string
  type: string
  amount: number
  date: string
  created_at: Date
  updated_at: Date
}

const createOrUpdate = (record: Ledger, id?: number) =>
  supabase.from<Ledger>('ledgers').upsert({
    ...record,
    id,
  })

const ledger: ModelResult<Ledger> = {
  create: createOrUpdate,
  update: createOrUpdate,
  delete: (id: number) =>
    supabase.from<Ledger>('ledgers').delete().match({ id }),
}

export default ledger
