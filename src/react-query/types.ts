import {
  MutationOptions,
  QueryKey,
  QueryOptions,
  UseMutationResult,
  UseQueryResult,
} from '@tanstack/react-query'

export type ReactQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = QueryOptions<TQueryFnData, TError, TData, TQueryKey>

export type ReactQueryMutationOptions<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> = MutationOptions<TData, TError, TVariables, TContext>

export type QueryResponse<
  TData = unknown,
  TError = unknown,
  TQueryFnData = unknown,
  TQueryKey extends QueryKey = QueryKey
> = (
  options?: ReactQueryOptions<TQueryFnData, TData, TError, TQueryKey>
) => UseQueryResult<TData, TError>

export type MutationResponse<
  TData = unknown,
  TError = unknown,
  TVariables = unknown,
  TContext = unknown
> = (
  options?: ReactQueryMutationOptions<TData, TError, TVariables, TContext>
) => UseMutationResult<TData, TError, TVariables, TContext>

export interface Todo {
  id: number
  name: string
  description: null
  isCompleted: boolean
  reminder: string
  created_at: Date
  updated_at: Date
  reminded: boolean
}
