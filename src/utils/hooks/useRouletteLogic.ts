import { setTravelMode } from '@/redux/slices/gameSlice'
import { AppDispatch } from '@/redux/store'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { prizeIndexToMobileType } from '@/utils/convertions'
import { prizes } from '@/utils/defaultValues'
import { generateId, randomArray, randomNumberInRange, reproductionArray } from '@/utils/generator'

type HandleOnClose = () => void

export const useRouletteLogic = (start: boolean, handleOnClose: HandleOnClose) => {
  const reproducedPrizeList = [
    ...randomArray(prizes, prizes.length * 2),
    ...reproductionArray(prizes, prizes.length * 20),
  ]

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id: generateId(),
  }))

  const winPrizeIndex = randomNumberInRange(0, prizes.length - 1)
  const mobileType = prizeIndexToMobileType(winPrizeIndex)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (start) {
      dispatch(setTravelMode(mobileType))
    }
  }, [dispatch, mobileType, start, winPrizeIndex])

  const prizeIndex = prizes.length * 10 + winPrizeIndex

  const handlePrizeDefined = () => {
    setTimeout(() => {
      handleOnClose()
    }, 500)
  }

  return { prizeList, prizeIndex, handlePrizeDefined } as const
}
