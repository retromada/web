import React from 'react'
import { Wrapper, Team } from '../styles/pages/Main'

const Main: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Team>
          <p>
            <strong>DSE</strong>
            <a
              href="https://github.com/tenasatupitsyn"
              target="_blank"
              rel="noreferrer"
            >
              NxxTp0pyN
            </a>
          </p>
        </Team>
      </Wrapper>
      <img src="/wide.png" />
    </>
  )
}

export default Main
