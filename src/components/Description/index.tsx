import { FC } from 'react'

export const Description: FC = ({ children }) => {
  return (
    <div className="mx-4 sm:mx-auto flex justify-center">
      <p>{children}</p>
    </div>
  )
}
