import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Container = styled.div`
  width: 100vw;
  max-width: 600px;
  max-height: 800px;
  position: relative;
  cursor: default;
  user-select: none;

  img {
    width: 100vw;
    max-width: 600px;
  }
`

export const Team = styled.div`
  width: 100vw;
  max-width: 175px;
  position: absolute;
  top: 29%;
  left: 6%;

  p {
    margin: 1px 0;
    font-size: 14px;
  }

  p a {
    color: #fff;
    text-decoration: none;
    margin-left: 4px;
  }
`
