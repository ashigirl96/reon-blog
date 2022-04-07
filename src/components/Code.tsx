import { FC } from 'react'

export const Code: FC = ({ children }) => {
  return (
    <div className="">
      <pre className="">{children}</pre>
    </div>
  )
}

export const Pre: FC = ({ children }) => {
  return <pre>{children}</pre>
}
