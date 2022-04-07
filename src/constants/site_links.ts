type Link = {
  icon: string
  name: string
  url: string
}

export const SITE_LINKS: Link[] = [
  {
    icon: '😄',
    name: 'Profile',
    url: '/profile',
  },
  {
    icon: '🗾',
    name: 'Travel Gallery',
    url: '/travels',
  },
  {
    icon: '💻',
    name: 'Tech Blog',
    url: '/tech-blogs',
  },
  // TODO: いずれ実装する
  // {
  //   icon: '💭',
  //   name: 'Thinking Memo',
  //   url: '/memos',
  // },
]
