import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'focus-visible/dist/focus-visible' // キーボード以外のフォーカスを除外にするため
import { DataThemeProvider } from '@/components/DataTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataThemeProvider color="dracula">
      <Component {...pageProps} />
    </DataThemeProvider>
  )
}

export default MyApp
