import type { NextPage } from 'next'
import { SiteLinks } from '@/components'
import { DateTag, Tag } from '@/components/Tag'
import {
  fetchTechBlogPageMeta,
  TechBlogPageMeta,
} from '@/lib/notion/fetchTechBlogPageMeta'
import Link from 'next/link'
import { GetStaticProps } from 'next'

const TechBlogsIndex: NextPage<{ pages: TechBlogPageMeta }> = ({ pages }) => {
  return (
    <div className="flex space-x-0 md:space-x-8 flex-col md:flex-row">
      <SiteLinks />
      <div className="grid gap-x-8 gap-y-8 grid-cols-1 xl:grid-cols-2 text-white justify-center md:justify-start w-full">
        {pages.map(({ pageId, icon, date, name, categories }) => {
          return (
            <Link href={`/tech-blogs/${pageId}`}>
              <a className="">
                <div className="flex space-x-4 items-center mx-4 md:mx-0 rounded-md p-2 hover:bg-yellow hover:text-bgGoogle min-w-full">
                  <div className="text-5xl">{icon}</div>
                  <div className="space-y-2">
                    <div className="text-xl">{name}</div>
                    <div className="flex space-x-2">
                      <DateTag date={date} />
                      {categories.map((category) => (
                        <Tag name={category} />
                      ))}
                      <div className="text-sm">10 min read</div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = await fetchTechBlogPageMeta()
  return {
    props: {
      pages,
    },
  }
}

export default TechBlogsIndex
