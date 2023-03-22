// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { routeData } from '../../../fakeData/routeData'

import { addAnswer } from '@/pages/api/game/gameLogic'

import { Places } from '@/utils/interfaces/Places'
import { Routes } from '@/utils/interfaces/Routes'

export interface ResponseType {
  placesData: Places
  routesData: Routes
}

export async function getRoute(locations: number[][]): Promise<Routes> {
  //TODO: call Google API
  const response = routeData
  addAnswer(locations.toString(), response.routes[0].duration)
  return response
}

export default async function handler(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  req: NextApiRequest,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  res: NextApiResponse<ResponseType>
) {
  /* TODO: we need to encode the data to send, preventing cheating Or use redis to store temporary data. POST request
   * */
  //const routes: Routes = await getRoute(places.coordinates)
  // res.status(200).json({ routesData: routes })
}
