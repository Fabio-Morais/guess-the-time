import L from 'leaflet'

import airplaneIcon from '../../public/favicon.ico'
import airplaneIcon3 from '../../public/next.svg'
import airplaneIcon2 from '../../public/vercel.svg'

export const getIcon = (type: string) => {
  switch (type) {
    case 'car':
      return iconCar
    case 'bike':
      return iconBike
    case 'human':
      return iconHuman
    case 'origin':
      return iconOrigin
    case 'dest':
      return iconDest
    default:
      return iconOrigin
  }
}

const iconCar = L.icon({
  iconSize: [45, 45],
  popupAnchor: [2, -20],
  iconUrl: airplaneIcon.src,
})
const iconBike = L.icon({
  iconSize: [45, 45],
  popupAnchor: [2, -20],
  iconUrl: airplaneIcon.src,
})
const iconHuman = L.icon({
  iconSize: [45, 45],
  popupAnchor: [2, -20],
  iconUrl: airplaneIcon.src,
})
const iconOrigin = L.icon({
  iconSize: [45, 45],
  popupAnchor: [2, -20],
  iconUrl: airplaneIcon2.src,
})
const iconDest = L.icon({
  iconSize: [45, 45],
  popupAnchor: [2, -20],
  iconUrl: airplaneIcon3.src,
})
