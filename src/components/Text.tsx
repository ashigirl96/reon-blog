import { FC } from 'react'

export const Text: FC = ({ children }) => {
  return (
    <p className="font-medium text-white items-center space-x-1 whitespace-pre-wrap">
      {children}
    </p>
  )
}
