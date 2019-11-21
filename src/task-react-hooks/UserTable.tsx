import * as React from 'react'
import { listUsers } from '../data'
import { usePromise } from './usePromise'

export const UserTable: React.FC = () => {
  // TODO
  const users = usePromise(listUsers)
  return <div>UserTable</div>
}
