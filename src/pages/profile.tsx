import type { NextPage } from 'next'
import { Page, Title, Profile } from '@/components'
import { Meta } from '@/constants/meta'

const ProfileIndex: NextPage = () => {
  return (
    <Page
      width={7}
      title={Meta.Profile.Title}
      description={Meta.Profile.Description}
    >
      <Title title="ポートフォリオ的な" icon="😁️" />
      <Profile />
    </Page>
  )
}

export default ProfileIndex
