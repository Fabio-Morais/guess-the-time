import { Heading, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'

import { useState } from 'react'

import RouletteGroup from '@/components/RouletteModal/RouletteGroup'

const RouletteModal = () => {
  const { onClose } = useDisclosure()
  const [isOpen, setIsOpen] = useState(true)
  const OverlayOne = () => <ModalOverlay backdropFilter="blur(10px)" />

  const handleOnClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'4xl'} motionPreset="scale" trapFocus={false}>
        <OverlayOne />
        <ModalContent>
          <ModalHeader textAlign={'center'}>
            <Heading>Spin it!!!</Heading>
          </ModalHeader>
          <ModalBody>{isOpen && <RouletteGroup handleOnClose={handleOnClose} />}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RouletteModal
