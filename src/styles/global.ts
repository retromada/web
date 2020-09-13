import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    height: 100%;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: Ebrima
  }
`
