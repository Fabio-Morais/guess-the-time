import { configureStore } from '@reduxjs/toolkit'

import gameReducer from './slices/gameSlice'
import timeReducer from './slices/timeSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    timer: timeReducer,
    game: gameReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
