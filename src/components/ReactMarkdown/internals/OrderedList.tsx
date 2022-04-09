import { FC } from 'react'

export const OrderedList: FC = ({ children }) => {
  return (
    <ol className="list-decimal marker:text-sky-400 pl-5 my-0">{children}</ol>
  )
}
