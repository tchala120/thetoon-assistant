import type {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

export type ReactQueryUseQuery<TData extends any, TError = any> = (
  options?: UseQueryOptions<TData, TError, TData, string[]>
) => UseQueryResult<TData, TError>

export type ReactQueryUseQueryByID<TData extends any, TError = any> = (
  id: number,
  options?: UseQueryOptions<TData, TError, TData, string[]>
) => UseQueryResult<TData, TError>

export type ReactQueryUseMutation<
  TData extends any,
  TError = any,
  TVariables = any,
  TContext = any
> = (
  options?: UseMutationOptions<TData, TError, TVariables, TContext>
) => UseMutationResult<TData, TError, TVariables, TContext>
