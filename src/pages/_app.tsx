import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'focus-visible/dist/focus-visible' // キーボード以外のフォーカスを除外にするため

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
