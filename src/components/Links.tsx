import Link from 'next/link'
import { VFC } from 'react'
import { SITE_LINKS } from '@/constants/site_links'

const SiteTitle: VFC = () => (
  <div className="text-2xl">
    <Link href="/">
      <a>
        1e0nhard96's <span>BLOG</span>
      </a>
    </Link>
  </div>
)

export const SiteLinks: VFC = () => {
  return (
    <div className="space-y-5 min-w-fit flex flex-col items-center md:block mb-10 md:mb-0">
      <SiteTitle />
      <div className="space-y-4">
        <ul>
          {SITE_LINKS.map(({ name, icon, url }) => (
            <li>
              <Link href={url}>
                <a>
                  <span className="pr-2">{icon}</span>
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
