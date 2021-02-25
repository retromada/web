import React from 'react'

import Link from 'next/link'

import { Container, Item, StyledLink } from '../styles/components/Header'

export default function Header () {
  return (
    <Container>
      <Item>
        <Link href='/'>
          <StyledLink>Home</StyledLink>
        </Link>
      </Item>
      <Item>
        <Link href='/about'>
          <StyledLink>About</StyledLink>
        </Link>
      </Item>
    </Container>
  )
}
