import type { NextPage } from 'next'
import { Page } from '@/components'
import { Meta } from '@/constants/meta'

const Profile: NextPage = () => {
  return (
    <Page
      width={7}
      title={Meta.Profile.Title}
      description={Meta.Profile.Description}
    >
      <div className="flex space-x-8 w-full">
        <div>Profile</div>
      </div>
    </Page>
  )
}

export default Profile
