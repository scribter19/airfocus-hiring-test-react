import { listUserGroups, User, UserGroup } from '../data'

export interface ProcessedUser extends Pick<User, 'id' | 'email'> {
  groupNames: string[]
  mateCount: number
}

export async function userListProcessor(users: User[]): Promise<ProcessedUser[]> {
  // TODO
  const groups: UserGroup[] = await listUserGroups()
  const result: ProcessedUser[] = []
  for (let i = 0; i < users.length; i++) {
    const user = users[i]
    const mates: string[] = []
    const groupNames: string[] = []
    for (let j = 0; j < groups.length; j++) {
      const group = groups[j]
      if (user.groupIds.indexOf(group.id) >= 0) {
        for (let k = 0; k < group.userIds.length; k++) {
          if (group.userIds[k] !== user.id && mates.indexOf(group.userIds[k]) < 0) {
            mates.push(group.userIds[k])
          }
        }
        groupNames.push(group.name)
      }
    }
    const processedUser: ProcessedUser = {
      id: user.id,
      email: user.email,
      groupNames,
      mateCount: mates.length,
    }
    result.push(processedUser)
  }
  return result
}
