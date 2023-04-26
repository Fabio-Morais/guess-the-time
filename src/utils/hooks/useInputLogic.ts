import { setShowAnswer } from '@/redux/slices/gameSlice'
import { currentTime, timeout } from '@/redux/slices/timeSlice'
import { increaseScore } from '@/redux/slices/userSlice'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Timer from '@/utils/interfaces/Timer'

const useInputLogic = () => {
  const initialState: Timer = { days: 0, hours: 2, minutes: 20, seconds: 0 }
  const [timer, setTimer] = useState<Timer>(initialState)
  const dispatch = useDispatch()
  const answerTime = useSelector(currentTime)

  const setDay = (day: number) => setTimer({ ...timer, days: day })
  const setHours = (hours: number) => setTimer({ ...timer, hours: hours })
  const setMinutes = (minutes: number) => setTimer({ ...timer, minutes: minutes })

  const printTimer = () => {
    /*TODO: add logic to print the timer*/
  }

  const verifyAnswer = () => {
    dispatch(timeout())
    dispatch(setShowAnswer(true))
    dispatch(increaseScore(answerTime))
  }

  return [timer, setDay, setHours, setMinutes, printTimer, verifyAnswer] as const
}

export default useInputLogic
