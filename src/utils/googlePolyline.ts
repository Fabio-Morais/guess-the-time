import { LatLngTuple, decode } from '@googlemaps/polyline-codec'

import Coordinates from '@/utils/interfaces/Coordinates'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const decodeToArray = (encodedString: string): number[][] => {
  return decode(encodedString)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const decodeToJson = (encodedString: string): Array<Coordinates> => {
  const jsonArray: Array<Coordinates> = []
  const array: LatLngTuple[] = decode(encodedString)

  array.forEach((element) => {
    jsonArray.push({ lat: element[0], lng: element[1] })
  })

  return jsonArray
}
