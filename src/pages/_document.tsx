import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Footer, Nav } from '@/components'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <title>1e0nhard's Blog</title>
        </Head>
        <body>
          <div className="min-h-screen">
            <Nav />
            <div className="mx-1 md:mx-10">
              <Main />
              <NextScript />
            </div>
          </div>
        </body>
        <Footer />
        {/*<div className="drawer">*/}
        {/*  <input id="my-drawer" type="checkbox" className="drawer-toggle" />*/}
        {/*  <div className="drawer-content">*/}
        {/*    <label*/}
        {/*      htmlFor="my-drawer"*/}
        {/*      className="btn btn-primary drawer-button"*/}
        {/*    >*/}
        {/*      Open drawer*/}
        {/*    </label>*/}
        {/*  </div>*/}
        {/*  <div className="drawer-side">*/}
        {/*    <label htmlFor="my-drawer" className="drawer-overlay" />*/}
        {/*    <ul className="menu p-4 overflow-y-auto w-60 md:w-80 bg-base-100 text-base-content">*/}
        {/*      <li>*/}
        {/*        <a>Sidebar Item 1</a>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <a>Sidebar Item 2</a>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </Html>
    )
  }
}

export default MyDocument
