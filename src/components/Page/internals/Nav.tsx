import { VFC } from 'react'
import { SITE_LINKS } from '@/constants/site_links'
import { useDataTheme, DataThemes } from '@/components/DataTheme'
import Link from 'next/link'

export const Nav: VFC = () => {
  const { setDataTheme, dataTheme } = useDataTheme()
  return (
    <div>
      <div className="navbar bg-base-100 flex flex-wrap justify-center sm:justify-start">
        <div className="sm:flex-1 flex-none">
          <Link href={'/'}>
            <a className="btn btn-ghost normal-case text-xl">1e0nhard's Blog</a>
          </Link>
        </div>
        <div className="flex">
          <ul className="flex flex-wrap grow sm:w-1/2 menu menu-horizontal p-0 justify-center sm:justify-start">
            {SITE_LINKS.map((site) => (
              <li className="flex">
                <Link href={site.url}>
                  <a className="gap-2">
                    <span className="text-2xl">{site.icon}</span>
                    <span className="hidden md:block">{site.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <input
          className="toggle ml-4"
          type="checkbox"
          checked={dataTheme === DataThemes.winter}
          onClick={(e) => {
            if (e.currentTarget.checked) {
              setDataTheme(DataThemes.winter)
            } else {
              setDataTheme(DataThemes.night)
            }
          }}
        />
      </div>
    </div>
  )
}
