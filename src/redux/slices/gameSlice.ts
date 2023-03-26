import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { MobilityType } from '@/utils/enums/MobilityType'

import { Place } from '@/utils/interfaces/Places'

export interface GameState {
  origin: Place
  destination: Place
  travelMode: MobilityType
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
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTravelMode: (state: Draft<GameState>, action: PayloadAction<MobilityType>) => {
      state.travelMode = action.payload
    },
  },
})

// Selectors
export const getTravelMode = (state: { game: GameState }) => state.game.travelMode

// Reducers and actions
export const { setTravelMode } = gameSlice.actions

export default gameSlice.reducer
