import { MarkdownObject, MarkdownText } from './types'

export const markdownrify = (
  objects: MarkdownObject[],
  generation: number,
): string => {
  return objects
    .map((object_) => {
      const parent = _markdownrify(object_, generation)
      const children = markdownrify(object_.children, generation + 1)
      return `${parent}\n${children}`
    })
    .join('')
}

const _markdownrify = (x: MarkdownObject, generation: number = 0) => {
  const text = x.text.map((text) => markdownText(text)).join('')
  console.log(JSON.stringify(text, null, 2))
  const tab = '\t'.repeat(generation)
  const element = (() => {
    switch (x.type) {
      case 'paragraph':
        return `${text}`
      case 'heading_1':
        return `# ${text}`
      case 'heading_2':
        return `## ${text}`
      case 'heading_3':
        return `### ${text}`
      case 'to_do':
        const checked = x.checked ? 'x' : ' '
        return `- [${checked}] ${text}`
      case 'quote':
        return `> ${text}\n`
      case 'bulleted_list_item':
        return `- ${text}`
      case 'numbered_list_item':
        return `1. ${text}`
      case 'code':
        const start = '```' + x.language
        const content = text.split('\n').join('\n' + tab)
        const end = tab + '```'
        return `${start}\n${content}\n${end}`
      default:
        return ''
    }
  })()
  return `${tab}${element}`
}

const markdownText = (x: MarkdownText): string => {
  let content = x.content
  const { bold, italic, strikethrough, underline, code, href, equation } = x
  content = equation ? '$' + equation + '$' : content
  content = bold ? `**${content}**` : content
  content = italic ? `*${content}*` : content
  content = strikethrough ? `~~${content}~~` : content
  content = underline ? `<u>${content}</u>` : content
  content = code ? `\`${content}\`` : content
  content = href ? `[${content}](${href})` : content
  return content
}
