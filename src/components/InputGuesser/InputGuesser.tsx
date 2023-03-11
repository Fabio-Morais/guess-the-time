import {
  Card,
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
  readonly time: string
  readonly max: number
  // eslint-disable-next-line no-unused-vars
  setTime: (number: number) => void
  readonly children: number
}

const InputGuesser = (props: Props) => {
  const value: number = props.children

  return (
    <Card borderRadius="md" px={4} maxW="400px" width="100%" zIndex={2}>
      <Flex flexDirection="column" justifyContent="center">
        <Text align="center">{props.time}</Text>
        <Flex maxW={'400px'} pb={2} pr={4}>
          <NumberInput
            maxW="100px"
            size="sm"
            mr="2rem"
            value={value}
            onChange={(value: string) => props.setTime(Number(value))}
            min={0}
            max={props.max}
          >
            <NumberInputField />
          </NumberInput>
          <Slider
            flex="1"
            focusThumbOnChange={false}
            value={value}
            onChange={(value) => props.setTime(value)}
            min={0}
            max={props.max}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px">
              {value}
            </SliderThumb>
          </Slider>
        </Flex>
      </Flex>
    </Card>
  )
}

export default InputGuesser
