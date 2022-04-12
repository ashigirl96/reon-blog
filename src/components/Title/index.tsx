import { VFC } from 'react'

type Props = {
  title: string
  icon: string
}
export const Title: VFC<Props> = ({ title, icon }) => {
  return (
    <h1 className="text-3xl flex justify-center">
      <p className="">
        <span className="mr-2">{icon}</span>
        {title}
      </p>
    </h1>
  )
}
