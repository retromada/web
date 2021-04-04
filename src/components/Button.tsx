import React from 'react'

import { StyledButton } from '../styles/components/Button'

export default function Button ({ children, ...rest }) {
  return (
    <StyledButton type='button' {...rest}>
      {children}
    </StyledButton>
  )
}
