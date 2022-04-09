import { FC } from 'react'

export const Heading1: FC = ({ children }) => {
  return (
    <h1 className="border-b-2 border-primary mb-[0.45em]">
      <div className="text-primary">{children}</div>
    </h1>
  )
}
