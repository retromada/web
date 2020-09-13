import styled from 'styled-components'

const Wrapper = styled.section`
  position: absolute;
  margin: 230px 35px 0 30px;
  cursor: default;
  user-select: none;

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 4px;
  }
`

const Team = styled.div`
  width: 175px;
  height: 100px;

  p {
    margin: 0;
    font-size: 14px;
  }
`

export {
  Wrapper,
  Team
}
