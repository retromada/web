import { TeamDeveloperMember } from '../interfaces'
import Member from '../services/Discord/structures/Member'
import Role from '../services/Discord/structures/Role'

class TeamMember extends Member {
  department: Department

  constructor (data: TeamDeveloperMember) {
    super(data)

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
