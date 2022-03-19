import type { NextPage } from 'next'
import { SiteLinks } from '@/components'

const Profile: NextPage = () => {
  return (
    <div className="flex space-x-8 w-full">
      <SiteLinks />
      <div>Profile</div>
    </div>
  )
}

export default Profile
