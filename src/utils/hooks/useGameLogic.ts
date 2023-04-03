import {
  getIsNewRound,
  getRoundNumber,
  getShowAnswer,
  setDestination,
  setNewRound,
  setOrigin,
  setShowAnswer,
} from '@/redux/slices/gameSlice'
import { setNextRound } from '@/redux/slices/gameSlice'
import { resetTimer } from '@/redux/slices/timeSlice'

import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'

import { getPlace } from '@/api/places'

const useGameLogic = () => {
  const dispatch = useDispatch()

  const open = useSelector(getShowAnswer)
  const isNextRound = useSelector(getIsNewRound)
  const roundNumber = useSelector(getRoundNumber)

  const { data, isSuccess } = useQuery({
    enabled: true,
    staleTime: Infinity,
    queryKey: ['roundNumber:', roundNumber],
    queryFn: () => getPlace(),
  })

  useEffect(() => {
    /*
     * TODO: this is really needed?
     * */
    if (isNextRound) {
      dispatch(setNewRound(false))
    }
  }, [dispatch, isNextRound])

  useEffect(() => {
    if (isSuccess) {
      // fetch ok
      const origin = { coordinates: data?.placesData.coordinates[0], name: data?.placesData.name[0] }
      const destination = { coordinates: data?.placesData.coordinates[1], name: data?.placesData.name[1] }
      dispatch(setOrigin(origin))
      dispatch(setDestination(destination))
    }
  }, [isSuccess])

  const nextRound = () => {
    dispatch(setNewRound(true))
    dispatch(setShowAnswer(false))
    dispatch(setNextRound())
    dispatch(resetTimer())
  }

  return { open, nextRound } as const
}

export default useGameLogic
