import type { NextPage } from 'next'
import { Page } from '@/components'

const Home: NextPage = () => {
  return (
    <Page
      width={7}
      noMargin
      footerMargin={false}
      title="Reon's Blog"
      description="top"
    >
      <div className="hero min-h-[74vh]">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Reon's Blog</h1>
          <p className="mb-5">
            We learn what doesn't kill us makes us stronger.
          </p>
        </div>
      </div>
    </Page>
  )
}

export default Home
