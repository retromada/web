import { DiscordMemberResponse, DiscordRoleResponse } from '../responses'
import { FetcherOptions } from '../types'
import fetcher from '../utils/fetcher'

const API_URL = 'https://discordapp.com/api'
const { DISCORD_TOKEN, GUILD_ID } = process.env

export default class Discord {
  public static members (
    guildID: string = GUILD_ID
  ): Promise<DiscordMemberResponse[]> {
    return this._request(`/guilds/${guildID}/members`, {
      query: { limit: 1000 }
    })
  }

  public static roles (
    guildID: string = GUILD_ID
  ): Promise<DiscordRoleResponse[]> {
    return this._request(`/guilds/${guildID}/roles`)
  }

  public static _request (
    endpoint: string,
    {
      query,
      options = {
        headers: {
          Authorization: `Bot ${DISCORD_TOKEN}`
        }
      }
    }: FetcherOptions = {}
  ): Promise<any> {
    return fetcher(API_URL + endpoint, { query, options })
  }
}
