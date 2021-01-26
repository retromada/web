import fetcher from '../utils/fetcher'
import { FetcherOptions } from '../types'

const API_URL = 'https://discordapp.com/api'
const { DISCORD_TOKEN, GUILD_ID } = process.env

export default class Discord {
  public static roles (guildID: string = GUILD_ID) {
    return this._request(`/guilds/${guildID}/roles`)
  }

  public static members (guildID: string = GUILD_ID) {
    return this._request(`/guilds/${guildID}/members`, { query: { limit: 1000 } })
  }

  public static _request (endpoint: string, {
    query,
    options = {
      headers: {
        Authorization: `Bot ${DISCORD_TOKEN}`
      }
    }
  }: FetcherOptions = {}) {
    return fetcher(API_URL + endpoint, { query, options })
  }
}
