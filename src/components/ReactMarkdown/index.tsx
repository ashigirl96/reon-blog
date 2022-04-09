import { VFC } from 'react'
import ReactMarkdownOriginal from 'react-markdown'
import {
  Anchor,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  UnorderedList,
  Pre,
} from './internals'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkParse from 'remark-parse'

type Props = { text: string }
export const ReactMarkdown: VFC<Props> = ({ text }) => {
  return (
    <ReactMarkdownOriginal
      remarkPlugins={[remarkParse, remarkMath]}
      rehypePlugins={[rehypeStringify, rehypeKatex]}
      components={{
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        li: List,
        ul: UnorderedList,
        pre: Pre,
        code: Code,
        a: Anchor,
      }}
    >
      {text}
    </ReactMarkdownOriginal>
  )
}
