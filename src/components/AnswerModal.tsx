import { useRouter } from 'next/navigation'

import { getCorrectAnswer, getMaxRounds, getRoundNumber } from '@/redux/slices/gameSlice'

import { Button, Heading, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'

import React from 'react'
import { useSelector } from 'react-redux'

import { convertSecondsToTimeObject } from '@/utils/convertions'
import useGameLogic from '@/utils/hooks/useGameLogic'

const AnswerModal = () => {
  const { push } = useRouter()
  const { onClose } = useDisclosure()
  const { open, nextRound, newGame } = useGameLogic()

  const correctAnswer = useSelector(getCorrectAnswer)
  const maxRounds = useSelector(getMaxRounds)
  const roundNumber = useSelector(getRoundNumber)

  const { days, hours, minutes } = convertSecondsToTimeObject(+correctAnswer.slice(0, -1))
  const OverlayOne = () => <ModalOverlay backdropFilter="blur(10px)" />

  const redirectToHome = () => {
    push('/')
  }

  return (
    <Modal isCentered isOpen={open} onClose={onClose} size={'4xl'} motionPreset="scale" trapFocus={false}>
      <OverlayOne />
      <ModalContent>
        <ModalHeader textAlign={'center'}>
          <Heading>Result</Heading>
        </ModalHeader>
        <ModalBody>
          <Text>
            {' '}
            days: {days}-hours: {hours}-minutes: {minutes}
          </Text>
          {roundNumber < maxRounds ? (
            <Button onClick={nextRound}>Next round</Button>
          ) : (
            <>
              <Button onClick={redirectToHome}>Exit</Button>
              <Button onClick={newGame}>New Game</Button>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AnswerModal
