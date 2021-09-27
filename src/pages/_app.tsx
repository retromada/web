import React from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import Wrapper from '@components/Wrapper'
import { SEO } from '@utils/Constants'

import '@styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{SEO.title}</title>
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}

export default MyApp
