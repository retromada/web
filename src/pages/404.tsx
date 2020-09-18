import React from 'react'
import Head from 'next/head'

import { Text } from '../styles/pages/404'

const NotFound: React.FC = () => {
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

export default NotFound
