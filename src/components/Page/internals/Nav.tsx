import { VFC } from 'react'
import { SITE_LINKS } from '@/constants/site_links'
import { useDataTheme, DataThemes } from '@/components/DataTheme'
import Link from 'next/link'
import classNames from 'classnames'

export const Nav: VFC = () => {
  const { setDataTheme, dataTheme } = useDataTheme()
  return (
    <div>
      <div className="navbar bg-base-100 flex flex-wrap justify-center sm:justify-start">
        <div className="sm:flex-1 flex-none">
          <Link href={'/'}>
            <a className="btn btn-ghost normal-case text-xl">Reon's Blog</a>
          </Link>
        </div>
        <div className="flex">
          <ul className="flex flex-wrap grow sm:w-1/2 menu menu-horizontal p-0 justify-center sm:justify-start">
            {SITE_LINKS.map((site) => (
              <li className="flex ml-0 sm:ml-4">
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
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 ml-4"
          onClick={() =>
            dataTheme === DataThemes.winter
              ? setDataTheme(DataThemes.night)
              : setDataTheme(DataThemes.winter)
          }
        >
          <svg
            id="theme-toggle-light-icon"
            className={classNames(
              'w-5 h-5',
              dataTheme === DataThemes.night ? 'block' : 'hidden',
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          <svg
            id="theme-toggle-dark-icon"
            className={classNames(
              'w-5 h-5',
              dataTheme === DataThemes.winter ? 'block' : 'hidden',
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
