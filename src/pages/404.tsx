import React from 'react'

import Head from 'next/head'

import Button from '../components/Button'

const NotFound: React.FC = () => {
  const message = '??? ?????'

  return (
    <>
      <Head>
        <title>{message}</title>
      </Head>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl font-bold mb-4">{message}</h1>
        <a href="/">
          <Button>?? ????</Button>
        </a>
      </div>
    </>
  )
}

export default NotFound
