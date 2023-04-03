import { getMaxRounds, getRoundNumber } from '@/redux/slices/gameSlice'
import { RootState } from '@/redux/store'

import { Box, HStack, Text } from '@chakra-ui/react'

import { useSelector } from 'react-redux'

const RoundBadge = () => {
  const userData = useSelector((state: RootState) => state.user)
  const currentRound = useSelector(getRoundNumber)
  const maxRounds = useSelector(getMaxRounds)
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
            <Text>{userData.score}</Text>
          </Box>

          <Box>
            <Text>Round</Text>
            <Text>
              {currentRound}/{maxRounds}
            </Text>
          </Box>
        </HStack>
      </Box>
    </>
  )
}

export default RoundBadge
