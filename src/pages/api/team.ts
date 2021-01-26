import { NextApiRequest, NextApiResponse } from 'next'

import { DevelopersTeamResponse } from '../../responses'
import Discord from '../../services/Discord'

const { COMMANDER_ROLE_ID, OPERATOR_ROLE_ID } = process.env

let cachedTeam: [] = null

async function fetchDevelopersTeam (): Promise<DevelopersTeamResponse[]> {
  if (cachedTeam) {
    return cachedTeam
  }

  const roles = await Discord.roles()
  const members = await Discord.members()

  const team = members
    .filter(({ roles }) => roles.includes(COMMANDER_ROLE_ID))
    .map((member) => {
      const {
        user: { id, username, discriminator, avatar }
      } = member
      const memberRoles = member.roles
        .filter((roleID) => roleID !== OPERATOR_ROLE_ID)
        .map((roleID) => roles.filter(({ id }) => id === roleID))
        .flat()
      const departmentRole = memberRoles.find(
        ({ position }) =>
          position === Math.max(...memberRoles.map(({ position }) => position))
      )

      return {
        id,
        username,
        discriminator,
        avatar,
        department: {
          acronym: departmentRole.name.replace(/[a-z]+[^]/g, ''),
          name: departmentRole.name,
          hexColor: `#${departmentRole.color.toString(16).padStart(6, 'f')}`
        },
        roles: memberRoles.map(({ id, name }) => ({ id, name }))
      }
    })

  cachedTeam = team

  return team
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const team = await fetchDevelopersTeam()

    return response.status(200).json(team)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
}
