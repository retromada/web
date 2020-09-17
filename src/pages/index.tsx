import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { Wrapper, Team } from '../styles/pages/Main'
import { DevelopersTeamResponse } from '../responses'

const Main: React.FC = () => {
  const { data } = useFetch<DevelopersTeamResponse[]>('/api/team')

  return (
    <>
      <Wrapper>
        <Team>
          {data?.map((dev) => (
            <p key={dev.id}>
              <strong title={dev.department.name}>{dev.department.acronym}</strong>
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
