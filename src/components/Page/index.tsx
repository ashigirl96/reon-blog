import { FC } from 'react'
import { Footer, Nav } from './internals'
import classNames from 'classnames'
import { CommonMeta } from '@/components'
import { colorScheme } from '@/atoms/colorScheme'
import { useRecoilValue } from 'recoil'

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
  const dataTheme = useRecoilValue(colorScheme)
  return (
    <div className="flex flex-col min-h-screen" data-theme={dataTheme}>
      <main className="flex-grow">
        <CommonMeta title={title} description={description} />
        <body>
          <div>
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
        </body>
      </main>
      <Footer margin={footerMargin === undefined ? true : footerMargin} />
    </div>
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
