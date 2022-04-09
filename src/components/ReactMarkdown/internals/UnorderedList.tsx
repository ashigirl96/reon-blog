import { FC } from 'react'

export const UnorderedList: FC = ({ children }) => {
  return (
    <ul role="list" className="marker:text-sky-400 list-disc pl-5 my-0">
      {children}
    </ul>
  )
}
