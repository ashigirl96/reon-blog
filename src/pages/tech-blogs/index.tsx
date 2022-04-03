import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import {
  fetchTechBlogPageMeta,
  TechBlogPageMeta,
} from '@/lib/notion/fetchTechBlogPageMeta'
import Link from 'next/link'
import { fetchBlock } from '@/lib/notion'

const TechBlogsIndex: NextPage<{ pages: TechBlogPageMeta }> = ({ pages }) => {
  return (
    <div className="max-w-4xl md:max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl">
        <p className="text-primary-content">
          <span className="mr-2">🍆</span>1e0nhardの学習ログ
        </p>
      </h1>
      <div>
        <p>
          はじめまして、れおんです。本ブログでは最近学習したノートや、作ったみた系を文章化して投稿しています。主に、機械学習、Web、哲学などで学びがあったものを殴り書きしていきます。
        </p>
      </div>
      <div className="pt-4 flex flex-col gap-y-4">
        {pages.map(({ pageId, icon, date, name, categories, text }) => {
          return (
            <Link href={`/tech-blogs/${pageId}`}>
              <a>
                <div className="flex flex-col gap-y-2 bg-error p-6 bg-base-300 shadow-xl hover:shadow-2xl rounded-box">
                  <div className="text-2xl text-primary-content flex justify-start items-center">
                    <span className="mr-4 rounded-md text-3xl">{icon}</span>
                    {name}
                  </div>
                  <div>
                    <p>{text}</p>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="badge badge-ghost">{date}</div>
                    {categories.map((category) => (
                      <div className="badge badge-info">{category}</div>
                    ))}
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
