import { DiscordMember } from '@interfaces'

import User from './User'

class Member {
  user?: User
  nick?: string
  roles: string[]
  joined_at: string
  premium_since?: string
  deaf: boolean
  mute: boolean
  pending?: boolean
  permissions?: string

  constructor (data: DiscordMember) {
    this.user = data.user
    this.nick = data.nick
    this.roles = data.roles
    this.joined_at = data.joined_at
    this.premium_since = data.premium_since
    this.deaf = data.deaf
    this.mute = data.mute
    this.pending = data.pending
    this.permissions = data.permissions
  }
}

export default Member
