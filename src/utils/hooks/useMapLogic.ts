import { durationOfTheTrip } from '@/utils/defaultValues'
import Coordinates from '@/utils/interfaces/Coordinates'

import { useEffect, useState } from 'react'

let cursor = 0
let repetitions = 0
const useMapLogic = (
  initialLat: number,
  initialLng: number,
  dataPoints: Coordinates[],
  numberOfRepetitionsMax: number
) => {
  const [currentTrack, setCurrentTrack] = useState({
    lat: initialLat,
    lng: initialLng,
  })

  useEffect(() => {
    setCurrentTrack(dataPoints[cursor])

    const interval = setInterval(() => {
      if (cursor === dataPoints.length - 1) {
        if (repetitions < numberOfRepetitionsMax) {
          cursor = 0
          repetitions++
        } else {
          clearInterval(interval)
        }
        setCurrentTrack(dataPoints[cursor])
        return
      }

      cursor += 1
      setCurrentTrack(dataPoints[cursor])
    }, durationOfTheTrip)
    return () => {
      clearInterval(interval)
    }
  }, [dataPoints, numberOfRepetitionsMax])

  const repeatOneMoreTime = () => {
    setCurrentTrack(dataPoints[0])
    cursor = 0
  }

  return [currentTrack, repeatOneMoreTime] as const
}

export default useMapLogic
