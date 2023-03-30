import { getShowAnswer, setShowAnswer } from '@/redux/slices/gameSlice'
import { resetTimer } from '@/redux/slices/timeSlice'
import { setNextRound } from '@/redux/slices/userSlice'

import { useDispatch, useSelector } from 'react-redux'

const useGameLogic = () => {
  const dispatch = useDispatch()
  const open = useSelector(getShowAnswer)

  const nextRound = () => {
    dispatch(setShowAnswer(false))
    dispatch(setNextRound())
    dispatch(resetTimer())
  }
  return { open, nextRound } as const
}

export default useGameLogic
