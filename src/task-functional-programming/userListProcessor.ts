import { listUserGroups, User, UserGroup } from '../data'

export interface ProcessedUser extends Pick<User, 'id' | 'email'> {
  groupNames: string[]
  mateCount: number
}

export async function userListProcessor(users: User[]): Promise<ProcessedUser[]> {
  const groups: UserGroup[] = await listUserGroups()
  return users.map(user => {
    const mates: string[] = []
    const groupNames: string[] = groups.filter(group => user.groupIds.indexOf(group.id) >= 0)
      .map(group => {
        group.userIds.filter(x => x !== user.id && mates.indexOf(x) < 0)
          .map(x => {mates.push(x)
        })
        return group.name
      })

    return {
      id: user.id,
      email: user.email,
      groupNames,
      mateCount: mates.length,
    }
  })
}
