import { NextApiRequest, NextApiResponse } from 'next'

import RetromadaApi, { TeamMember } from '../../api/RetromadaApi'

let cachedTeam: TeamMember[] = null

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  try {
    if (cachedTeam) {
      return response.status(200).json(cachedTeam)
    }

    const team = await RetromadaApi.team()
    cachedTeam = team

    return response.status(200).json(team)
  } catch (error) {
    console.log(error)
    return response.status(400).json({ message: error.message })
  }
}
