import Head from 'next/head'
import { VFC } from 'react'

type Props = {
  title: string
  description: string
}
export const CommonMeta: VFC<Props> = ({
  title = "1e0nhard's blog",
  description = 'Reon Nishimuraのブログ',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${process.env.SITE_URL}/ogp_large.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
