import { VFC, FC } from 'react'

const List: FC<{ tip: string }> = ({ tip, children }) => {
  return (
    <li className="m-0">
      <div className="tooltip" data-tip={tip}>
        {children}
      </div>
    </li>
  )
}

export const SelfIntroduce: VFC = () => {
  return (
    <div className="flex justify-center gap-x-4 flex-col xl:flex-row gap-y-4">
      <div className="flex flex-col items-center gap-y-4">
        <div className="avatar">
          <div className="w-64 rounded-3xl">
            <img src="https://travel-gallery.s3.ap-northeast-1.amazonaws.com/REON.jpg" />
          </div>
        </div>
        <div className="font-bold">名古屋に一人で旅行した時の自撮り写真</div>
      </div>
      <div className="divider lg:divider-horizontal" />
      <article className="px-4 xl:px-0 xl:mx-0 prose max-w-xl">
        <p>
          西村礼恩(Reon
          Nishimura)と申します。1996年生まれの25歳(2022年現在)です。星座は{' '}
          <strong>蟹座</strong> です。星座占いはしません。
          <h3>仕事</h3>
          <p>
            現在は株式会社メドレーに所属しており、オンライン診療システムや予約システムの開発をしています。弊社では、なにかの技術にこだわるより問題解決することに重視しているので、インフラからフロントエンドまでの開発に触る機会があります。
            とはいえ、特にフロントエンドの技術に興味を持っています。あるフロントエンドフレームワークから別のフレームワークに移行する必要に迫られ、
            一任されプロジェクトを推進できたのが大きな経験になりました。
          </p>
          <h3>趣味・好きなもの</h3>
          <p>ホバーするとそれぞれの好きなものの説明が見れます。</p>
          <ul>
            <List tip="Galleryページで、散歩した時に撮った写真が見れます">
              <div className="font-bold">週末の散歩</div>
            </List>
            <List tip="小学６年生から弾いているが、あまり上達はしてない">
              アコースティックギターを弾く
            </List>
            <List tip="十八三島でコンボしてる時が幸せ">
              大乱闘スマッシュブラザーズSPECIAL
            </List>
            <List tip="毎朝、出社時に購入する。半分ぐらい残す。">
              モンスターエナジーULTRA
            </List>
          </ul>
        </p>
      </article>
    </div>
  )
}
