import React from 'react'

import { Container } from '../styles/components/Wrapper'
import Header from './Header'

export default function Wrapper ({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
