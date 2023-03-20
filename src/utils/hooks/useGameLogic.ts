import { useState } from 'react'

import { Game } from '@/utils/interfaces/Game'

const useGameLogic = () => {
  const initialState: Game = { score: 0, maxRounds: 1, currentRound: 1 }
  const [game, setGame] = useState<Game>(initialState)

  const increaseScore = (score: number) => {
    setGame({ ...game, score: game.score + score })
  }

  const nextRound = () => {
    setGame({ ...game, currentRound: game.currentRound + 1 })
  }

  const resetGame = () => {
    setGame(initialState)
  }

  const setMaxRounds = (maxRounds: number) => {
    setGame({ ...game, maxRounds: maxRounds })
  }

  return { game, increaseScore, nextRound, resetGame, setMaxRounds } as const
}

export default useGameLogic
