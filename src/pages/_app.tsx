import { ContadorContext } from '@/layers/data/context/context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ContadorContext><Component {...pageProps} /></ContadorContext>
}
