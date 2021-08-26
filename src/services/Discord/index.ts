import { FetcherOptions } from '@interfaces'

import fetcher from '../../utils/fetcher'
import Member from './structures/Member'
import Role from './structures/Role'
import User from './structures/User'

const API_URL = 'https://discord.com/api'
const { DISCORD_TOKEN, GUILD_ID } = process.env

class Discord {
  public static members (guildID: string = GUILD_ID): Promise<Member[]> {
    return this._request(`/guilds/${guildID}/members`, {
      query: { limit: 1000 }
    }).then((members) =>
      members.map((member) => {
        member.user = new User(member.user)
        return new Member(member)
      })
    )
  }

  public static roles (guildID: string = GUILD_ID): Promise<Role[]> {
    return this._request(`/guilds/${guildID}/roles`).then((roles) =>
      roles.map((role) => new Role(role))
    )
  }

  private static _request (
    endpoint,
    {
      query,
      options = { headers: { Authorization: `Bot ${DISCORD_TOKEN}` } }
    }: FetcherOptions = {}
  ) {
    return fetcher(API_URL + endpoint, { query, options })
  }
}

export default Discord
