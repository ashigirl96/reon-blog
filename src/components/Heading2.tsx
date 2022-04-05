import { FC } from 'react'

export const Heading2: FC = ({ children }) => {
  return (
    <h2 className="bg-primary py-1 text-2xl">
      <div className="text-primary-content p-2">{children}</div>
    </h2>
  )
}
