import { Box, Flex, Image, Text } from '@chakra-ui/react'

export function Banner(){
  return(
    <Box
      w='100%'
      h={['4rem','6rem']}
      bg='pink.400'
      borderRadius='.5rem'
      mt='2rem'>
      <Flex
        justify='space-between'
        p='2'>
        <Text 
          color='#fff'
          fontWeight='bold'
          fontSize={['16px','24px']}>
          Your order gets <br/>to you quickly.
        </Text>
        <Image 
          src='https://pngimg.com/uploads/pizza/small/pizza_PNG44005.png'
          alt='pizza'
          w={['90px','160px']}/>
      </Flex>
    </Box>
  )
}
