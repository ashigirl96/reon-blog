import { GALLERY_DATABASE_ID } from '@/constants'

import { notionClient } from './client'

export type ICard = {
  imgURL: string
  date: string
  tags: string[]
  title: string
  feeling: string
}

export const fetchCards = async (): Promise<ICard[]> => {
  const response = await notionClient.databases.query({
    database_id: GALLERY_DATABASE_ID,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  const { results } = response
  return results.map((result) => {
    const {
      Feelings,
      imageS3URL: imgUrlTag,
      Date: date,
      Hash,
      Title,
      // @ts-expect-error
    } = result.properties
    return {
      imgURL: imgUrlTag.url,
      // @ts-expect-error
      feeling: Feelings.rich_text.map((text) => text.plain_text)[0] || '',
      date: date.date.start,
      // @ts-expect-error
      tags: Hash.multi_select.map((hash) => hash.name),
      // @ts-expect-error
      title: Title.title.map((title) => title.plain_text)[0],
    }
  })
}
