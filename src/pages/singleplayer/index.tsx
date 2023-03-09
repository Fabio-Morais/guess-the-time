import InputGuesser from '@/components/InputGuesser'
import RoundBadge from '@/components/RoundBadge'
import Timer from '@/components/Timer'
import Map from '@/components/map'

import { Button, Container, Heading, VStack } from '@chakra-ui/react'

const Index = () => {
  return (
    <>
      <Container
        maxW="container.xl"
        color="#262626"
        justifyContent="space-between"
      >
        <Heading textAlign="center" p={10}>
          Guess the Time
        </Heading>

        <VStack spacing={5} width="100%">
          <RoundBadge maxRounds={5}></RoundBadge>
          <Timer></Timer>
          <Map></Map>
          <InputGuesser time="minutes" max={60}></InputGuesser>
          <Button colorScheme="teal" size="lg">
            Button
          </Button>
        </VStack>
      </Container>
    </>
  )
}

export default Index
