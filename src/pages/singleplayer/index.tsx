import dynamic from 'next/dynamic'

import { getDestination, getOrigin } from '@/redux/slices/gameSlice'

/** Chakra */
import { Container, Heading, VStack } from '@chakra-ui/react'

import { useSelector } from 'react-redux'

import AnswerModal from '@/components/AnswerModal'

/** Components */
import InputGuesserGroup from '@/components/InputGuesser/InputGuesserGroup'
import RouletteModal from '@/components/RouletteModal/RouletteModal'
import RoundBadge from '@/components/RoundBadge'

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false })

const Index = () => {
  const origin = useSelector(getOrigin)
  const destination = useSelector(getDestination)
  return (
    <>
      <Container maxW="container.xl" color="#262626" justifyContent="space-between">
        <Heading textAlign="center" p={10}>
          Guess the Time
        </Heading>

        <RoundBadge />

        <VStack spacing={5} width="100%">
          {
            //TODO: UNCOMMENT THIS <Timer />
          }
          <Map
            places={{
              coordinates: [origin.coordinates, destination.coordinates],
              name: [origin.name, destination.name],
            }}
          />
          <RouletteModal />
          <InputGuesserGroup />
        </VStack>
      </Container>
      <AnswerModal />
    </>
  )
}

export default Index
