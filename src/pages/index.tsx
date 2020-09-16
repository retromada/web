import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { Wrapper, Team } from '../styles/pages/Main'

const Main: React.FC = () => {
  const { data } = useFetch('/api/team')

  return (
    <>
      <Wrapper>
        <Team>
          {data?.map((dev) => (
            <p key={dev.id}>
              <strong>XXX</strong>
              <a>{dev.username}</a>
            </p>
          ))}
        </Team>
      </Wrapper>
      <img src="/wide.png" />
    </>
  )
}

export default Main
