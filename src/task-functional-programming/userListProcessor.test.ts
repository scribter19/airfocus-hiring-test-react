import { listUsers } from '../data'
import { userListProcessor } from './userListProcessor'

it('userListProcessor', async () => {
  const users = await listUsers()
  const processedUsers = await userListProcessor(users)
  expect(processedUsers).toHaveLength(10)
  expect(processedUsers[0]).toEqual({
    id: 'user-1',
    email: 'user1@domain.com',
    groupNames: ['Group #1', 'Group #2'],
    mateCount: 1,
  })
  expect(processedUsers[9]).toEqual({
    id: 'user-10',
    email: 'user10@domain.com',
    groupNames: ['Group #10', 'Group #11'],
    mateCount: 1,
  })
  expect(processedUsers[1]).toEqual({
    id: 'user-2',
    email: 'user2@domain.com',
    groupNames: ['Group #2', 'Group #3'],
    mateCount: 2,
  })
})
