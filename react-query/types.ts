import type {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

export type ReactQueryUseQueryOptions<TData extends any, TError = any> = Omit<
  UseQueryOptions<TData, TError, TData, string[]>,
  'queryKey' | 'queryFn' | 'initialData'
>

export type ReactQueryUseMutationOptions<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> =
  | Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>
  | undefined

export type ReactQueryUseQuery<TData extends any, TError = any> = (
  options?: ReactQueryUseQueryOptions<TData, TError>
) => UseQueryResult<TData, TError>

export type ReactQueryUseQueryByID<TData extends any, TError = any> = (
  id: number,
  options?: ReactQueryUseQueryOptions<TData, TError>
) => UseQueryResult<TData, TError>

export type ReactQueryUseMutation<
  TData extends any,
  TError = any,
  TVariables = any,
  TContext = any
> = (
  options?: ReactQueryUseMutationOptions<TData, TError, TVariables, TContext>
) => UseMutationResult<TData, TError, TVariables, TContext>
