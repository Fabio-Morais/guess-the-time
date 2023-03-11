import { Button, Heading, Link } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Heading letterSpacing={'tighter'}>Hello World</Heading>
      <Button>
        <Link href="/singleplayer">game</Link>
      </Button>
    </>
  )
}
