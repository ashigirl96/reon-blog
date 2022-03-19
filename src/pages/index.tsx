import type { NextPage } from 'next'
import { SiteLinks } from '@/components/Links'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SiteLinks />
      <div className="flex grow flex-wrap text-white max-w-full justify-center mt-auto">
        <div className="text-center space-y-2">
          <div className="text-5xl ">
            1E0NHARD96's <span className="text-yellow mx-3 md:mx-0">BLOG</span>
          </div>
          <div className="text-2xl">Built with Notion API & Next.js</div>
        </div>
      </div>
    </div>
  )
}

export default Home
