import type { NextPage } from 'next'
import { Page } from '@/components'

const Home: NextPage = () => {
  return (
    <Page
      width={7}
      noMargin
      footerMargin={false}
      title="1e0nhard's Blog"
      description="top"
    >
      <div className="hero min-h-[74vh]">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">1e0nhard's Blog</h1>
          <p className="mb-5">
            We learn what doesn't kill us makes us stronger.
          </p>
        </div>
      </div>
      {/*<div className="flex flex-col md:flex-row flex-grow">*/}
      {/*  /!*<div className="hero max-h-screen">*!/*/}
      {/*  /!*  /!*背景をぼかしてる *!/*!/*/}
      {/*  /!*  <div className="hero-overlay bg-opacity-80" />*!/*/}
      {/*  /!*  /!* heroの中身 *!/*!/*/}
      {/*  /!*  <div className="hero-content text-center text-neutral-content">*!/*/}
      {/*  /!*    <div className="max-w-md">*!/*/}
      {/*  /!*      <h1 className="mb-5 text-5xl font-bold">1e0nhard's Blog</h1>*!/*/}
      {/*  /!*      <p className="mb-5">*!/*/}
      {/*  /!*        We learn what doesn't kill us makes us stronger.*!/*/}
      {/*  /!*      </p>*!/*/}
      {/*  /!*    </div>*!/*/}
      {/*  /!*  </div>*!/*/}
      {/*  /!*</div>*!/*/}
      {/*</div>*/}
    </Page>
  )
}

export default Home
