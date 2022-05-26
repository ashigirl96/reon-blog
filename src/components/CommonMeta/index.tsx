import Head from 'next/head'
import { VFC } from 'react'

type Props = {
  title: string
  description: string
}
export const CommonMeta: VFC<Props> = ({
  title = "Reon's blog",
  description = 'Reon Nishimuraのブログ',
}) => {
  return (
    <Head>
      <title>{title}</title>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="theme-color" content="#ffffff" />

      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${process.env.SITE_URL}/ogp_large.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="google-site-verification"
        content="Ah2fPp6nmOX3vilQlTGtEiSUKGcl-hk3W9Vv8yPQyj8"
      />
    </Head>
  )
}
