import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { initialScore } from '@/utils/defaultValues'

export interface UserState {
  score: number
  currentRoundScore: number
}

const initialState: UserState = {
  score: initialScore,
  currentRoundScore: 0,
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
    setCurrentRoundScore: (state: Draft<UserState>, action: PayloadAction<number>) => {
      state.currentRoundScore = action.payload
    },
  },
})

// Selectors
export const getScore = (state: { user: UserState }) => state.user.score
export const getCurrentRoundScore = (state: { user: UserState }) => state.user.currentRoundScore

// Reducers and actions
export const { increaseScore, resetScore, setCurrentRoundScore } = userSlice.actions

export default userSlice.reducer
