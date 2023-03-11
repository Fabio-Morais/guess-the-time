import { useState } from 'react'

import { Box, Text } from '@chakra-ui/react'

interface Props {
  maxRounds: number
}
const RoundBadge = ({ maxRounds = 1 }: Props) => {
  const [round] = useState(1)
  return (
    <>
      <Box
        position="fixed"
        backgroundColor="red"
        right={0}
        top="5rem"
        zIndex={2}
        border="1px"
        borderColor="red"
        boxShadow="2xl"
        roundedLeft="lg"
        borderLeftRadius="40%"
        p={2}
        pl={5}
      >
        <Text>Round</Text>
        <Text>
          {round}/{maxRounds}
        </Text>
      </Box>
    </>
  )
}

export default RoundBadge
