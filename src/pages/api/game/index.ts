// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Answer, validateAnswer } from '@/pages/api/game/gameLogic'

type Data = {
  response: string
}
type Data2 = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Data2>
) {
  switch (req.method) {
    case 'POST': {
      // Process a POST request
      const answer: Answer = req.body
      /*
       * TODO: validate answer, returning the current score, answer and right answer
       * */
      const response = validateAnswer(answer)
      res.status(200).json({ name: response })
      break
    }
    default: {
      // Handle any other HTTP method
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).json({ response: `Method ${req.method} Not Allowed` })
      break
    }
  }
}
