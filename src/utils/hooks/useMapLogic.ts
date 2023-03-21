import { durationOfTheTrip } from '@/utils/defaultValues'
import Coordinates from '@/utils/interfaces/Coordinates'

import { useEffect, useState } from 'react'

let cursor = 0
let repetitions = 0
const useMapLogic = (places: number[][], numberOfRepetitionsMax: number) => {
  const initialState: Coordinates = {
    lat: places[0][0],
    lng: places[0][1],
  }
  const [currentTrack, setCurrentTrack] = useState(initialState)

  useEffect(() => {
    const dataStory = [
      {
        lat: places[0][0],
        lng: places[0][1],
      },
      {
        lat: places[1][0],
        lng: places[1][1],
      },
    ]
    setCurrentTrack(dataStory[cursor])

    const interval = setInterval(() => {
      if (cursor === dataStory.length - 1) {
        if (repetitions < numberOfRepetitionsMax) {
          cursor = 0
          repetitions++
        } else {
          clearInterval(interval)
        }
        setCurrentTrack(dataStory[cursor])
        return
      }

      cursor += 1
      setCurrentTrack(dataStory[cursor])
    }, durationOfTheTrip)
    return () => {
      clearInterval(interval)
    }
  }, [numberOfRepetitionsMax, places])

  const repeatOneMoreTime = () => {
    setCurrentTrack(initialState)
    cursor = 0
  }

  return [currentTrack, repeatOneMoreTime] as const
}

export default useMapLogic
