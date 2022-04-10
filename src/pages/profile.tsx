import type { NextPage } from 'next'
import { Page } from '@/components'
import { Meta } from '@/constants/meta'
import { Profile } from '@/components/Profile'

const ProfileIndex: NextPage = () => {
  return (
    <Page
      width={7}
      title={Meta.Profile.Title}
      description={Meta.Profile.Description}
    >
      <Profile />
    </Page>
  )
}

export default ProfileIndex
