import { Box, HStack, Text, VStack } from '@chakra-ui/react'

interface Props {
  origin: string
  destination: string
}
const OriginDestination = (props: Props) => {
  const items = [
    { city: props.origin, text: 'Origin' },
    { city: props.destination, text: 'Destination' },
  ]
  return (
    <VStack
      position={'relative'}
      right={0}
      bottom={'110px'}
      zIndex={2}
      width={'11rem'}
      spacing={2}
    >
      {items.map((item) => (
        <Box
          key={item.text}
          width={'100%'}
          boxShadow="2xl"
          backgroundColor={'white'}
          border="1px"
        >
          <HStack alignItems={'left'} p={1} spacing={1}>
            <Text fontWeight={500}>{item.text}:</Text>
            <Text textAlign={'right'}>{item.city}</Text>
          </HStack>
        </Box>
      ))}
    </VStack>
  )
}

export default OriginDestination
