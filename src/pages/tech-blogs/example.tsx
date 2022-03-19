import type { NextPage } from 'next'
import { SiteLinks } from '@/components'
import { TechBlogPageMeta } from '@/lib/notion/fetchTechBlogPageMeta'
import { DateTag, Tag } from '@/components/Tag'
import { VFC } from 'react'
import { Heading1 } from '@/components/Heading1'
import { Text } from '@/components/Text'
import { Heading2 } from '@/components/Heading2'
import { Heading3 } from '@/components/Heading3'

type HeadProps = {
  icon: string
  title: string
  date: string
  categories: string[]
}
export const Head: VFC<HeadProps> = ({ icon, date, title, categories }) => {
  return (
    <div className="">
      <div className="space-y-2 flex flex-col items-center">
        <div className="text-3xl">{icon}</div>
        <div className="text-white font-bold text-2xl">{title}</div>
        <div className="flex space-x-2">
          <DateTag date={date} />
          {categories.map((category) => (
            <Tag name={category} />
          ))}
          <div>10 min read</div>
        </div>
      </div>
    </div>
  )
}

const TechBlogsExample: NextPage<{ pages: TechBlogPageMeta }> = () => {
  return (
    <div className="flex space-x-0 md:space-x-8 flex-col md:flex-row">
      <SiteLinks />
      <div className="flex grow justify-center flex-col space-y-10">
        <Head
          icon="😅"
          title="[EMアルゴリズム使った強化学習] MPOとV-MPOについて"
          date="2021-10-21"
          categories={['強化学習']}
        />
        <div className="flex flex-col mx-10">
          <Heading1>はじめに</Heading1>
          <Text>
            今回話したいネタが、一年前に読んでもピンと来なかったMaximum a
            Posteriori Policy Optimization
            (MPO)とそのOn-Policy版のV-MPOです。私は数学苦手なので、踏み込んだ話よりこれらの論文を読んで「面白いな」と思ったポイントを共有していきたいです。（間違っていれば教えて下さい）
          </Text>
          <Heading1>MPOとV-MPO</Heading1>
          <Heading2>Soft Actor Critic と (V-)MPOは兄弟？</Heading2>
          <Text>
            Soft Actor CriticとMPOはどちらもControl as
            Inferenceから発展したアルゴリズムです。[DL輪読会]Control as
            Inferenceと発展 がとても参考になるのでぜひ読んでみてください。
            Control as
            Inferenceの前に基礎となるMDPから単純なOn-Policy方策勾配アルゴリズムの変遷について話したいと思います。
          </Text>
          <Heading3>〇〇をする場合</Heading3>
          <Text>
            Soft Actor CriticとMPOはどちらもControl as
            Inferenceから発展したアルゴリズムです。[DL輪読会]Control as
            Inferenceと発展 がとても参考になるのでぜひ読んでみてください。
            Control as
            Inferenceの前に基礎となるMDPから単純なOn-Policy方策勾配アルゴリズムの変遷について話したいと思います。
          </Text>

          <ul
            role="list"
            className="marker:text-sky-400 list-disc pl-5 text-white"
          >
            <li>5 cups chopped Porcini mushrooms</li>
          </ul>
          <ul
            role="list"
            className="marker:text-sky-400 list-disc pl-5 text-white"
          >
            <li>5 cups chopped Porcini mushrooms</li>
          </ul>
          <ul
            role="list"
            className="marker:text-sky-400 list-disc pl-5 text-white"
          >
            <ul
              role="list"
              className="marker:text-sky-400 list-disc pl-5 text-white"
            >
              <li>5 cups chopped Porcini mushrooms</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TechBlogsExample
