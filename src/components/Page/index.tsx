import { FC } from 'react'
import { Footer, Nav } from '@/components'
import classNames from 'classnames'

type Props = {
  width: number
}
export const Page: FC<Props> = ({ children, width }) => {
  return (
    <>
      <body>
        <div className="min-h-screen">
          <Nav />
          <div className="mx-1 md:mx-10">
            <div
              className={classNames(
                `mx-auto space-y-8 mt-10 max-w-7xl`,
                maxWith(width),
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
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
