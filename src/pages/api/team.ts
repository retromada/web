import { NextApiRequest, NextApiResponse } from 'next'

import Discord from '../../services/discord'

let cachedTeam: [] = null

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    if (cachedTeam) {
      return response.status(200).json(cachedTeam)
    }

    const guildID = process.env.GUILD_ID

    const _roles = await Discord.request(`/guilds/${guildID}/roles`, {})
    const members = await Discord.request(`/guilds/${guildID}/members`, { query: { limit: 1000 } })

    const team = members
      .filter(({ roles}) => roles.includes(process.env.COMMANDER_ROLE_ID))
      .map(({ user, roles }) => ({
        id: user.id,
        username: user.username,
        discriminator: user.discriminator,
        avatar: user.avatar,
        roles: roles
          .filter((roleID) => ![process.env.OPERATOR_ROLE_ID].includes(roleID))
          .map((roleID) => _roles.filter(({ id }) => id === roleID))
          .flat()
          .map(({ id, name }) => ({ id, name }))
      }))

      cachedTeam = team

      return response.status(200).json(team)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
}
