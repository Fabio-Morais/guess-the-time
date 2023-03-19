// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { routeData } from '../../../fakeData/routeData'

import { Routes } from '@/utils/interfaces/Routes'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Routes>
) {
  res.status(200).json(routeData)
}
