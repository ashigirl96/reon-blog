import { FC } from 'react'

export const Code: FC = ({ children }) => {
  return (
    <span className="bg-yellow text-grays rounded-sm px-1 mx-0.5 whitespace-pre-line">
      {children}
    </span>
  )
}
