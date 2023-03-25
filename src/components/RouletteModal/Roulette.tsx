import dynamic from 'next/dynamic'

import { Box } from '@chakra-ui/react'

import 'react-roulette-pro/dist/index.css'

import { useRouletteLogic } from '@/utils/hooks/useRouletteLogic'

const RoulettePro = dynamic(() => import('react-roulette-pro'), {
  ssr: false,
})

type HandleOnClose = () => void

const Roulette = ({ start, handleOnClose }: { start: boolean; handleOnClose: HandleOnClose }) => {
  const { prizeList, prizeIndex, handlePrizeDefined } = useRouletteLogic(start, handleOnClose)

  return (
    <>
      <Box width={'100%'}>
        <RoulettePro
          prizes={prizeList}
          prizeIndex={prizeIndex}
          start={start}
          onPrizeDefined={handlePrizeDefined}
          spinningTime={3}
        />
      </Box>
    </>
  )
}
export default Roulette
