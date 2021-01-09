import { useState } from 'react';
import { User } from '../data'

export type PromiseResult<T> = { type: 'loading' } | { type: 'success'; value: T } | { type: 'failure'; error: any }



export function usePromise<T>(promise: () => Promise<User[]>): PromiseResult<User[]> {
  const [users, setUsers] = useState<PromiseResult<User[]>>({type: 'loading'})

  promise().then(result => {
    setUsers({type: 'success', value: result})
  }).catch(err => setUsers({type: 'failure', error: err}));

  return users
}

