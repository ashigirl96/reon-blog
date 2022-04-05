import { FC } from 'react'

export const Heading1: FC = ({ children }) => {
  return (
    <h1 className="border-b-2 border-primary my-4 text-3xl">
      <div className="text-primary p-2">{children}</div>
    </h1>
  )
}
