import { Box } from '@chakra-ui/react'

import Marker from '@/components/Map/Marker'
import { MapIcons } from '@/utils/enums/MapIcons'
import { MobilityType } from '@/utils/enums/MobilityType'
import useMapLogic from '@/utils/hooks/useMapLogic'

import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { FeatureGroup, MapContainer, Polyline, TileLayer } from 'react-leaflet'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Map = ({ path, places }: { path: string; places: number[][] }) => {
  const numberOfRepetitions = 1
  //TODO: To be removed
  const [currentTrack, repeatOneMoreTime] = useMapLogic(
    places,
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
      <MapContainer
        bounds={places as LatLngBoundsExpression}
        style={{ height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Vehicle marker */}
        <Marker
          data={currentTrack}
          iconType={MobilityType.car}
          eventHandlers={{
            click: () => {
              repeatOneMoreTime()
            },
          }}
        />

        {/* Path from start to end */}
        <Polyline positions={places as LatLngExpression[]} color={'red'} />

        {/* Start marker and end marker */}
        <FeatureGroup>
          <Marker
            data={{ lat: places[0][0], lng: places[0][1] }}
            iconType={MapIcons.origin}
          />
          <Marker
            data={{ lat: places[1][0], lng: places[1][1] }}
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
