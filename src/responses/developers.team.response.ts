export interface DeveloperTeamDepartment {
  acronym: string
  name: string
}

export interface DeveloperTeamRoles {
  id: string
  name: string
}

export interface DevelopersTeamResponse {
  id: string
  username: string
  discriminator: string
  avatar: string
  department: DeveloperTeamDepartment
  roles: DeveloperTeamRoles[]
}
