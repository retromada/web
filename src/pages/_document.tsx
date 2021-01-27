import React from 'react'

import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

import { SEO } from '../utils/Constants'

export default class MyDocument extends Document<DocumentProps> {
  render (): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <meta name="author" content={SEO.author} />
          <meta name="description" content={SEO.description} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={SEO.title} />
          <meta property="og:description" content={SEO.description} />
          <meta property="og:locale" content="en_US" />
          <meta property="article:author" content={SEO.author} />
          <meta property="theme-color" content="#ff0000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
