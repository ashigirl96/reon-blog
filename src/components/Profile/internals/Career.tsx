import Link from 'next/link'
import { FC, VFC } from 'react'

const Year: FC = ({ children }) => {
  return <div className="badge badge-ghost mr-2 rounded-md">{children}年</div>
}

const List: FC = ({ children }) => {
  return <li className="align-middle">{children}</li>
}

export const Career: VFC = () => {
  return (
    <div className="mx-auto max-w-[30rem]">
      <div className="flex justify-start">
        <article className="prose ml-4">
          <h3>エンジニアになる前</h3>
          <ul>
            <List>
              <Year>1996</Year> 香港で爆誕
            </List>
            <List>
              <Year>2005</Year>
              日本に帰国
            </List>
            <List>
              <Year>2001</Year>
              中学でプログラマに憧れ、エンジニアの道に進む
            </List>
          </ul>
          <h3>エンジニアになった後</h3>
          <ul>
            <List>
              <Year>2012</Year> 大阪府立大学工業高等専門学校に入学
              <ul>
                <List>
                  <Year>2013</Year>
                  <Link href="https://www.security-camp.or.jp/camp/reon-nishimura.html">
                    <a target="_blank" rel="noopener noreferrer">
                      セキュリティ・キャンプに参加
                    </a>
                  </Link>
                </List>
                <List>
                  <Year>2014</Year>
                  セキュリティ・キャンプ チューターとして参加
                </List>
                <List>
                  <Year>2014</Year>
                  <Link href="https://www.gsic.titech.ac.jp/supercon/main/attwiki/index.php?SupercomputingContest2014">
                    <a target="_blank" rel="noopener noreferrer">
                      SuperCon 20thで優勝
                    </a>
                  </Link>
                </List>
              </ul>
            </List>

            <List>
              <Year>2015</Year> 筑波大学に入学
              <ul>
                <List>
                  <Year>2018</Year>
                  櫻井研で機械学習・強化学習を研究
                </List>
                <List>
                  <Year>2018</Year>
                  <Link href="https://scholar.google.co.jp/citations?user=B8NrIOcAAAAJ&hl=ja&oi=ao">
                    <a target="_blank" rel="noopener noreferrer">
                      機械学習手法を使ってマルウェア検知をする論文を書く（手伝いをする）
                    </a>
                  </Link>
                </List>
              </ul>
            </List>

            <List>
              <Year>2019</Year> 株式会社メドレーに入社
              <div className="ml-4 badge badge-primary badge-outline">Now</div>
            </List>
          </ul>
        </article>
      </div>
    </div>
  )
}
