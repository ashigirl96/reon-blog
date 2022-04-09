import { FC } from 'react'

export const Heading2: FC = ({ children }) => {
  return (
    <h2 className="bg-secondary mt-[0.75em] mb-[0.5em]">
      <div className="text-secondary-content p-2">{children}</div>
    </h2>
  )
}
