import { VFC } from 'react'

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
        <h2 className="card-title text-primary-content">{title}</h2>
        <div className="badge rounded-md badge-ghost">{date}</div>
        <p className="">{feeling}</p>
        <div className="card-actions justify-end">
          {tags.map((tag) => (
            <div className="badge badge-accent badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
