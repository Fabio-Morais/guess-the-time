import { configureStore } from '@reduxjs/toolkit'

import timeReducer from './slices/timeSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    timer: timeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
