import { DiscordRole } from '../../../interfaces'

class Role {
  id: string
  name: string
  color: number
  hoist: boolean
  position: number
  permissions: string
  managed: boolean
  mentionable: boolean
  readonly hex_color: string

  constructor (data: DiscordRole) {
    this.id = data.id
    this.name = data.name
    this.color = data.color
    this.hoist = data.hoist
    this.position = data.position
    this.permissions = data.permissions
    this.managed = data.managed
    this.mentionable = data.mentionable
    this.hex_color = this.hexColor
  }

  get hexColor (): string {
    return `#${this.color.toString(16).padStart(6, '0')}`
  }
}

export default Role
