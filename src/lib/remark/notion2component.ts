import { unified } from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
import rehypeReact from 'rehype-react'
import { createElement, Fragment } from 'react'
import {
  Code,
  Heading1,
  Heading2,
  Heading3,
  Text,
  List,
  UnorderedList,
  OrderedList,
  Anchor,
  Quote,
  Pre,
} from '@/components'

export const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(html)
  .use(rehypeReact, {
    createElement,
    Fragment,
    components: {
      a: Anchor,
      p: Text,
      h1: Heading1,
      h2: Heading2,
      h3: Heading3,
      code: Code,
      li: List,
      ul: UnorderedList,
      ol: OrderedList,
      blockquote: Quote,
      pre: Pre,
    },
  })
