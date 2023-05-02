import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { MobilityType } from '@/utils/enums/MobilityType'

import { Place } from '@/utils/interfaces/Places'

import { initialRound, maxRounds } from '@/utils/defaultValues'

export interface GameState {
  origin: Place
  destination: Place
  travelMode: MobilityType
  showAnswer: boolean
  isNewRound: boolean
  currentRound: number
  maxRounds: number
  correctAnswer: string
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
  isNewRound: true,
  currentRound: initialRound,
  maxRounds: maxRounds,
  correctAnswer: '',
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
    setNewRound: (state: Draft<GameState>, action: PayloadAction<boolean>) => {
      state.isNewRound = action.payload
    },
    setNextRound: (state: Draft<GameState>) => {
      state.currentRound < state.maxRounds && state.currentRound++
    },
    setOrigin: (state: Draft<GameState>, action: PayloadAction<Place>) => {
      state.origin = action.payload
    },
    setDestination: (state: Draft<GameState>, action: PayloadAction<Place>) => {
      state.destination = action.payload
    },
    setCorrectAnswer: (state: Draft<GameState>, action: PayloadAction<string>) => {
      state.correctAnswer = action.payload
    },
    resetRounds: (state: Draft<GameState>) => {
      state.currentRound = 1
    },
  },
})

// Selectors
export const getTravelMode = (state: { game: GameState }) => state.game.travelMode
export const getShowAnswer = (state: { game: GameState }) => state.game.showAnswer
export const getIsNewRound = (state: { game: GameState }) => state.game.isNewRound
export const getRoundNumber = (state: { game: GameState }) => state.game.currentRound
export const getMaxRounds = (state: { game: GameState }) => state.game.maxRounds
export const getOrigin = (state: { game: GameState }) => state.game.origin
export const getDestination = (state: { game: GameState }) => state.game.destination
export const getCorrectAnswer = (state: { game: GameState }) => state.game.correctAnswer

// Reducers and actions
export const {
  setTravelMode,
  setShowAnswer,
  setNewRound,
  setNextRound,
  setOrigin,
  setDestination,
  setCorrectAnswer,
  resetRounds,
} = gameSlice.actions

export default gameSlice.reducer
