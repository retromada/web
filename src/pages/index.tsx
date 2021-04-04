import React from 'react'

import Wide from '../assets/svg/wide.svg'
import { useFetch } from '../hooks/useFetch'
import { TeamDeveloperResponse } from '../responses'
import { Container, Team } from '../styles/pages/Home'

export default function Home (): JSX.Element {
  const { data } = useFetch<TeamDeveloperResponse[]>('/api/team')

  return (
    <Container>
      <Team>
        {data?.map((dev) => (
          <p key={dev.id}>
            <strong
              style={{
                color: '#' + dev.department.color.toString(16).padStart(6, 'f')
              }}
              title={dev.department.name}
            >
              {dev.department.acronym}
            </strong>
            <a>{dev.username}</a>
          </p>
        ))}
      </Team>
      <Wide />
    </Container>
  )
}
