import { LeafletEventHandlerFnMap } from 'leaflet'
import { LeafletTrackingMarker } from 'react-leaflet-tracking-marker'

import Coordinates from '@/utils/interfaces/Coordinates'
import { getIcon } from '@/utils/markerIcons'

interface Props {
  readonly data: Coordinates
  readonly iconType: string
  eventHandlers?: LeafletEventHandlerFnMap
}

export default function AirplaneMarker({
  data = { lat: 0, lng: 0 },
  iconType = '',
  eventHandlers,
}: Props) {
  const { lat, lng } = data
  const icon = getIcon(iconType)

  return (
    <LeafletTrackingMarker
      icon={icon}
      position={[lat, lng]}
      duration={4000}
      rotationAngle={0}
      eventHandlers={eventHandlers}
    />
  )
}
