import { FC } from 'react'
import classNames from 'classnames'
// import { className } from 'postcss-selector-parser'

type Props = {
  width: number
}
export const Page: FC<Props> = ({ children, width }) => {
  const _width = `max-w-7xl sm:max-w-${width}xl`
  return (
    <div className={classNames(`mx-auto space-y-8 mt-10`, _width)}>
      {children}
    </div>
  )
}
