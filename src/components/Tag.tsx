import { VFC } from 'react'

export const CategoryTag: VFC<{ category: string }> = ({ category }) => (
  <div className="badge badge-info">#{category}</div>
)

export const DateTag: VFC<{ date: string }> = ({ date }) => (
  <div className="badge badge-ghost">{date}</div>
)
