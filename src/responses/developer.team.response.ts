export interface TeamDeveloperDepartment {
  acronym: string
  name: string
  color: number
}

export interface TeamDeveloperRole {
  id: string
  name: string
}

export interface TeamDeveloperResponse {
  id: string
  username: string
  discriminator: string
  avatar: string
  department: TeamDeveloperDepartment
  roles: TeamDeveloperRole[]
}
