import axios from 'axios'

import { ResponseType } from '@/pages/api/place'

import { PlacesRequest } from '@/utils/interfaces/Places'

export const getPlace: () => Promise<ResponseType> = async () => {
  return axios.get('/api/place').then((res) => res.data)
}

export const postTodoFn = async (data: PlacesRequest) => {
  return axios.post('/api/route', data).then((res) => res.data)
}
