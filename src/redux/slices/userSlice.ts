import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { initialScore } from '@/utils/defaultValues'

export interface UserState {
  score: number
}

const initialState: UserState = {
  score: initialScore,
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
  },
})

// Selectors
export const getScore = (state: { user: UserState }) => state.user.score

// Reducers and actions
export const { increaseScore, resetScore } = userSlice.actions

export default userSlice.reducer
