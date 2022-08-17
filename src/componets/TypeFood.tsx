import { Badge, Flex, Icon, Text } from '@chakra-ui/react'
import { ForkKnife, Hamburger, Pizza } from 'phosphor-react'

export function TypeFood(){
  return(
    <Flex
      gap='6'
      mt='10'>
      <Badge
        w={['5rem','8rem']}
        h={['6rem','9rem']}
        textAlign='center'>
        <Icon
          as={Hamburger}
          color='pink.400'
          mt='3'
          fontSize={['24','3rem']}/>
        <Text
          mt='4'
          fontSize={['10px','16px']}>
          Hamburger
        </Text>
      </Badge>

      <Badge
        w={['5rem','8rem']}
        h={['6rem','9rem']}
        textAlign='center'>
        <Icon
          as={Pizza}
          color='pink.400'
          mt='3'
          fontSize={['24','3rem']}/>
        <Text 
          mt='4'
          fontSize={['10px','16px']}>
          Pizza
        </Text>
      </Badge>

      <Badge
        w={['5rem','8rem']}
        h={['6rem','9rem']}
        textAlign='center'>
        <Icon
          as={ForkKnife}
          color='pink.400'
          mt='3'
          fontSize={['24','3rem']}/>
        <Text 
          mt='4'
          fontSize={['10px','16px']}>
          Oters
        </Text>
      </Badge>
    </Flex>
  )
}
