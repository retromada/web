export interface DeveloperDepartment {
  acronym: string
  name: string
  hexColor: string
}

export interface DeveloperRoles {
  id: string
  name: string
}

export interface DevelopersTeamResponse {
  id: string
  username: string
  discriminator: string
  avatar: string
  department: DeveloperDepartment
  roles: DeveloperRoles[]
}
