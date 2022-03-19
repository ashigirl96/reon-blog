import { TECH_BLOG_DATABASE_ID } from '@/constants'
import { notionClient } from './client'

export type TechBlogPageMeta = {
  pageId: string
  icon: string
  date: string
  name: string
  categories: string[]
}[]

export const fetchTechBlogPageMeta = async () => {
  const response = await notionClient.databases.query({
    database_id: TECH_BLOG_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'status',
          select: {
            equals: 'publish',
          },
        },
      ],
    },
  })

  const { results } = response
  return results.map((result) => {
    // @ts-expect-error
    const url: string = result.url
    return {
      pageId: url.match(/([0-9a-z]{32})$/)?.[0],
      // @ts-expect-error
      icon: result.icon.emoji,
      // @ts-expect-error
      date: result.properties.date.date.start,
      // @ts-expect-error
      name: result.properties.Name.title[0].plain_text,
      // @ts-expect-error
      categories: result.properties.Category.multi_select.map(
        // @ts-expect-error
        (select) => select.name,
      ),
    }
  })
}
