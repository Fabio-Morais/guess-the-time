import { useState } from 'react'

import { Places } from '@/utils/interfaces/Places'
import Timer from '@/utils/interfaces/Timer'

const useInputLogic = (places: Places) => {
  const initialState: Timer = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const [timer, setTimer] = useState<Timer>(initialState)

  const setDay = (day: number) => setTimer({ ...timer, days: day })
  const setHours = (hours: number) => setTimer({ ...timer, hours: hours })
  const setMinutes = (minutes: number) =>
    setTimer({ ...timer, minutes: minutes })

  const printTimer = () => {
    /*TODO: add logic to print the timer*/
  }

  const verifyAnswer = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer: timer, places: places }),
    }
    fetch('/api/game', requestOptions)
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      .then((data) => console.log(data))
  }

  return [
    timer,
    setDay,
    setHours,
    setMinutes,
    printTimer,
    verifyAnswer,
  ] as const
}

export default useInputLogic
