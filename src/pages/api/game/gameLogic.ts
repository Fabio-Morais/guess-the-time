import { Places } from '@/utils/interfaces/Places'
import Timer from '@/utils/interfaces/Timer'

export interface Answer {
  answer: Timer
  places: Places
}
/*
 * @key: coordinates [0][0],[0][1],[1][0],[1][1]
 * @value: score
 * */
const gameScore = new Map<string, number>()

/*
 * @key: user ID
 * @value: duration
 * */
const gameAnswers = new Map<string, string>()

export function addAnswer(id: string, answer: string) {
  gameAnswers.set(id, answer)
}

export function getAnswer(id: string): string | undefined {
  return gameAnswers.get(id)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function increaseScore(id: string, value: number) {
  const currentScore = gameScore.get(id)
  if (currentScore === undefined) {
    gameScore.set(id, value)
  } else {
    gameScore.set(id, currentScore + value)
  }
}

export function getScore(id: string): number | undefined {
  return gameScore.get(id)
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function validateAnswer(answer: Answer) {
  return 'test'
}
