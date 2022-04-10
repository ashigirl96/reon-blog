import { FC } from 'react'
import { Footer, Nav } from './internals'
import classNames from 'classnames'
import { useDataTheme } from '@/components/DataTheme'
import { CommonMeta } from '@/components'

type Props = {
  width: number
  noMargin?: boolean
  footerMargin?: boolean
  title: string
  description: string
}
export const Page: FC<Props> = ({
  children,
  width,
  noMargin,
  footerMargin,
  title,
  description,
}) => {
  const { dataTheme } = useDataTheme()
  return (
    <main>
      <CommonMeta title={title} description={description} />
      <body data-theme={dataTheme}>
        <div className="min-h-screen">
          <Nav />
          <div className={classNames(noMargin ? '' : 'mx-1 md:mx-10')}>
            <div
              className={classNames(
                `mx-auto space-y-8`,
                noMargin ? 'max-w-full' : 'max-w-7xl mt-10',
                maxWith(width),
              )}
            >
              {children}
            </div>
          </div>
        </div>
        <Footer margin={footerMargin === undefined ? true : footerMargin} />
      </body>
    </main>
  )
}

const maxWith = (width: number) => {
  switch (width) {
    case 1:
      return 'sm:max-w-xl'
    case 2:
      return 'sm:max-w-2xl'
    case 3:
      return 'sm:max-w-3xl'
    case 4:
      return 'sm:max-w-4xl'
    case 5:
      return 'sm:max-w-5xl'
    case 6:
      return 'sm:max-w-6xl'
  }
}
