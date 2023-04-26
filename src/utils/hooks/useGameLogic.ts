import {
  getIsNewRound,
  getRoundNumber,
  getShowAnswer,
  setCorrectAnswer,
  setDestination,
  setNewRound,
  setOrigin,
  setShowAnswer,
} from '@/redux/slices/gameSlice'
import { setNextRound } from '@/redux/slices/gameSlice'
import { resetTimer } from '@/redux/slices/timeSlice'

import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'

import { PlacesRequest } from '@/utils/interfaces/Places'

import { getPlace, postTodoFn } from '@/api/places'

const useGameLogic = () => {
  const dispatch = useDispatch()

  const open = useSelector(getShowAnswer)
  const isNextRound = useSelector(getIsNewRound)
  const roundNumber = useSelector(getRoundNumber)

  const { data, isSuccess } = useQuery({
    enabled: true,
    staleTime: Infinity,
    queryKey: ['PlaceRN:', roundNumber],
    queryFn: () => getPlace(),
  })

  const { mutate } = useMutation((data: PlacesRequest) => postTodoFn(data), {
    onSuccess: (data) => {
      dispatch(setCorrectAnswer(data.duration))
    },
    onError: () => {
      // Error actions
    },
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
      mutate({ origin, destination })
    }
  }, [data?.placesData.coordinates, data?.placesData.name, dispatch, isSuccess, mutate])

  const nextRound = () => {
    dispatch(setNewRound(true))
    dispatch(setShowAnswer(false))
    dispatch(setNextRound())
    dispatch(resetTimer())
  }

  return { open, nextRound } as const
}

export default useGameLogic
