import React from 'react'

import Header from './Header'
import { Container } from '../styles/components/Wrapper'

export default function Wrapper ({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
