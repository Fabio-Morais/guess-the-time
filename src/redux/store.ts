import { configureStore } from '@reduxjs/toolkit'

import gameReducer from './slices/gameSlice'
import timeReducer from './slices/timeSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    timer: timeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
