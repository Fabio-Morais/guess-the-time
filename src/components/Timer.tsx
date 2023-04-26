import { isPlaying, setTimer, timeout } from '@/redux/slices/timeSlice'

import { Text } from '@chakra-ui/react'

import { useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useDispatch, useSelector } from 'react-redux'

import { maxTime } from '@/utils/defaultValues'

interface Props {
  remainingTime: number
}
let currentTimer = maxTime
const Timer = () => {
  const dispatch = useDispatch()
  const timerIsPlaying = useSelector(isPlaying)

  //Only when the timer updates, the timer is set in the store
  useEffect(() => {
    dispatch(setTimer(currentTimer))
  }, [dispatch, timerIsPlaying])
  const renderTime = ({ remainingTime }: Props) => {
    currentTimer = remainingTime
    dispatch(setTimer(currentTimer))

    return <Text>{remainingTime}</Text>
  }

  return (
    <div style={{ animation: 'blink 1s infinite' }}>
      <CountdownCircleTimer
        isPlaying={timerIsPlaying}
        duration={maxTime}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        size={45}
        strokeWidth={4}
        onComplete={() => {
          dispatch(timeout())
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default Timer
