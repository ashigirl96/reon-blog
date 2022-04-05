import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <title>1e0nhard's Blog</title>
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
