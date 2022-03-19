import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <title>Hello</title>
        </Head>
        <body className="pt-10 sm:pt-40 bg-bgGoogle dark:bg-bgGoogle font-bold text-white antialiased leading-relaxed sm:leading-relaxed transition-colors text-sm sm:text-base min-h-screen h-[100vh]">
          <div className="md:mx-40 mx-auto flex justify-center">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
