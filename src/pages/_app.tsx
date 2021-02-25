import React from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import Wrapper from '../components/Wrapper'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { SEO } from '../utils/Constants'

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{SEO.title}</title>
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  )
}
