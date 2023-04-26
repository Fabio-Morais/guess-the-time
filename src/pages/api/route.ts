// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { routeData } from '../../../fakeData/routeData'

import { PlacesRequest } from '@/utils/interfaces/Places'
import { Routes } from '@/utils/interfaces/Routes'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getRoute(locations: PlacesRequest): Promise<Routes> {
  //TODO: call Google API
  return routeData
}

export default async function handler(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  req: NextApiRequest,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  res: NextApiResponse<Routes>
) {
  /* TODO: we need to encode the data to send, preventing cheating Or use redis to store temporary data. POST request
   * */
  const answer: PlacesRequest = req.body
  const routes: Routes = await getRoute(answer)
  //const routes: Routes = await getRoute(places.coordinates)
  res.status(200).json(routes)
}
