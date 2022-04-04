import { FC } from 'react'

export const Heading1: FC = ({ children }) => {
  return (
    <h1 className="border-b-2 my-4">
      <div className="text-3xl text-primary p-2">{children}</div>
    </h1>
  )
}
