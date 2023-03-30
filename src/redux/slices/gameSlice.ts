import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { MobilityType } from '@/utils/enums/MobilityType'

import { Place } from '@/utils/interfaces/Places'

export interface GameState {
  origin: Place
  destination: Place
  travelMode: MobilityType
  showAnswer: boolean
}

const initialState: GameState = {
  origin: {
    coordinates: [],
    name: '',
  },
  destination: {
    coordinates: [],
    name: '',
  },
  travelMode: MobilityType.car,
  showAnswer: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTravelMode: (state: Draft<GameState>, action: PayloadAction<MobilityType>) => {
      state.travelMode = action.payload
    },
    setShowAnswer: (state: Draft<GameState>, action: PayloadAction<boolean>) => {
      state.showAnswer = action.payload
    },
  },
})

// Selectors
export const getTravelMode = (state: { game: GameState }) => state.game.travelMode
export const getShowAnswer = (state: { game: GameState }) => state.game.showAnswer

// Reducers and actions
export const { setTravelMode, setShowAnswer } = gameSlice.actions

export default gameSlice.reducer
