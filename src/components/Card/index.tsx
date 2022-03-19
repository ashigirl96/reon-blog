import { VFC } from 'react'
import { DateTag, Tag } from '../Tag'

type Props = {
  imgURL: string
  title: string
  date: string
  tags: string[]
  feeling: string
}

export const Card: VFC<Props> = ({ imgURL, title, date, tags, feeling }) => {
  return (
    <div className="max-w-[20rem] space-y-1 w-80 mb-10 mr-10">
      <div>
        <img className="rounded-t-2xl object-cover h-60 w-80" src={imgURL} />
      </div>
      <div className="space-y-2">
        <div className="text-2xl text-white">{title}</div>
        <div className="flex justify-between">
          <DateTag date={date} />
          <div className="flex space-x-2">
            {tags.map((name) => (
              <Tag key={name} name={name} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm text-bgText">{feeling}</div>
        </div>
      </div>
    </div>
  )
}
