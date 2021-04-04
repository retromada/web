import React from 'react'

import Link from 'next/link'

import { Home, Info } from '@styled-icons/material-sharp'

import { Container, Item, StyledLink } from '../styles/components/Header'

export default function Header () {
  const iconSize = 22

  return (
    <Container>
      <Item>
        <Link href='/'>
          <StyledLink>
            <Home size={iconSize} title='Home' />
          </StyledLink>
        </Link>
      </Item>
      <Item>
        <Link href='/about'>
          <StyledLink>
            <Info size={iconSize} title='About' />
          </StyledLink>
        </Link>
      </Item>
    </Container>
  )
}
