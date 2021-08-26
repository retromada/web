import { Department } from '../api/TeamMember'
import { DiscordMember, DiscordRole } from './discord'

export interface TeamDeveloperDepartment extends DiscordRole {
  acronym: string
}

export interface TeamDeveloperMember extends DiscordMember {
  department: Department
}
