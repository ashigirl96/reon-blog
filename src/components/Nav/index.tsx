import { VFC } from 'react'
import { SITE_LINKS } from '@/constants/site_links'

export const Nav: VFC = () => {
  return (
    <div>
      <div className="navbar bg-base-100 flex flex-wrap justify-center sm:justify-start">
        <div className="sm:flex-1 flex-none">
          <a className="btn btn-ghost normal-case text-xl" href="/">
            1e0nhard's Blog
          </a>
        </div>
        <div className="flex">
          <ul className="flex flex-wrap grow sm:w-1/2 menu menu-horizontal p-0 justify-center sm:justify-start">
            {SITE_LINKS.map((site) => (
              <li className="flex">
                <a href={site.url} className="gap-2">
                  <span className="text-2xl">{site.icon}</span>
                  {site.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
