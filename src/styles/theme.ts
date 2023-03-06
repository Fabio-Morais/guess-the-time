import { ChakraTheme, extendTheme } from '@chakra-ui/react'

const customTheme: Partial<ChakraTheme> = {
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  fonts: {},
}

export const theme = extendTheme(customTheme)
