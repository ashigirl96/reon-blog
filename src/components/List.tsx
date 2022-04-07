import { FC } from 'react'

export const List: FC = ({ children }) => {
  return <li className="my-0">{children}</li>
}

export const UnorderedList: FC = ({ children }) => {
  return (
    <ul role="list" className="marker:text-sky-400 list-disc pl-5 my-0">
      {children}
    </ul>
  )
}

export const OrderedList: FC = ({ children }) => {
  return (
    <ol className="list-decimal marker:text-sky-400 pl-5 my-0">{children}</ol>
  )
}
