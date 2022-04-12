import { VFC } from 'react'
import classNames from 'classnames'

export const Tabs = {
  Self: 'Self',
  Career: 'Career',
  Skill: 'Skill',
} as const

export type TabType = keyof typeof Tabs

type Props = {
  tabName: string
  currentTab: TabType
  selfTab: TabType
  setCurrentTab: () => void
}
export const Tab: VFC<Props> = ({
  tabName,
  currentTab,
  selfTab,
  setCurrentTab,
}) => {
  return (
    <a
      className={classNames(
        'tab tab-bordered tab-border-3 tab-lg',
        selfTab === currentTab && 'tab-active',
      )}
      onClick={setCurrentTab}
    >
      <div className={classNames(selfTab === currentTab && 'text-primary')}>
        {tabName}
      </div>
    </a>
  )
}
