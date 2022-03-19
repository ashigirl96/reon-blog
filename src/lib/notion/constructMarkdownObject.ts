import * as dotenv from 'dotenv'
import { Client } from '@notionhq/client'
import { MarkdownObject } from './types'
import { fetchBlock } from './fetchBlock'
import { blockToMarkdownObject } from './blockToMarkdownObject'

export const constructMarkdownObject = async (pageId: string) => {
  const results = await fetchBlock(pageId)
  const objs: MarkdownObject[] = []
  for (const result of results) {
    // @ts-expect-error
    const type = result.type
    // @ts-expect-error
    const { has_children: hasChildren } = result
    const children = hasChildren ? await constructMarkdownObject(result.id) : []
    // @ts-expect-error
    objs.push(blockToMarkdownObject(type, result, children))
  }
  return objs
}
