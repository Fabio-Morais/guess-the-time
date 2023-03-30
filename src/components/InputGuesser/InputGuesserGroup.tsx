import { Button, Flex } from '@chakra-ui/react'

import { Places } from '@/utils/interfaces/Places'

import InputGuesser from '@/components/InputGuesser/InputGuesser'
import TimeShower from '@/components/TimeShower'

import useInputLogic from '@/utils/hooks/useInputLogic'

const InputGuesserGroup = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  places,
}: {
  places: Places
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [timer, setDay, setHours, setMinutes, printTimer, verifyAnswer] = useInputLogic(places)

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

      <Button colorScheme="teal" size="lg" onClick={verifyAnswer}>
        Guess
      </Button>
    </>
  )
}

export default InputGuesserGroup
