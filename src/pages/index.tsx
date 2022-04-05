import type { NextPage } from 'next'

// const Home: NextPage = () => {
//   return <div>hoge</div>
// }

const Home: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div
        className="hero min-h-screen"
        // style={{
        //   // 背景
        //   backgroundImage:
        //     'url(https://api.lorem.space/image/fashion?w=1000&h=800);',
        // }}
      >
        {/*背景をぼかしてる */}
        <div className="hero-overlay bg-opacity-60" />
        {/* heroの中身 */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">1e0nhard's Blog</h1>
            <p className="mb-5">
              We learn what doesn't kill you makes me stronger.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/*<div className="flex grow flex-wrap  max-w-full justify-center mt-auto">*/}
      {/*  <div className="text-center space-y-2">*/}
      {/*    <div className="text-5xl ">*/}
      {/*      1E0NHARD96's <span className="text-yellow mx-3 md:mx-0">BLOG</span>*/}
      {/*    </div>*/}
      {/*    <div className="text-2xl">Built with Notion API & Next.js</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default Home
