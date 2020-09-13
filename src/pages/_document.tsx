import React from 'react'
import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document<DocumentProps> {
  render (): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
