import { useEffect, useState } from 'react'

const dataStory = [
  {
    lat: 53.22376666666667,
    lng: 50.745841666666664,
  },
  {
    lat: 56.22376666666667,
    lng: 40.745841666666664,
  },
]
let cursor = 0
const useMapLogic = () => {
  const [currentTrack, setCurrentTrack] = useState({
    lat: 0,
    lng: 0,
  })

  useEffect(() => {
    setCurrentTrack(dataStory[cursor])

    const interval = setInterval(() => {
      if (cursor === dataStory.length - 1) {
        cursor = 0
        setCurrentTrack(dataStory[cursor])
        return
      }

      cursor += 1
      setCurrentTrack(dataStory[cursor])
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return [currentTrack] as const
}

export default useMapLogic
