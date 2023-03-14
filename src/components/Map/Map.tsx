import { Box } from '@chakra-ui/react'

import Marker from '@/components/Map/Marker'
import { MapIcons } from '@/utils/enums/MapIcons'
import { MobilityType } from '@/utils/enums/MobilityType'
import useMapLogic from '@/utils/hooks/useMapLogic'

import 'leaflet/dist/leaflet.css'
import { FeatureGroup, MapContainer, Polyline, TileLayer } from 'react-leaflet'

/* TODO: To be removed*/
const outerBounds: any = [
  [39.466667, -0.375],
  [41.07265370061424, -8.401270685940867],
]
const dataStory = [
  {
    lat: outerBounds[0][0],
    lng: outerBounds[0][1],
  },
  {
    lat: outerBounds[1][0],
    lng: outerBounds[1][1],
  },
]
/*********************/
const Map = () => {
  const numberOfRepetitions = 1
  //TODO: To be removed
  const [currentTrack, repeatOneMoreTime] = useMapLogic(
    outerBounds[0][0],
    outerBounds[0][1],
    dataStory,
    numberOfRepetitions
  )

  // @ts-ignore
  return (
    <Box
      margin={'auto'}
      width="100%"
      height={'500px'}
      border="1px"
      borderColor="red"
      boxShadow="2xl"
      rounded="md"
      p={3}
      zIndex={1}
    >
      <MapContainer bounds={outerBounds} style={{ height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          data={currentTrack}
          iconType={MobilityType.car}
          eventHandlers={{
            click: () => {
              repeatOneMoreTime()
            },
          }}
        />
        <Polyline
          positions={[
            [outerBounds[0][0], outerBounds[0][1]],
            [outerBounds[1][0], outerBounds[1][1]],
          ]}
          color={'red'}
        />
        <FeatureGroup>
          <Marker
            data={{ lat: outerBounds[0][0], lng: outerBounds[0][1] }}
            iconType={MapIcons.origin}
          />
          <Marker
            data={{ lat: outerBounds[1][0], lng: outerBounds[1][1] }}
            iconType={MapIcons.destination}
            eventHandlers={{
              click: () => {
                repeatOneMoreTime()
              },
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </Box>
  )
}

export default Map
