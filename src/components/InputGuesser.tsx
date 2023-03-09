import { useState } from 'react'

import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react'

interface Props {
  time: string
  max: number
}

const InputGuesser = (props: Props) => {
  const [value, setValue] = useState('0')
  const handleChange = (value: string) => setValue(value)

  return (
    <Box
      bgColor="red"
      borderRadius="md"
      bg="tomato"
      px={4}
      maxW="400px"
      width="100%"
    >
      <Flex flexDirection="column" justifyContent="center">
        <Text align="center">{props.time}</Text>
        <Flex maxW={'400px'} pb={2}>
          <NumberInput
            maxW="100px"
            size="sm"
            mr="2rem"
            value={value}
            onChange={handleChange}
            min={0}
            max={props.max}
          >
            <NumberInputField />
          </NumberInput>
          <Slider
            flex="1"
            focusThumbOnChange={false}
            value={Number(value)}
            onChange={(value) => handleChange(value.toString())}
            min={0}
            max={props.max}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px">
              {Number(value)}
            </SliderThumb>
          </Slider>
        </Flex>
      </Flex>
    </Box>
  )
}

export default InputGuesser
