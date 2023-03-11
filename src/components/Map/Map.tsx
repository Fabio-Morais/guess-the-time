import 'leaflet/dist/leaflet.css'
import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet'

import { Box } from '@chakra-ui/react'

import Marker from '@/components/Map/Marker'
import useMapLogic from '@/utils/hooks/useMapLogic'

const outerBounds: any = [
  [32, 34],
  [31, 34],
]
const Map = () => {
  const [currentTrack] = useMapLogic()

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
        <Marker data={currentTrack} iconType="car" />
        <FeatureGroup>
          <Marker data={{ lat: 32, lng: 34 }} iconType="origin" />
          <Marker data={{ lat: 31, lng: 34 }} iconType="dest" />
        </FeatureGroup>
      </MapContainer>
    </Box>
  )
}

export default Map
