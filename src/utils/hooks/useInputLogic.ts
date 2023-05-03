import { getCorrectAnswer, setShowAnswer } from '@/redux/slices/gameSlice'
import { timeout } from '@/redux/slices/timeSlice'
import { increaseScore, setCurrentRoundScore } from '@/redux/slices/userSlice'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Timer from '@/utils/interfaces/Timer'

import { calculateScore, convertSecondsToTimeObject } from '@/utils/convertions'

const useInputLogic = () => {
  const initialState: Timer = { days: 0, hours: 2, minutes: 20, seconds: 0 }
  const [timer, setTimer] = useState<Timer>(initialState)
  const dispatch = useDispatch()
  const correctAnswer = useSelector(getCorrectAnswer)

  const setDay = (day: number) => setTimer({ ...timer, days: day })
  const setHours = (hours: number) => setTimer({ ...timer, hours: hours })
  const setMinutes = (minutes: number) => setTimer({ ...timer, minutes: minutes })

  const printTimer = () => {
    /*TODO: add logic to print the timer*/
  }

  const verifyAnswer = () => {
    const correctTimer: Timer = convertSecondsToTimeObject(+correctAnswer.slice(0, -1))
    return calculateScore(correctTimer, timer)
  }

  const guess = () => {
    dispatch(timeout())
    dispatch(setShowAnswer(true))
    const scoreToIncrease = verifyAnswer()
    dispatch(setCurrentRoundScore(scoreToIncrease))
    dispatch(increaseScore(scoreToIncrease))
  }

  return [timer, setDay, setHours, setMinutes, printTimer, guess] as const
}

export default useInputLogic
