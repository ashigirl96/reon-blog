import { VFC } from 'react'
import { SITE_LINKS } from '@/constants/site_links'
import {
  useDataTheme,
  DataThemes,
  DataThemesTypes,
} from '@/components/DataTheme'

export const Nav: VFC = () => {
  const { setDataTheme } = useDataTheme()
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
        <div className="dropdown dropdown-end sm:pl-10">
          <label tabIndex={0} className="btn m-1">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            Theme
            <svg
              width="12px"
              height="12px"
              className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* @ts-expect-error */}
            {Object.keys(DataThemes).map((theme: DataThemesTypes) => {
              return (
                <div
                  key={theme}
                  className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                  data-set-theme={theme}
                  data-act-class="outline"
                  onClick={() => setDataTheme(theme)}
                >
                  <div
                    data-theme={theme}
                    className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                  >
                    <div className="grid grid-cols-5 grid-rows-3">
                      <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                        <div className="flex-grow text-sm font-bold">
                          {theme}
                        </div>
                        <div className="flex flex-shrink-0 flex-wrap gap-1">
                          <div className="bg-primary w-2 rounded" />
                          <div className="bg-secondary w-2 rounded" />
                          <div className="bg-accent w-2 rounded" />
                          <div className="bg-neutral w-2 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
