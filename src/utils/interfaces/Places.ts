export interface Places {
  coordinates: number[][]
  name: string[]
}

export interface Place {
  coordinates: number[]
  name: string
}

export interface PlacesRequest {
  origin: Place
  destination: Place
}
