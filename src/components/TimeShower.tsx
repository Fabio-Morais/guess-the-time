import { Card, Divider, HStack, Text, VStack } from '@chakra-ui/react'

import Timer from '@/utils/interfaces/Timer'

interface Props {
  time: Timer
}
const TimeShower = (props: Props) => {
  return (
    <>
      <Card boxShadow="2xl" rounded="md" p={3} zIndex={2} pl={10} pr={10}>
        <HStack spacing={10} alignItems="center" alignContent="center">
          {props.time.days == 0 &&
            props.time.hours == 0 &&
            props.time.minutes == 0 && (
              <VStack spacing={3}>
                <Text>choose the time</Text>
                <Text>No data</Text>
              </VStack>
            )}

          {props.time.days != 0 && (
            <>
              <VStack spacing={3}>
                <Text fontSize="lg" fontWeight="extrabold">
                  Days
                </Text>
                <Text>{props.time.days}</Text>
              </VStack>
              <Divider
                orientation="vertical"
                height="2rem"
                borderWidth="1px"
                borderColor={'gray'}
              />
            </>
          )}
          {props.time.hours != 0 && (
            <>
              <VStack spacing={3}>
                <Text fontSize="lg" fontWeight="extrabold">
                  Hours
                </Text>
                <Text>{props.time.hours}</Text>
              </VStack>

              <Divider
                orientation="vertical"
                height="2rem"
                borderWidth="1px"
                borderColor={'gray'}
              />
            </>
          )}

          {props.time.minutes != 0 && (
            <VStack spacing={3}>
              <Text fontSize="lg" fontWeight="extrabold">
                Minutes
              </Text>
              <Text>{props.time.minutes}</Text>
            </VStack>
          )}
        </HStack>
      </Card>
    </>
  )
}

export default TimeShower
