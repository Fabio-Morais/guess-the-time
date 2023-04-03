import axios from 'axios'

import { ResponseType } from '@/pages/api/place'

/*
 * TODO: FOR DEBUG ONLY, REMOVE THIS
 * */
async function sleep(msec: number) {
  return new Promise((resolve) => setTimeout(resolve, msec))
}
export const getPlace: () => Promise<ResponseType> = async () => {
  await sleep(2000)
  return axios.get('/api/place').then((res) => res.data)
}
