import { Header } from '../components/Header'
import { Flex } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { TypeFood } from '../components/TypeFood'
import { OurFood } from '../components/OurFood'

export function Home(){
  return(
    <>
      <Header/>
      <Flex
        justify='center'
        align='center'
        direction='column'
        p='2'>
        <Banner/>
        <TypeFood/>
        <OurFood/>
      </Flex>
    </>
  )
}
