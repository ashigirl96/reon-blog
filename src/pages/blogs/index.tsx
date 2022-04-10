import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import {
  fetchBlock,
  fetchTechBlogPageMeta,
  TechBlogPageMeta,
} from '@/lib/notion'
import { CategoryTag, DateTag, Description, Page, Title } from '@/components'
import { Meta } from '@/constants/meta'

const TechBlogsIndex: NextPage<{ pages: TechBlogPageMeta }> = ({ pages }) => {
  return (
    <Page
      width={4}
      title={Meta.Blogs.Title}
      description={Meta.Blogs.Description}
    >
      <Title title="ゆるくわかったやつ" icon="💻" />
      <Description>
        本ブログでは最近学習したノートや、作ったみた系を文章化してゆるく投稿しています。主に、機械学習、Web、哲学などで学びがあったものを殴り書きしていきます。
      </Description>
      <div className="pt-4 flex flex-col gap-y-8">
        {pages.map(({ pageId, icon, date, name, categories, text }) => {
          return (
            <Link href={`/blogs/${pageId}`}>
              <a>
                <div className="flex flex-col gap-y-2 bg-error p-6 bg-base-300 hover:shadow-xl rounded-box">
                  <div className="text-2xl  flex justify-start items-center">
                    <span className="mr-4 rounded-md text-3xl">{icon}</span>
                    {name}
                  </div>
                  <div>
                    <p>{text}</p>
                  </div>
                  <div className="flex gap-x-4">
                    <DateTag date={date} />
                    {categories.map((category) => (
                      <CategoryTag category={category} />
                    ))}
                  </div>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const _pages = await fetchTechBlogPageMeta()
  const pages = await Promise.all(
    _pages.map(async (page) => {
      const blocks = await fetchBlock(page.pageId || '')
      const text =
        blocks
          .map((block) => {
            // @ts-expect-error
            const type = block.type
            return (
              // @ts-expect-error
              block[type].text
                // @ts-expect-error
                .map((x) => x.plain_text)
                .flat()
            )
          })
          .join(' ')
          .slice(0, 120) + '...'
      return {
        ...page,
        text,
      }
    }),
  )
  return {
    props: {
      pages,
    },
  }
}

export default TechBlogsIndex
