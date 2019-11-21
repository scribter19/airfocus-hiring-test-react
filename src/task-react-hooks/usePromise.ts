export type PromiseResult<T> = { type: 'loading' } | { type: 'success'; value: T } | { type: 'failure'; error: any }

export function usePromise<T>(promise: () => Promise<T>): PromiseResult<T> {
  // TODO
  return { type: 'loading' }
}
