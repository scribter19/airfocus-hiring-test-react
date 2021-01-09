import { css } from 'emotion'
import * as React from 'react'
import { listUsers, User } from '../data'
import { PromiseResult, usePromise } from './usePromise'

export const UserTable: React.FC = () => {
  const tdStyle = css`
    border: 1px solid black;
    padding: 8px;`

  const tableStyle = css`
    border:1px solid black;
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  `

  const thStyle = css`
    padding: 12px;
    text-align: left;
    background-color: cornflowerblue;
    color: white;
    border: 1px solid black;
  `

  const users: PromiseResult<User[]> = usePromise(listUsers)
  let values;
  if (users.type === 'success') {
    const user = users.value.map(user =>
        <tr>
          <td className={tdStyle}>{user.id}</td>
          <td className={tdStyle}>{user.email}</td>
          <td className={tdStyle}>{user.groupIds.map(id => id + " ")}</td>
        </tr>
         )
    values = <table className={tableStyle}>
      <tr>
        <th className={thStyle}>ID</th>
        <th className={thStyle}>Email</th>
        <th className={thStyle}>Gruppen ID</th>
      </tr>
      {user}
    </table>
  } else if (users.type === 'loading') {
    values = 'Data is loading...'
  } else if (users.type === 'failure') {
    values = 'Ups... There was an error. ' + users.error
  }

  return (
    <div>
      <h1>UserTable</h1>
      <div>
        {values}
      </div>
    </div>
  )

}
