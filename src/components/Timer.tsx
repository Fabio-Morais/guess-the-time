import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { Text } from '@chakra-ui/react'

interface Props {
  remainingTime: number
}
const Timer = () => {
  const renderTime = ({ remainingTime }: Props) => {
    return <Text>{remainingTime}</Text>
  }

  return (
    <div style={{ animation: 'blink 1s infinite' }}>
      <CountdownCircleTimer
        isPlaying={false}
        duration={10}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        size={45}
        strokeWidth={4}
        onComplete={() => {
          return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default Timer
