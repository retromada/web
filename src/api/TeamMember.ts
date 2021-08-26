import { TeamDeveloperMember } from '@interfaces'
import Role from '@services/Discord/structures/Role'
import User from '@services/Discord/structures/User'

class TeamMember implements TeamDeveloperMember {
  user?: User
  department: Department
  roles: Role[]

  constructor (data: TeamDeveloperMember) {
    this.department = data.department
  }
}

export class Department extends Role {
  readonly acronym: string

  constructor (data: Role) {
    super(data)

    this.acronym = this._acronym
  }

  get _acronym (): string {
    return this.name.replace(/[a-z]+[^]/g, '')
  }
}

export default TeamMember
