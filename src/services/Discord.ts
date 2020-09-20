import fetcher from '../utils/fetcher'
import { FetcherOptions } from '../types'

const API_URL = 'https://discordapp.com/api'

export default class Discord {
  public static request (endpoint: string, {
    query,
    options = {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`
      }
    }
  }: FetcherOptions) {
    return fetcher(API_URL + endpoint, { query, options })
  }
}
