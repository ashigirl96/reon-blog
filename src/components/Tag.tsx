import { VFC } from 'react'

export const Tag: VFC<{ name: string }> = ({ name }) => (
  <div className="bg-green text-white px-1 py-[2px] rounded-md text-xs flex items-center">
    #{name}
  </div>
)

export const DateTag: VFC<{ date: string }> = ({ date }) => (
  <div className="bg-red text-white px-1 py-[2px] rounded-md text-xs flex items-center">
    {date}
  </div>
)
