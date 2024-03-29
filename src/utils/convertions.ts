import { MobilityType } from '@/utils/enums/MobilityType'

import Timer from '@/utils/interfaces/Timer'

export const convertSecondsToTimeObject = (s: number): Timer => {
  let hours,
    minutes,
    seconds = s

  if (isNaN(s)) {
    throw new TypeError('Value sent to seconds-converter must be a number.')
  }
  minutes = Math.floor(seconds / 60)
  seconds = seconds % 60

  hours = Math.floor(minutes / 60)
  minutes = minutes % 60

  const d = Math.floor(hours / 24)
  hours = hours % 24

  return { days: d, hours: hours, minutes: minutes, seconds: seconds }
}

export const prizeIndexToMobileType = (index: number) => {
  switch (index) {
    case 0:
      return MobilityType.car
    case 1:
      return MobilityType.bike
    case 2:
      return MobilityType.walking
    default:
      return MobilityType.car
  }
}
