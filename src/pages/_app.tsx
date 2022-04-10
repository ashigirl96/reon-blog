import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'focus-visible/dist/focus-visible' // キーボード以外のフォーカスを除外にするため
import { DataThemeProvider } from '@/components/DataTheme'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DataThemeProvider color="dracula">
        <Component {...pageProps} />
      </DataThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
