import { ChakraTheme, defineStyleConfig, extendTheme } from '@chakra-ui/react'

const Divider = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    horizontal: {
      background: 'black',
      color: 'black',
      borderColor: 'black',
      height: '3px',
      width: '100px',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
})

const customTheme: Partial<ChakraTheme> = {
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  fonts: {},
  components: { Divider },
}

export const theme = extendTheme(customTheme)
