// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Answer, validateAnswer } from '@/pages/api/game/gameLogic'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST': {
      // Process a POST request
      const answer: Answer = req.body

      const respon = validateAnswer(answer)
      res.status(200).json({ name: respon })
      break
    }
    default: {
      // Handle any other HTTP method
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break
    }
  }
}
