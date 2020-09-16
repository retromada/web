import { NextApiRequest, NextApiResponse } from 'next'

import Discord from '../../services/Discord'

let cachedTeam: [] = null

async function fetchTeamDevelopers (guildID = process.env.GUILD_ID) {
  if (cachedTeam) {
    return cachedTeam
  }

  const roles = await Discord.request(`/guilds/${guildID}/roles`, {})
  const members = await Discord.request(`/guilds/${guildID}/members`, { query: { limit: 1000 } })

  const team = members
    .filter(({ roles }) => roles.includes(process.env.COMMANDER_ROLE_ID))
    .map((member) => {
      const { user: { id, username, discriminator, avatar } } = member

      return {
        id,
        username,
        discriminator,
        avatar,
        roles: member.roles
          .filter((roleID) => process.env.OPERATOR_ROLE_ID !== roleID)
          .map((roleID) => roles.filter(({ id }) => id === roleID))
          .flat()
          .map(({ id, name }) => ({ id, name }))
      }
    })

    cachedTeam = team

    return team
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const team = await fetchTeamDevelopers()

    return response.status(200).json(team)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
}
