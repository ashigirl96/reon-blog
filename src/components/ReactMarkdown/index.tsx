import ReactMarkdownOriginal from 'react-markdown'
import {
  Anchor,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  UnorderedList,
} from '@/components'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

import { FC, VFC } from 'react'
import remarkParse from 'remark-parse'

export const Div: FC = ({ children }) => {
  // @ts-expect-error
  if (children[0].split('\n').length > 1) {
    return <>{children}</>
  }
  return <code className="text-primary">{children}</code>
}

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
        // blockquote: Quote,
        ul: UnorderedList,
        pre: Code,
        code: Div,
        a: Anchor,
      }}
    >
      {text}
    </ReactMarkdownOriginal>
  )
}
