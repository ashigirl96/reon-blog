import { MarkdownObject, NotionObject, NotionType } from './types'

export const blockToMarkdownObject = (
  notionType: NotionType,
  notionObject: NotionObject,
  notionChildren: MarkdownObject[],
): MarkdownObject => {
  const { language, checked, text: _text } = notionObject[notionType]
  if (_text === undefined) {
    return {
      type: 'paragraph',
      text: [],
      children: notionChildren,
    }
  }
  const text = _text.map((text) => ({
    content: text.plain_text,
    href: text.href,
    bold: text.annotations.bold,
    italic: text.annotations.italic,
    strikethrough: text.annotations.strikethrough,
    underline: text.annotations.underline,
    code: text.annotations.code,
    equation: text?.equation?.expression,
  }))
  switch (notionType) {
    case 'equation':
      return {
        type: 'equation',
        text,
        children: notionChildren,
      }
    case 'paragraph':
      return {
        type: 'paragraph',
        text,
        children: notionChildren,
      }
    case 'heading_1':
      return {
        type: 'heading_1',
        text,
        children: notionChildren,
      }
    case 'heading_2':
      return {
        type: 'heading_2',
        text,
        children: notionChildren,
      }
    case 'heading_3':
      return {
        type: 'heading_3',
        text,
        children: notionChildren,
      }
    case 'quote':
      return {
        type: 'quote',
        text,
        children: notionChildren,
      }
    case 'bulleted_list_item':
      return {
        type: 'bulleted_list_item',
        text,
        children: notionChildren,
      }
    case 'numbered_list_item':
      return {
        type: 'numbered_list_item',
        text,
        children: notionChildren,
      }
    case 'code':
      return {
        type: 'code',
        language,
        text,
        children: notionChildren,
      }
    case 'to_do':
      return {
        type: 'to_do',
        checked,
        text,
        children: notionChildren,
      }
    default:
      return {
        type: 'paragraph',
        text: [],
        children: notionChildren,
      }
  }
}
