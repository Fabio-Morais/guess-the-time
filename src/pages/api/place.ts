// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Places } from '@/utils/interfaces/Places'

export interface ResponseType {
  placesData: Places
}

export async function getRandomPlaces(): Promise<Places> {
  //TODO: call random places API
  const coordinates: number[][] = [
    [39.466667, -0.375],
    [41.07265370061424, -8.401270685940867],
  ]
  const names: string[] = ['Porto', 'Valencia']

  return { coordinates, name: names }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  /* TODO: we need to encode the data to send, preventing cheating Or use redis to store temporary data
   * */
  const places: Places = await getRandomPlaces()
  res.status(200).json({ placesData: places })
}
