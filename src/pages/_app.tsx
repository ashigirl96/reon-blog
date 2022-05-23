import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'focus-visible/dist/focus-visible' // キーボード以外のフォーカスを除外にするため
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
