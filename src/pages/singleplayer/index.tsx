import dynamic from 'next/dynamic'

import { getRandomPlaces } from '@/pages/api/place'
import { ResponseType, getRoute } from '@/pages/api/route'

/** Chakra */
import { Container, Heading, VStack } from '@chakra-ui/react'

/** Utils */
import { Places } from '@/utils/interfaces/Places'
import { Routes } from '@/utils/interfaces/Routes'

/** Components */
import InputGuesserGroup from '@/components/InputGuesser/InputGuesserGroup'
import RouletteModal from '@/components/RouletteModal/RouletteModal'
import RoundBadge from '@/components/RoundBadge'
import Timer from '@/components/Timer'

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false })

const Index = (props: ResponseType) => {
  return (
    <>
      <Container maxW="container.xl" color="#262626" justifyContent="space-between">
        <Heading textAlign="center" p={10}>
          Guess the Time
        </Heading>

        <RoundBadge />

        <VStack spacing={5} width="100%">
          <Timer />

          <Map path={decodeURI(props.routesData.routes[0].polyline.encodedPolyline)} places={props.placesData} />
          <RouletteModal />
          <InputGuesserGroup places={props.placesData} />
        </VStack>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  // TODO: Remove this, and put on useEffect and fetch the data
  const places: Places = await getRandomPlaces()
  const routes: Routes = await getRoute(places.coordinates)
  return {
    props: { placesData: places, routesData: routes }, // will be passed to the page component as props
  }
}

export default Index
