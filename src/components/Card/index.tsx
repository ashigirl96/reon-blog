import { VFC } from 'react'
import { CategoryTag, DateTag } from '@/components'

type Props = {
  imgURL: string
  title: string
  date: string
  tags: string[]
  feeling: string
}

export const Card: VFC<Props> = ({ imgURL, title, date, tags, feeling }) => {
  return (
    <div className="card max-w-[20rem] space-y-1 bg-base-100 shadow-xl">
      <figure>
        <img
          className="rounded-t-2xl object-cover h-60 min-w-[20rem]"
          src={imgURL}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <DateTag date={date} />
        <p className="">{feeling}</p>
        <div className="card-actions justify-end">
          {tags.map((tag) => (
            <CategoryTag category={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}
