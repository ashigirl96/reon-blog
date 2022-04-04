import { FC } from 'react'

export const Heading2: FC = ({ children }) => {
  return (
    <h2 className="bg-grays text-primary py-1 mb-1">
      <div className="text-2xl p-2">{children}</div>
    </h2>
  )
}
