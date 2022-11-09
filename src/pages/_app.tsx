/* eslint-disable react/no-unknown-property */
import { Roboto } from '@next/font/google'

import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

const roboto = Roboto({
  weight: ['400', '700', '900'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
