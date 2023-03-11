import { Button, Flex } from '@chakra-ui/react'

import InputGuesser from '@/components/InputGuesser/InputGuesser'
import TimeShower from '@/components/TimeShower'
import useGameLogic from '@/utils/hooks/useGameLogic'

const InputGuesserGroup = () => {
  const [timer, setDay, setHours, setMinutes, printTimer] = useGameLogic()

  return (
    <>
      <TimeShower time={timer} />

      <Flex gap={5} width="100%" justifyContent={'center'} flexWrap="wrap">
        {/* Days */}
        <InputGuesser time="Days" max={100} setTime={setDay}>
          {timer.days}
        </InputGuesser>

        {/* Hours */}
        <InputGuesser time="Hours" max={23} setTime={setHours}>
          {timer.hours}
        </InputGuesser>

        {/* Minutes */}
        <InputGuesser time="Minutes" max={59} setTime={setMinutes}>
          {timer.minutes}
        </InputGuesser>
      </Flex>

      <Button colorScheme="teal" size="lg" onClick={printTimer}>
        Button
      </Button>
    </>
  )
}

export default InputGuesserGroup
