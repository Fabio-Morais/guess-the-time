import airplaneIcon from '../../public/favicon.ico'
import destination from '../../public/map/flag.png'
import origin from '../../public/map/placeholder.png'

import L from 'leaflet'

import { MapIcons } from '@/utils/enums/MapIcons'
import { MobilityType } from '@/utils/enums/MobilityType'

export const getIcon = (type: string) => {
  switch (type) {
    case MobilityType.car:
      return iconCar
    case MobilityType.bike:
      return iconBike
    case MobilityType.walking:
      return iconHuman
    case MapIcons.origin:
      return iconOrigin
    case MapIcons.destination:
      return iconDest
    default:
      return iconOrigin
  }
}

const iconCar = L.icon({
  iconSize: [45, 45],
  iconAnchor: [20, 30],
  iconUrl: airplaneIcon.src,
})
const iconBike = L.icon({
  iconSize: [45, 45],
  iconAnchor: [2, -20],
  iconUrl: airplaneIcon.src,
})
const iconHuman = L.icon({
  iconSize: [45, 45],
  iconAnchor: [2, -20],
  iconUrl: airplaneIcon.src,
})
const iconOrigin = L.icon({
  iconSize: [45, 45],
  iconAnchor: [25, 40],
  iconUrl: origin.src,
})
const iconDest = L.icon({
  iconSize: [45, 45],
  iconAnchor: [10, 45],
  iconUrl: destination.src,
})
