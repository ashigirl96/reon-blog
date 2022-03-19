import { notionClient } from './client'
import { putGalleryToS3 } from '@/lib/aws'
import { GALLERY_DATABASE_ID } from '@/constants'

export const freshGalleries = async () => {
  // 1. imageS3URLのないレコード一覧取り出す
  const response = await notionClient.databases.query({
    database_id: GALLERY_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'imageS3URL',
          url: {
            is_empty: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  const { results } = response
  const urls = await Promise.all(
    results.map(async (result) => {
      // 2. 画像のURLを取り出す
      // @ts-expect-error
      const imgURL: string = result.properties.Image.files[0].file.url
      const url = await putGalleryToS3(imgURL)
      // 3. そのURLに対して、putGalleryToS3をする
      return {
        id: result.id,
        url,
      }
    }),
  )
  // 4. putGalleryUrlsから
  for (const { id, url } of urls) {
    await notionClient.pages.update({
      page_id: id,
      properties: {
        imageS3URL: {
          url,
        },
      },
    })
  }
}
