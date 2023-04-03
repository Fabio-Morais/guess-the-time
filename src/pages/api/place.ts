// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { coordinatesFake, namesFake } from '../../../fakeData/placesData'

import { Places } from '@/utils/interfaces/Places'

export interface ResponseType {
  placesData: Places
}
let random = 0
export async function getRandomPlaces(): Promise<Places> {
  //TODO: call random places API
  if (random == 4) random = 0
  const coordinates: number[][] = [coordinatesFake[random], coordinatesFake[random + 1]]
  const names: string[] = [namesFake[random], namesFake[random + 1]]
  random++

  return { coordinates, name: names }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  /* TODO: we need to encode the data to send, preventing cheating Or use redis to store temporary data
   * */
  const places: Places = await getRandomPlaces()
  res.status(200).json({ placesData: places })
}
