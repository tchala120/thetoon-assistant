import type { PostgrestFilterBuilder } from '@supabase/postgrest-js'

type ModalCreateOrUpdate<T> = (
  record: T,
  id?: number
) => PostgrestFilterBuilder<T>

type ModelDelete<T> = (id: number) => PostgrestFilterBuilder<T>

export type ModelResult<T> = {
  create: ModalCreateOrUpdate<T>
  update: ModalCreateOrUpdate<T>
  delete: ModelDelete<T>
}
