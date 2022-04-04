import { VFC } from 'react'

type Props = {
  title: string
  icon: string
}
export const Title: VFC<Props> = ({ title, icon }) => {
  return (
    <h1 className="text-3xl flex justify-center">
      <p className="text-white">
        <span className="mr-2">{icon}</span>
        {title}
        <span className="ml-2">{icon}</span>
      </p>
    </h1>
  )
}