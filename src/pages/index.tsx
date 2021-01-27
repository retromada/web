import React from 'react'

import wide from '../assets/wide.svg'
import { useFetch } from '../hooks/useFetch'
import { DevelopersTeamResponse } from '../responses'
import { Wrapper, Container, Team } from '../styles/pages/Main'

const Main: React.FC = () => {
  const { data } = useFetch<DevelopersTeamResponse[]>('/api/team')

  return (
    <Wrapper>
      <Container>
        <Team>
          {data?.map((dev) => (
            <p key={dev.id}>
              <strong
                style={{ color: dev.department.hexColor }}
                title={dev.department.name}
              >
                {dev.department.acronym}
              </strong>
              <a>{dev.username}</a>
            </p>
          ))}
        </Team>
      </Container>
      <img src={wide} />
    </Wrapper>
  )
}

export default Main
