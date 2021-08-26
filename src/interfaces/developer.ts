import Role from '@services/Discord/structures/Role'

import { Department } from '../api/TeamMember'
import { DiscordMember, DiscordRole } from './discord'

export interface TeamDeveloperDepartment extends DiscordRole {
  acronym: string
}

export interface TeamDeveloperMember
  extends Omit<DiscordMember, 'roles' | 'joined_at' | 'deaf' | 'mute'> {
  department: Department
  roles: Role[]
  joined_at?: string
  deaf?: boolean
  mute?: boolean
}
