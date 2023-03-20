import { Box } from '@chakra-ui/react'

import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { FeatureGroup, MapContainer, Polyline, TileLayer } from 'react-leaflet'

import { MapIcons } from '@/utils/enums/MapIcons'
import { MobilityType } from '@/utils/enums/MobilityType'

import { Places } from '@/utils/interfaces/Places'

import Marker from '@/components/Map/Marker'
import OriginDestination from '@/components/OriginDestination'

import useMapLogic from '@/utils/hooks/useMapLogic'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Map = ({ path, places }: { path: string; places: Places }) => {
  const numberOfRepetitions = 1
  //TODO: To be removed
  const [currentTrack, repeatOneMoreTime] = useMapLogic(
    places.coordinates,
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
        bounds={places.coordinates as LatLngBoundsExpression}
        style={{ height: '100%', zIndex: 1 }}
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
        <Polyline
          positions={places.coordinates as LatLngExpression[]}
          color={'red'}
        />

        {/* Start marker and end marker */}
        <FeatureGroup>
          <Marker
            data={{
              lat: places.coordinates[0][0],
              lng: places.coordinates[0][1],
            }}
            iconType={MapIcons.origin}
          />
          <Marker
            data={{
              lat: places.coordinates[1][0],
              lng: places.coordinates[1][1],
            }}
            iconType={MapIcons.destination}
            eventHandlers={{
              click: () => {
                repeatOneMoreTime()
              },
            }}
          />
        </FeatureGroup>
      </MapContainer>

      <OriginDestination origin={places.name[0]} destination={places.name[1]} />
    </Box>
  )
}

export default Map
