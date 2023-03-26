import { ArrowRightIcon } from '@chakra-ui/icons'
import { Button, Stack, Text } from '@chakra-ui/react'

import { useState } from 'react'

import Roulette from '@/components/RouletteModal/Roulette'

type HandleOnClose = () => void
const RouletteGroup = ({ handleOnClose }: { handleOnClose: HandleOnClose }) => {
  const possibleButtonText = {
    spin: 'Spin',
    skip: 'Skip',
    closing: 'Closing',
  }

  const [start, setStart] = useState(false)
  const [skip, setSkip] = useState(false)
  const [buttonText, setButtonText] = useState(possibleButtonText.spin)

  const handleStart = () => {
    // If the button is in the start state, then it is in the process of closing
    if (start) {
      setSkip(true)
      setStart(false)
      handleOnClose()
      return
    }
    // If the button is in the start state = false, then it is in the process of opening
    setStart(true)
    setButtonText(possibleButtonText.skip)
  }
  return (
    <>
      <Stack spacing={7} pb={3}>
        <Roulette start={start} handleOnClose={handleOnClose} />
        <Button
          {...(skip ? { isLoading: true } : undefined)}
          {...(skip ? { loadingText: possibleButtonText.closing } : undefined)}
          {...(start ? { colorScheme: 'gray' } : { colorScheme: 'teal' })}
          iconSpacing={3}
          rightIcon={start ? <ArrowRightIcon /> : undefined}
          onClick={handleStart}
          width={'100%'}
          variant="solid"
        >
          <Text fontSize="lg">{buttonText}</Text>
        </Button>
      </Stack>
    </>
  )
}

export default RouletteGroup
