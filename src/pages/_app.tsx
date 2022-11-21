/* eslint-disable react/no-unknown-property */
import { Roboto } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { PrismicProvider } from '@prismicio/react'
import Link from 'next/link'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../libs/prismic/prismic'

const roboto = Roboto({
  weight: ['400', '700', '900'],
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Header />
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </SessionProvider>
  )
}
