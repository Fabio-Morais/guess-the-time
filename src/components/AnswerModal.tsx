import { Button, Heading, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'

import useGameLogic from '@/utils/hooks/useGameLogic'

const AnswerModal = () => {
  const { onClose } = useDisclosure()
  const { open, nextRound } = useGameLogic()
  const OverlayOne = () => <ModalOverlay backdropFilter="blur(10px)" />

  return (
    <Modal isCentered isOpen={open} onClose={onClose} size={'4xl'} motionPreset="scale" trapFocus={false}>
      <OverlayOne />
      <ModalContent>
        <ModalHeader textAlign={'center'}>
          <Heading>Spin it!!!</Heading>
        </ModalHeader>
        <ModalBody>
          {' '}
          <Button onClick={nextRound}>Next round</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AnswerModal
