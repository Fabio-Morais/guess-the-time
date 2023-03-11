import { Container, Heading, VStack } from '@chakra-ui/react'

import InputGuesserGroup from '@/components/InputGuesser/InputGuesserGroup'
import RoundBadge from '@/components/RoundBadge'
import Timer from '@/components/Timer'
import Map from '@/components/map'

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
          <Timer />
          <Map />
          <InputGuesserGroup />
        </VStack>
      </Container>
    </>
  )
}

export default Index
