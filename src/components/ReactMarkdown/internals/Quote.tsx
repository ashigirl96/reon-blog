import { FC } from 'react'

export const Quote: FC = ({ children }) => {
  return (
    <div className="border-l-4 border-double border-sky-400 pl-4 my-2">
      {children}
    </div>
  )
}
