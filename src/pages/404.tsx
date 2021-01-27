import React from 'react'

import Head from 'next/head'

import { Text } from '../styles/pages/404'

export default function NotFound (): JSX.Element {
  const message = 'Not found'

  return (
    <>
      <Head>
        <title>{message}</title>
      </Head>
      <Text>{message}</Text>
    </>
  )
}
