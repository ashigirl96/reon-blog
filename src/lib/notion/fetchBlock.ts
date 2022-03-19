import { notionClient } from './client'

export const fetchBlock = async (pageId: string, pageSize: number = 100) => {
  const response = await notionClient.blocks.children.list({
    block_id: pageId,
    page_size: pageSize,
  })
  const { results } = response
  return results
}
