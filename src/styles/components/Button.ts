import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  color: #fff;
  background: #000;
  border: 1px solid #eee;
  cursor: pointer;

  &:hover {
    color: #000;
    background: #fff;
  }

  &:focus {
    outline: none;
  }
`
