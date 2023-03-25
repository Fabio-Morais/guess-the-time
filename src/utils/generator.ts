import { Prizes } from '@/utils/interfaces/Prizes'

export const randomArray = (array: Prizes[] = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
]
let aux = 0
export const reproductionArray = (array: Prizes[] = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => {
      if (aux == 3) {
        aux = 0
      }
      return array[aux++]
    }),
]

export const randomNumberInRange = (min: number, max: number) => {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateId = () => `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`
