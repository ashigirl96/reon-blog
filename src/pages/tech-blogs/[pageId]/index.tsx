import type { GetStaticPaths, GetStaticProps } from 'next'
import { processor } from '@/lib/remark/notion2component'
import {
  constructMarkdownObject,
  fetchTechBlogPage,
  markdownrify,
} from '@/lib/notion'
import { VFC } from 'react'
import { ParsedUrlQuery } from 'node:querystring'
import { fetchTechBlogPageMeta } from '@/lib/notion/fetchTechBlogPageMeta'
import { DateTag, CategoryTag } from '@/components/Tag'

interface Params extends ParsedUrlQuery {
  pageId: string
}

type HeadProps = {
  icon: string
  title: string
  date: string
  categories: string[]
}
export const Header: VFC<HeadProps> = ({ icon, date, title, categories }) => {
  return (
    <div>
      <div className="space-y-2 flex flex-col items-center">
        <div className="text-3xl">{icon}</div>
        <div className="text-white font-bold text-2xl">{title}</div>
        <div className="flex space-x-2">
          <DateTag date={date} />
          {categories.map((category) => (
            <CategoryTag category={category} />
          ))}
          <div>10 min read</div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  mdText: string
  icon: string
  date: string
  name: string
  categories: string[]
}

const TechBlogsShow: VFC<Props> = ({
  mdText,
  icon,
  date,
  name,
  categories,
}) => {
  return (
    <div className="flex max-w-6xl mx-auto">
      <div className="flex grow justify-center flex-col space-y-10">
        <Header icon={icon} title={name} date={date} categories={categories} />
        <div className="flex flex-col mx-2 xs:mx-10 space-y-2">
          {processor.processSync(mdText).result}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const mdObj = await constructMarkdownObject(params!.pageId)
  const { icon, date, name, categories } = await fetchTechBlogPage(
    params!.pageId,
  )
  const mdText = markdownrify(mdObj, 0)
  console.log(mdText)
  return {
    props: {
      mdText,
      icon,
      date,
      name,
      categories,
    },
  }
}

// @ts-ignore
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const params = await fetchTechBlogPageMeta()
  const paths = params.map((params_) => ({ params: params_ }))
  return { paths, fallback: false }
}

export default TechBlogsShow
