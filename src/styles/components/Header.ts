import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 75px;
  max-width: 600px;
  display: table;
`

export const Item = styled.div`
  display: table-cell;
`

export const StyledLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(65, 65, 65, 0.2);
  }
`
