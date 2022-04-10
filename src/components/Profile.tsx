import { VFC } from 'react'

export const Profile: VFC = () => {
  return (
    <div className="tabs">
      <a className="tab tab-bordered tab-border-3 tab-lg">自己紹介</a>
      <a className="tab tab-bordered tab-border-3 tab-lg tab-active">
        学歴・職歴
      </a>
      <a className="tab tab-bordered tab-border-3 tab-lg">スキルセット</a>
    </div>
  )
}
