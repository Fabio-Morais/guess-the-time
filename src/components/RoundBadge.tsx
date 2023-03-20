import { Box, HStack, Text } from '@chakra-ui/react'

import { Game } from '@/utils/interfaces/Game'

const RoundBadge = ({ gameData }: { gameData: Game }) => {
  return (
    <>
      <Box
        position="fixed"
        right={0}
        top="5rem"
        zIndex={2}
        border="1px"
        borderColor="red"
        boxShadow="2xl"
        borderRadius="999em 40px 40px 999em"
        p={2}
        pl={8}
      >
        <HStack spacing={5}>
          <Box>
            <Text>Score</Text>
            <Text>{gameData.score}</Text>
          </Box>

          <Box>
            <Text>Round</Text>
            <Text>
              {gameData.currentRound}/{gameData.maxRounds}
            </Text>
          </Box>
        </HStack>
      </Box>
    </>
  )
}

export default RoundBadge
