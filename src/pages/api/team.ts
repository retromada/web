import { NextApiRequest, NextApiResponse } from 'next'

import { DevelopersTeamResponse } from '../../responses'
import Discord from '../../services/Discord'

let cachedTeam: [] = null

async function fetchDevelopersTeam (guildID = process.env.GUILD_ID): Promise<DevelopersTeamResponse[]> {
  if (cachedTeam) {
    return cachedTeam
  }

  const roles = await Discord.request(`/guilds/${guildID}/roles`, {})
  const members = await Discord.request(`/guilds/${guildID}/members`, {
    query: { limit: 1000 }
  })

  const team = members
    .filter(({ roles }) => roles.includes(process.env.COMMANDER_ROLE_ID))
    .map((member) => {
      const {
        user: { id, username, discriminator, avatar }
      } = member
      const _roles = member.roles
        .filter((roleID) => process.env.OPERATOR_ROLE_ID !== roleID)
        .map((roleID) => roles.filter(({ id }) => id === roleID))
        .flat()
      const departmentRole = _roles.find(
        ({ position }) =>
          position === Math.max(..._roles.map(({ position }) => position))
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
        roles: _roles.map(({ id, name }) => ({ id, name }))
      }
    })

  cachedTeam = team

  return team
}

export default async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  try {
    const team = await fetchDevelopersTeam()

    return response.status(200).json(team)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
}
