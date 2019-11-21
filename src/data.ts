/**
 * This file provides some mock data
 */

export interface UserGroup {
  id: string
  name: string
  userIds: string[]
}

export interface User {
  id: string
  email: string
  groupIds: string[]
}

export async function listUsers(): Promise<User[]> {
  await sleep(100)
  return numbers(1, 10).map<User>(i => ({
    id: `user-${i}`,
    email: `user${i}@domain.com`,
    groupIds: [`group-${i}`, `group-${i + 1}`],
  }))
}

export async function listUserGroups(): Promise<UserGroup[]> {
  await sleep(100)
  return numbers(1, 11).map<UserGroup>(i => ({
    id: `group-${i}`,
    name: `Group #${i}`,
    userIds: [i - 1, i].filter(i => i >= 1 && i <= 10).map(i => `user-${i}`),
  }))
}

function sleep(millis: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, millis))
}

function numbers(start: number, length: number): number[] {
  return new Array(length).fill(start).map((s, i) => s + i)
}

export interface Article {
  image: string
  title: string
  subTitle?: string
  content: string
  commentCount: number
}

export const articles: Article[] = [
  {
    image: 'https://picsum.photos/id/1/800/600',
    title: 'Ragged Male',
    subTitle: 'Some subtitle',
    content: loremIpsum(6),
    commentCount: 0,
  },
  {
    image: 'https://picsum.photos/id/2/800/600',
    title: 'The Devoted Dream',
    content: loremIpsum(4),
    commentCount: 9,
  },
  {
    image: 'https://picsum.photos/id/3/800/600',
    title: 'Slave of Obsession',
    content: loremIpsum(3),
    commentCount: 2,
  },
  {
    image: 'https://picsum.photos/id/4/800/600',
    title: "The Flying's Weeping",
    subTitle: 'Some subtitle',
    content: loremIpsum(2),
    commentCount: 4,
  },
  {
    image: 'https://picsum.photos/id/5/800/600',
    title: 'The Rings of the Heat',
    subTitle: 'Some subtitle',
    content: loremIpsum(5),
    commentCount: 1,
  },
  {
    image: 'https://picsum.photos/id/6/800/600',
    title: 'Flames in the Women',
    content: loremIpsum(3),
    commentCount: 0,
  },

  {
    image: 'https://picsum.photos/id/7/800/600',
    title: 'Kissing Crying',
    content: loremIpsum(2),
    commentCount: 16,
  },
  {
    image: 'https://picsum.photos/id/8/800/600',
    title: 'The Fallen End',
    subTitle: 'Some subtitle',
    content: loremIpsum(2),
    commentCount: 2,
  },
  {
    image: 'https://picsum.photos/id/9/800/600',
    title: 'Death of Thief',
    content: loremIpsum(6),
    commentCount: 2,
  },
  {
    image: 'https://picsum.photos/id/10/800/600',
    title: "The Birch's Streams",
    content: loremIpsum(1),
    commentCount: 3,
  },
  {
    image: 'https://picsum.photos/id/11/800/600',
    title: 'The Names of the Weeping',
    subTitle: 'Some subtitle',
    content: loremIpsum(2),
    commentCount: 2,
  },
  {
    image: 'https://picsum.photos/id/12/800/600',
    title: 'Force in the Flames',
    subTitle: 'Some subtitle',
    content: loremIpsum(4),
    commentCount: 5,
  },
]

function loremIpsum(count: number) {
  const text =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  return new Array(count).fill(text).join('\n\n')
}

export function abstract(text: string, maxLength: number): string {
  return text.length > maxLength ? text.substr(0, maxLength) + '...' : text
}
