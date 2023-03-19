import dynamic from 'next/dynamic'

import { Container, Heading, VStack } from '@chakra-ui/react'

import InputGuesserGroup from '@/components/InputGuesser/InputGuesserGroup'
import RoundBadge from '@/components/RoundBadge'
import Timer from '@/components/Timer'
import { ResponseType, getRandomPlaces, getRoute } from '@/pages/api/route'
import { Routes } from '@/utils/interfaces/Routes'

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false })

const Index = (props: ResponseType) => {
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

        <RoundBadge maxRounds={5} />

        <VStack spacing={5} width="100%">
          <Timer />

          <Map
            path={decodeURI(
              props.routesData.routes[0].polyline.encodedPolyline
            )}
            places={props.placesData}
          />

          <InputGuesserGroup />
        </VStack>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const places: number[][] = await getRandomPlaces()
  const routes: Routes = await getRoute()
  return {
    props: { placesData: places, routesData: routes }, // will be passed to the page component as props
  }
}

export default Index
