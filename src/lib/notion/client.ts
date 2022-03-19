import { NOTION_API_KEY } from '@/constants'
import { Client } from '@notionhq/client'

export const notionClient = new Client({
  auth: NOTION_API_KEY,
})
