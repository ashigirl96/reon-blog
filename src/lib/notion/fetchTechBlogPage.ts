import { notionClient } from './client'

const getPageId = (notionURL: string) => {
  return notionURL.match(/([0-9a-z]{32})$/)?.[0] || ''
}

type IPage = {
  icon: string
  date: string
  categories: string[]
  name: string
}

export const fetchTechBlogPage = async (pageId: string): Promise<IPage> => {
  const response = await notionClient.pages.retrieve({
    page_id: pageId,
  })
  // @ts-expect-error
  const { icon, properties } = response
  const { date, Category, Name } = properties
  return {
    icon: icon.emoji,
    date: date.date.start,
    categories: Category.multi_select.map(
      // @ts-expect-error
      (select) => select.name,
    ),
    name: Name.title[0].plain_text,
  }
}
