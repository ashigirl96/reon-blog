import { useState, VFC } from 'react'
import { Tabs, Tab, SelfIntroduce, Career, Skills } from './internals'
import type { TabType } from './internals'

export const Profile: VFC = () => {
  const [tab, setTab] = useState<TabType>(Tabs.Self)
  return (
    <div className="space-y-16">
      <div className="tabs flex justify-center">
        <Tab
          tabName="自己紹介"
          currentTab={tab}
          selfTab={Tabs.Self}
          setCurrentTab={() => setTab(Tabs.Self)}
        />
        <Tab
          tabName="経歴"
          currentTab={tab}
          selfTab={Tabs.Career}
          setCurrentTab={() => setTab(Tabs.Career)}
        />
        <Tab
          tabName="スキルセット"
          currentTab={tab}
          selfTab={Tabs.Skill}
          setCurrentTab={() => setTab(Tabs.Skill)}
        />
      </div>

      {tab === Tabs.Self && <SelfIntroduce />}
      {tab === Tabs.Career && <Career />}
      {tab === Tabs.Skill && <Skills />}
    </div>
  )
}
