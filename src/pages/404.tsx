import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Button from '../components/Button'
import { Container, Text } from '../styles/pages/404'

export default function NotFound (): JSX.Element {
  const message = '??? ?????'

  return (
    <>
      <Head>
        <title>{message}</title>
      </Head>
      <Container>
        <Text>{message}</Text>
        <Link href='/'>
          <Button>?? ????</Button>
        </Link>
      </Container>
    </>
  )
}
