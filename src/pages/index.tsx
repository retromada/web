import React from 'react'

import wide from '../assets/svg/wide.svg'
import { useFetch } from '../hooks/useFetch'
import { DevelopersTeamResponse } from '../responses'
import { Wrapper, Container, Team } from '../styles/pages/Main'

export default function Home (): JSX.Element {
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
