import { FC } from 'react'

export const Heading1: FC = ({ children }) => {
  return (
    <h1 className="border-b-2 my-4">
      <div className="text-3xl text-neutral-content p-2">{children}</div>
    </h1>
  )
}
