import Discord from '@services/Discord'
import Role from '@services/Discord/structures/Role'

import TeamMember, { Department } from './TeamMember'

const { COMMANDER_ROLE_ID, OPERATOR_ROLE_ID } = process.env

class RetromadaApi {
  static async team (): Promise<TeamMember[]> {
    const roles = await Discord.roles()
    const members = await Discord.members()
    const findRoleByID = (id) => roles.find((role) => role.id === id)

    return members
      .filter(({ roles }) => roles.includes(COMMANDER_ROLE_ID))
      .map((member) => {
        const roles = member.roles
          .filter((roleID) => roleID !== OPERATOR_ROLE_ID)
          .map((roleID) => new Role(findRoleByID(roleID)))
        const department = roles.find(
          ({ position }) =>
            position === Math.max(...roles.map(({ position }) => position))
        )

        return new TeamMember({
          user: member.user,
          department: new Department(department),
          roles
        })
      })
  }
}

export { TeamMember }
export default RetromadaApi
