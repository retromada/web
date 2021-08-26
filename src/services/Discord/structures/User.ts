import { DiscordUser } from '@interfaces'

class User {
  id: string
  username: string
  discriminator: string
  avatar?: string
  bot?: boolean
  system?: boolean
  mfa_enabled?: boolean
  banner?: string
  accent_color?: number
  locale?: string
  verified?: boolean
  email?: string
  flags?: number
  premium_type?: number
  public_flags?: number
  readonly avatar_url: string
  readonly default_avatar_url: string
  readonly display_avatar_url: string

  constructor (data: DiscordUser) {
    this.id = data.id
    this.username = data.username
    this.discriminator = data.discriminator
    this.avatar = data.avatar
    this.bot = data.bot
    this.system = data.system
    this.mfa_enabled = data.mfa_enabled
    this.banner = data.banner
    this.accent_color = data.accent_color
    this.locale = data.locale
    this.verified = data.verified
    this.email = data.email
    this.flags = data.flags
    this.premium_type = data.premium_type
    this.public_flags = data.public_flags
    this.avatar_url = this.avatarURL
    this.default_avatar_url = this.defaultAvatarURL
    this.display_avatar_url = this.displayAvatarURL
  }

  get avatarURL (): string {
    const format = this.avatar?.startsWith('a_') ? 'gif' : 'png'
    return this.avatar
      ? `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.${format}?size=256`
      : null
  }

  get defaultAvatarURL (): string {
    return `https://cdn.discordapp.com/embed/avatars/${
      +this.discriminator % 5
    }.png`
  }

  get displayAvatarURL (): string {
    return this.avatar_url || this.default_avatar_url
  }
}

export default User
