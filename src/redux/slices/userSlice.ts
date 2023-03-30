import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { initialRound, initialScore, maxRounds } from '@/utils/defaultValues'

export interface UserState {
  score: number
  correctAnswer: string
  currentRound: number
  maxRounds: number
}

const initialState: UserState = {
  score: initialScore,
  correctAnswer: '',
  currentRound: initialRound,
  maxRounds: maxRounds,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increaseScore: (state: Draft<UserState>, action: PayloadAction<number>) => {
      state.score += action.payload
    },
    resetScore: (state: Draft<UserState>) => {
      state.score = 0
    },
    setNextRound: (state: Draft<UserState>) => {
      state.currentRound < state.maxRounds && state.currentRound++
    },
  },
})

// Selectors
export const getScore = (state: { user: UserState }) => state.user.maxRounds

// Reducers and actions
export const { increaseScore, resetScore, setNextRound } = userSlice.actions

export default userSlice.reducer
