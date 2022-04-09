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
    name: 'Gallery',
    url: '/gallery',
  },
  {
    icon: '💻',
    name: 'Blog',
    url: '/blogs',
  },
  // TODO: いずれ実装する
  // {
  //   icon: '💭',
  //   name: 'Thinking Memo',
  //   url: '/memos',
  // },
]
