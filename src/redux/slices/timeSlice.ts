import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { maxTime } from '@/utils/defaultValues'

export interface TimerState {
  currentTimer: number
  timePlaying: boolean
  timeout: boolean
}

const initialState: TimerState = {
  currentTimer: maxTime,
  timePlaying: true,
  timeout: false,
}

export const timeSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state: Draft<TimerState>, action: PayloadAction<number>) => {
      state.currentTimer = action.payload
    },
    pauseTimer: (state: Draft<TimerState>) => {
      state.timePlaying = false
    },
    playTimer: (state: Draft<TimerState>) => {
      state.timePlaying = true
    },
    timeout: (state: Draft<TimerState>) => {
      state.timeout = true
      state.timePlaying = false
    },
    resetTimer: (state: Draft<TimerState>) => {
      state.timeout = false
      state.timePlaying = false
      state.currentTimer = maxTime
    },
  },
})
// Selectors
export const isPlaying = (state: { timer: TimerState }) => state.timer.timePlaying
export const currentTime = (state: { timer: TimerState }) => state.timer.currentTimer

// Reducers and actions
export const { setTimer, pauseTimer, playTimer, timeout, resetTimer } = timeSlice.actions

export default timeSlice.reducer
