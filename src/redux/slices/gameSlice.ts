import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { initialRound, initialScore, maxRounds } from '@/utils/defaultValues'

export interface GameState {
  score: number
  correctAnswer: string
  currentRound: number
  maxRounds: number
}

const initialState: GameState = {
  score: initialScore,
  correctAnswer: '',
  currentRound: initialRound,
  maxRounds: maxRounds,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increaseScore: (state: Draft<GameState>, action: PayloadAction<number>) => {
      state.score += action.payload
    },
    resetScore: (state: Draft<GameState>) => {
      state.score = 0
    },
  },
})

// Selectors
export const getScore = (state: { game: GameState }) => state.game.maxRounds

// Reducers and actions
export const { increaseScore, resetScore } = gameSlice.actions

export default gameSlice.reducer
