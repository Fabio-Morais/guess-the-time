import { LeafletTrackingMarker } from 'react-leaflet-tracking-marker'

import Coordinates from '@/utils/interfaces/Coordinates'
import { getIcon } from '@/utils/markerIcons'

interface Props {
  readonly data: Coordinates
  readonly iconType: string
}

export default function AirplaneMarker({
  data = { lat: 0, lng: 0 },
  iconType = '',
}: Props) {
  const { lat, lng } = data
  const icon = getIcon(iconType)

  return (
    <LeafletTrackingMarker
      icon={icon}
      position={[lat, lng]}
      duration={1000}
    ></LeafletTrackingMarker>
  )
}
